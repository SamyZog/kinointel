/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useText } from "../../context/TextProvider";
import Divider from "../Divider/Divider";
import ShowCase from "../ShowCase/ShowCase";
import styles from "./MoviePage.module.scss";

function MoviePage(props) {
	const { text } = useText();
	const movieinfo = text.placeholders.movie;
	const { data, similarMovies, genresArr } = props;
	const {
		backdrop_path,
		budget,
		homepage,
		original_language,
		original_title,
		overview,
		genres,
		production_countries,
		release_date,
		revenue,
		runtime,
		spoken_languages,
		tagline,
		title,
		vote_average,
	} = data;

	return (
		<div className={styles.MoviePage}>
			<section>
				<h1 className={styles.MoviePage__title}>{title}</h1>
				<Divider />
				<div className={styles.MoviePage__allinfo}>
					<div className={styles.MoviePage__primary}>
						<p className={styles.MoviePage__overview}>{overview}</p>
						<div className={styles.MoviePage__posterdiv}>
							<img
								className={styles.MoviePage__poster}
								src={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
								alt="title"
							/>
						</div>
					</div>
					<aside className={styles.MoviePage__secondary}>
						<ul className={styles.MoviePage__infolist}>
							<li className={styles.MoviePage__addinfo}>
								<h2 className={styles.MoviePage__avg}>{vote_average.toFixed(1)}</h2>
							</li>
							<li className={styles.MoviePage__addinfo}>
								<a className={styles.MoviePage__link} href={homepage}>
									{title}
								</a>
							</li>
							{tagline && (
								<li className={styles.MoviePage__addinfo}>
									<h2 className={styles.MoviePage__tagline}>{tagline}</h2>
								</li>
							)}
							<li>
								<h3 className={styles.MoviePage__origtitle}>{original_title}</h3>
							</li>
							<li className={styles.MoviePage__addinfo}>
								{movieinfo.release}: {new Date(release_date).getFullYear()}
							</li>
							<li className={styles.MoviePage__addinfo}>
								{movieinfo.runtime}: {runtime} {movieinfo.min}
							</li>
							{budget !== 0 && (
								<li className={styles.MoviePage__addinfo}>
									{movieinfo.budget}: {budget}$
								</li>
							)}
							{revenue !== 0 && (
								<li className={styles.MoviePage__addinfo}>
									{movieinfo.revenue}: {revenue}$
								</li>
							)}
							<li className={styles.MoviePage__addinfo}>
								{movieinfo.countries}: {production_countries.map((el) => el.name).join(", ")}
							</li>
							<li className={styles.MoviePage__addinfo}>
								{movieinfo.genres}: {genres.map((el) => el.name).join(", ")}
							</li>
							<li className={styles.MoviePage__addinfo}>
								{movieinfo.language}: {original_language}
							</li>
							<li className={styles.MoviePage__addinfo}>
								{movieinfo.languages}: {spoken_languages.map((el) => el.name).join(", ")}
							</li>
						</ul>
					</aside>
				</div>
			</section>
			<Divider />
			<section className={styles.MoviePage__similar}>
				<h1 className={styles.MoviePage__similarheading}>{movieinfo.similar}</h1>
				<Divider />
				<ShowCase data={similarMovies.results} genres={genresArr.genres} />
			</section>
		</div>
	);
}

export default MoviePage;
