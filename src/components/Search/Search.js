import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import useSWR from "swr";
import { v4 } from "uuid";
import { Close, Loupe } from "../../../public/icons/app";
import { useText } from "../../context/TextProvider";
import DropDown from "../DropDown/DropDown";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import styles from "./Search.module.scss";

function Search(props) {
	const { text } = useText();
	const { locale } = useRouter();
	const options = ["movies", "actors"];
	const optionsText = [text.placeholders.options.movies, text.placeholders.options.actors];
	const [inputVal, setInputVal] = useState("");
	const [currentOption, setCurrentOption] = useState("movie");
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (inputVal.length > 0) {
			setOpen(true);
		} else {
			setOpen(false);
		}
	}, [inputVal]);

	const { data, error } = useSWR(
		inputVal.length > 0
			? `https://api.themoviedb.org/3/search/${currentOption}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=${locale}&query=${inputVal}&page=1&include_adult=false`
			: null,
		(url) => axios(url).then((res) => res.data),
	);

	const handleChange = (e) => {
		setInputVal(e.target.value);
	};

	const clearInput = () => {
		setInputVal("");
	};

	const setOption = (option) => {
		setCurrentOption(option === "movies" ? "movie" : "person");
	};

	return (
		<div className={styles.Search}>
			<div className={styles.Search__dropdown}>
				<DropDown
					options={options}
					currentOption={
						currentOption === "person" ? text.placeholders.options.actors : text.placeholders.options.movies
					}
					render={(height) => {
						return options.map((option, i) => {
							return (
								<button onClick={setOption.bind(null, option)} key={v4()} style={{ height }}>
									{optionsText[i]}
								</button>
							);
						});
					}}
				/>
			</div>
			<div className={styles.Search__searchbar}>
				<SearchBar value={inputVal} change={handleChange} currentOption={currentOption} />
				<button className={styles.Search__search}>
					<Loupe />
				</button>
				<button className={styles.Search__clear} onClick={clearInput}>
					<Close />
				</button>
				{open && (
					<SearchResults
						data={data}
						error={error}
						option={currentOption}
						setOpen={setOpen}
						setInputVal={setInputVal}
					/>
				)}
			</div>
		</div>
	);
}

export default Search;
