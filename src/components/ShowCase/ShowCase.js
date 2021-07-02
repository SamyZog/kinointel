import React from "react";
import { useText } from "../../context/TextProvider";
import CustomLink from "../CustomLink/CustomLink";
import styles from "./ShowCase.module.scss";

function ShowCase(props) {
	const { text } = useText();
	const { data, genres } = props;

	return (
		<div className={styles.ShowCase}>
			<ul className={styles.ShowCase__list}>
				{data.length === 0 ? (
					<h1>no suggestions</h1>
				) : (
					data.map(({ id, title, release_date, poster_path, genre_ids }) => {
						return (
							<CustomLink key={id} href={`/movie/${id}`}>
								<li
									title={title}
									className={styles.ShowCase__listitem}
									style={{
										backgroundImage: poster_path
											? `url(https://image.tmdb.org/t/p/w500${poster_path})`
											: "url(https://via.placeholder.com/500.png)",
									}}>
									<div className={styles.ShowCase__info}>
										<p className={styles.ShowCase__title}>{title}</p>
										<p className={styles.ShowCase__year}>
											{release_date && new Date(release_date).getFullYear()}
										</p>
										{genres && (
											<div className={styles.ShowCase__genres}>
												{text.placeholders.filter.genre}:
												{genre_ids &&
													genre_ids.map((genreId) => {
														return (
															<p key={genreId}>
																{genres.filter((el) => el.id === genreId)[0].name}
															</p>
														);
													})}
											</div>
										)}
									</div>
								</li>
								<h4 className={styles.ShowCase__title}>
									{title.length > 20 ? `${title.slice(0, 20)}...` : title}
								</h4>
							</CustomLink>
						);
					})
				)}
			</ul>
		</div>
	);
}

export default ShowCase;
