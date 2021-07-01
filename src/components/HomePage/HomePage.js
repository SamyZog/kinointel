import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import useSWR from "swr";
import { Arrow } from "../../../public/icons/app";
import Divider from "../Divider/Divider";
import Filters from "../Filters/Filters";
import ShowCase from "../ShowCase/ShowCase";
import Slider from "../Slider/Slider";
import Spinner from "../Spinner/Spinner";
import styles from "./HomePage.module.scss";

function HomePage(props) {
	const { locale } = useRouter();
	const { trending, genres } = props;
	const [page, setPage] = useState(1);
	// the filters state that is passed to the child component Filters to retrieve filter values for the API endpoint
	const [filters, setFilters] = useState({
		sort: "popularity.desc",
		year: null,
		genre: null,
	});
	const [movies, setMovies] = useState([]);

	const initialMount = useRef(true);
	const maxPages = useRef(null);
	const showCaseRef = useRef(null);

	// we statically generate the data (trending, genres) in the parent component (which is the index.js page), the useSWR hook is here to fetch the filtered results based on the same endpoint from the movieDB https://developers.themoviedb.org/3/discover/movie-discover
	const { data, error } = useSWR(
		`https://api.themoviedb.org/3/discover/movie?api_key=${
			process.env.NEXT_PUBLIC_TMDB_API_KEY
		}&language=${locale}&sort_by=${filters.sort}&include_adult=false&include_video=false&page=${page}${
			filters.year ? `&primary_release_year=${filters.year}` : ""
		}${filters.genre ? `&with_genres=${filters.genre}` : ""}&with_watch_monetization_types=flatrate`,
		(url) =>
			axios(url).then((res) => {
				if (!maxPages.current) {
					maxPages.current = res.data.total_pages;
				}

				if (page === 1) {
					setMovies((state) => res.data.results);
				} else {
					setMovies((state) => {
						return [...state, ...res.data.results];
					});
				}
				initialMount.current = false;
				return res.data;
			}),
	);

	const scrollToTop = () => {
		window.scrollTo({ behavior: "smooth", top: showCaseRef.current.offsetTop - 75 });
	};

	const getMoreMovies = () => {
		if (page > maxPages) {
			return;
		}
		setPage((state) => state + 1);
	};

	useEffect(() => {
		setPage(1);
	}, [filters.sort, filters.year, filters.genre]);

	return (
		<div className={styles.HomePage}>
			<section className={styles.HomePage__trendingmovies}>
				<Slider data={trending.results} />
			</section>
			<Divider />
			<section className={styles.HomePage__showcase} ref={showCaseRef}>
				<Filters genres={genres} data={data} setFilters={setFilters} />
				<Divider />
				{movies && movies.length > 0 ? <ShowCase data={movies} genres={genres} /> : <Spinner />}
				<button className={styles.HomePage__loadmorebtn} onClick={getMoreMovies}>
					LOAD MORE
				</button>
				{page > 1 && (
					<button className={styles.HomePage__totop} onClick={scrollToTop}>
						<Arrow />
					</button>
				)}
			</section>
			<Divider />
		</div>
	);
}

export default HomePage;
