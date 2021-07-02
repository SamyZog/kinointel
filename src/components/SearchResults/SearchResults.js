/* eslint-disable @next/next/no-img-element */
import React, { forwardRef, useEffect } from "react";
import { Avatar, Film } from "../../../public/icons/app";
import { useText } from "../../context/TextProvider";
import CustomLink from "../CustomLink/CustomLink";
import Divider from "../Divider/Divider";
import Spinner from "../Spinner/Spinner";
import styles from "./SearchResults.module.scss";

const SearchResults = (props, ref) => {
	const { text } = useText();
	const { data, error, option, setIndex, inputVal, clearInput, setOpen } = props;

	const toggleIndex = (e) => {
		switch (e.key) {
			case "ArrowUp":
				setIndex((state) => state - 1);
				break;
			case "ArrowDown":
				setIndex((state) => state + 1);
			default:
				break;
		}
	};

	useEffect(() => {
		document.addEventListener("keydown", toggleIndex);
		window.addEventListener("click", closeResults);
		return () => {
			document.removeEventListener("keydown", toggleIndex);
			window.removeEventListener("click", closeResults);
		};
	}, []);

	const closeResults = () => {
		setOpen(false);
	};

	return (
		<div className={styles.SearchResults}>
			{!data && !error && <Spinner />}
			{error && (
				<div className={styles.SearchResults__error}>
					<h1 className={styles.SearchResults__errormsg}>{text.placeholders.error}</h1>
				</div>
			)}
			{data && (
				<ul className={styles.SearchResults__list} ref={ref}>
					{(data.results.length > 10 ? data.results.slice(0, 10) : data.results).map((result) => {
						if (option === "person") {
							const { id, name, popularity, profile_path } = result;
							return (
								<li key={id} className={styles.SearchResults__personListItem}>
									<CustomLink href={`/person/${id}`}>
										<div className={styles.SearchResults__personPoster}>
											{profile_path ? (
												<img
													src={`https://image.tmdb.org/t/p/w200${profile_path}`}
													alt={name}
													className={styles.SearchResults__personImage}
												/>
											) : (
												<Avatar />
											)}
										</div>
										<p className={styles.SearchResults__personName}>{name.toUpperCase()}</p>
										<p className={styles.SearchResults__personRating}>
											{text.placeholders.popularity}: {popularity.toFixed(2)}
										</p>
									</CustomLink>
									<hr />
								</li>
							);
						}

						if (option === "movie") {
							const { id, title, release_date, poster_path, vote_average, vote_count } = result;

							let votes;
							let voteCount = vote_count.toString();
							if (voteCount.endsWith("1")) {
								votes = text.placeholders.votesingle;
							} else if (voteCount.endsWith("2") || voteCount.endsWith("3") || voteCount.endsWith("4")) {
								votes = text.placeholders.votesplural;
							} else {
								votes = text.placeholders.votespluralplus;
							}

							return (
								<li key={id} className={styles.SearchResults__movieListItem} onClick={clearInput}>
									<CustomLink href={`/movie/${id}`}>
										<div className={styles.SearchResults__moviePoster}>
											{poster_path ? (
												<img
													src={`https://image.tmdb.org/t/p/w200${poster_path}`}
													alt={title}
													className={styles.SearchResults__movieImage}
												/>
											) : (
												<Film />
											)}
										</div>
										<div className={styles.SearchResults__movieInfo}>
											<p className={styles.SearchResults__movieName}>{title.toUpperCase()}</p>
											<p className={styles.SearchResults__movieYear}>
												{release_date && new Date(release_date).getFullYear()}
											</p>
										</div>
										<div className={styles.SearchResults__movieVoteResults}>
											<p className={styles.SearchResults__movieRating}>
												{text.placeholders.rating}: {vote_average.toFixed(2)}
											</p>
											<p className={styles.SearchResults__movieVotes}>
												{vote_count} {votes}
											</p>
										</div>
									</CustomLink>
									<Divider />
								</li>
							);
						}
					})}
					{data.results.length > 10 && (
						<li className={styles.SearchResults__viewAll} onClick={clearInput}>
							<CustomLink
								href={{
									pathname: "/movies/",
									query: { query: inputVal, page: "1" },
								}}>
								View All Results... ({data.total_results})
							</CustomLink>
						</li>
					)}
				</ul>
			)}
		</div>
	);
};

export default forwardRef(SearchResults);
