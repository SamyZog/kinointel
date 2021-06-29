/* eslint-disable @next/next/no-img-element */
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useText } from "../../context/TextProvider";
import Divider from "../Divider/Divider";
import DropDown from "../DropDown/DropDown";
import ShowCase from "../ShowCase/ShowCase";
import styles from "./PersonPage.module.scss";

function PersonPage(props) {
	const { text } = useText();
	const { locale } = useRouter();
	const { fullname, birth_day, birthplace, bio, filmography, show, more, less } = text.placeholders.person;
	const [length, setLength] = useState(500);
	const { person, movies, genres } = props;
	const { name, place_of_birth, birthday, biography, profile_path } = person;
	const { cast } = movies; // array
	const [actorMovies, setActorMovies] = useState([]);
	const [sortMethod, setSortMethod] = useState("popular");
	const sorterObj = text.placeholders.sort;
	const options = Object.keys(text.placeholders.sort);

	useEffect(() => {
		setActorMovies(cast.sort((a, b) => b.popularity - a.popularity));
	}, [locale]);

	const changeSortMethod = (method) => {
		setSortMethod(method);
		let sortedArray;
		switch (method) {
			case "popular":
				sortedArray = actorMovies.sort((a, b) => +b.popularity - +a.popularity);
				break;
			case "yeardesc":
				sortedArray = actorMovies.sort((a, b) => {
					const aYear = new Date(a.release_date).getFullYear();
					const bYear = new Date(b.release_date).getFullYear();
					return +bYear - +aYear;
				});
				break;
			case "yearasc":
				sortedArray = actorMovies.sort((a, b) => {
					const aYear = new Date(a.release_date).getFullYear();
					const bYear = new Date(b.release_date).getFullYear();
					return +aYear - +bYear;
				});
				break;
			default:
				break;
		}
		setActorMovies([...sortedArray]);
	};

	const toggleBio = () => {
		setLength((state) => {
			return state === biography.length ? 500 : biography.length;
		});
	};

	return (
		<div className={styles.PersonPage}>
			<section>
				<h1 className={styles.PersonPage__name}>
					{fullname}: {name}
				</h1>
				<h2 className={styles.PersonPage__birthday}>
					{birth_day}: {birthday}
				</h2>
				<h2 className={styles.PersonPage__birthplace}>
					{birthplace}: {place_of_birth}
				</h2>
				<Divider />
				<div className={styles.PersonPage__primary}>
					<div className={styles.PersonPage__info}>
						<img
							className={styles.PersonPage__img}
							src={`https://image.tmdb.org/t/p/w300${profile_path}`}
							alt={name}
						/>
						<h2 className={styles.PersonPage__bioheader}>{bio} :</h2>
						<Divider />
						<p className={styles.PersonPage__bio}>
							{biography.slice(0, length)}{" "}
							{biography.length >= length && (
								<button className={styles.PersonPage__show} onClick={toggleBio}>
									{show} {length === biography.length ? less : more}
								</button>
							)}
						</p>
					</div>
				</div>
			</section>
			<Divider />
			<section>
				<div className={styles.PersonPage__wrapper}>
					<h2 className={styles.PersonPage__filmography}>{filmography}: </h2>
					<div className={styles.PersonPage__moviesort}>
						<DropDown
							currentOption={sorterObj[sortMethod]}
							options={options}
							render={(height) => {
								{
									return options.slice(0, 3).map((option) => {
										return (
											<button
												style={{ height }}
												key={option}
												onClick={changeSortMethod.bind(null, option)}>
												{sorterObj[option]}
											</button>
										);
									});
								}
							}}
						/>
					</div>
				</div>
				<Divider />
				<div className={styles.PersonPage__showcase}>
					<ShowCase data={actorMovies} genres={genres.genres} />
				</div>
			</section>
		</div>
	);
}

export default PersonPage;
