import React, { useEffect, useState } from "react";
import { useText } from "../../context/TextProvider";
import DropDown from "../DropDown/DropDown";
import styles from "./Filters.module.scss";

function Filters(props) {
	const { text } = useText();
	let { genres, setFilters } = props;
	// add the none option to the genres filter
	genres = [{ id: "----", name: "----" }, ...genres];
	// get lang specific text for filters (array), which is passed to DropDown component as the possible  options
	const filters = Object.keys(text.placeholders.sort);
	let years = text.placeholders.filter.years;
	// add the none option to the years filter
	years = ["----", ...years];

	// set initial filter values
	const [filter, setFilter] = useState("popular");
	const [year, setYear] = useState(null);
	const [currGenre, setCurrGenre] = useState(null);

	useEffect(() => {
		let filters = { sort: "", year, genre: currGenre };

		// assign correct query values according to the movieDB documentation https://developers.themoviedb.org/3/discover/movie-discover
		switch (filter) {
			case "popular":
				filters.sort = "popularity.desc";
				break;
			case "yearasc":
				filters.sort = "primary_release_date.asc";
				break;
			case "yeardesc":
				filters.sort = "primary_release_date.desc";
				break;
			case "titleasc":
				filters.sort = "original_title.asc";
				break;
			case "titledesc":
				filters.sort = "original_title.desc";
				break;
			default:
				break;
		}
		// pass filter values to the parent component to be used as queries to fetch filtered results
		setFilters(filters);
	}, [filter, year, currGenre]);

	const setFilterOption = (filter) => {
		setFilter(filter);
	};

	const setYearOption = (year) => {
		setYear(year === "----" ? null : year);
	};

	const setGenreOption = (genre) => {
		setCurrGenre(genre === "----" ? null : genre);
	};

	return (
		<div className={styles.Filters}>
			<div className={styles.Filters__sort}>
				<h2 className={styles.Filters__filtername}>{text.placeholders.filter.sortby}</h2>
				<div className={styles.Filters__sortby}>
					<DropDown
						options={filters}
						currentOption={text.placeholders.sort[filter]}
						render={(height) => {
							return filters.map((filter) => {
								return (
									<button
										onClick={setFilterOption.bind(null, filter)}
										key={filter}
										style={{ height }}>
										{text.placeholders.sort[filter]}
									</button>
								);
							});
						}}
					/>
				</div>
			</div>
			<div className={styles.Filters__year}>
				<h2 className={styles.Filters__filtername}>{text.placeholders.filter.year}</h2>
				<div className={styles.Filters__sortyear}>
					<DropDown
						options={years}
						currentOption={year ? year : "----"}
						render={(height, open) => {
							return (
								<div
									className={styles.Filters__yearscontainer}
									// limit height of dropdown (options are too many)
									style={{ maxHeight: open ? `calc(${height}px * 5)` : "0" }}>
									{years.map((year) => {
										return (
											<button
												onClick={setYearOption.bind(null, year)}
												key={year}
												style={{ height }}>
												{year}
											</button>
										);
									})}
								</div>
							);
						}}
					/>
				</div>
			</div>
			<div className={styles.Filters__genre}>
				<h2 className={styles.Filters__filtername}>{text.placeholders.filter.genre}</h2>
				<div className={styles.Filters__sortgenre}>
					<DropDown
						options={genres.map(({ name }) => name)}
						currentOption={currGenre ? genres.filter(({ id }) => id === currGenre)[0].name : "----"}
						render={(height, open) => {
							return (
								<div
									className={styles.Filters__genrescontainer}
									// limit height of dropdown (options are too many)
									style={{ maxHeight: open ? `calc(${height}px * 5)` : "0" }}>
									{genres.map(({ id, name }) => {
										return (
											<button onClick={setGenreOption.bind(null, id)} key={id} style={{ height }}>
												{name}
											</button>
										);
									})}
								</div>
							);
						}}
					/>
				</div>
			</div>
		</div>
	);
}

export default Filters;
