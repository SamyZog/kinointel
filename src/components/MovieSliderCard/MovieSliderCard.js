/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./MovieSliderCard.module.scss";

function MovieSliderCard(props) {
	const { poster, title, overview, date, avg } = props;

	return (
		<div className={styles.MovieSliderCard}>
			<div className={styles.MovieSliderCard__info}>
				<div
					className={styles.MovieSliderCard__poster}
					style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w200${poster})` }}></div>
				<div className={styles.MovieSliderCard__textinfo}>
					<h2 className={styles.MovieSliderCard__title}>{title}</h2>
					<p className={styles.MovieSliderCard__overview}>{overview}</p>
					<h4 className={styles.MovieSliderCard__date}>{date}</h4>
				</div>
				<div className={styles.MovieSliderCard__voteinfo}>
					<h3 className={styles.MovieSliderCard__average}>{avg.toFixed(1)}</h3>
				</div>
			</div>
		</div>
	);
}

export default MovieSliderCard;
