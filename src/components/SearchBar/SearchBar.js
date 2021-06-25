import React from "react";
import { useText } from "../../context/TextProvider";
import styles from "./SearchBar.module.scss";

function SearchBar(props) {
	const { value, change, currentOption } = props;
	const { text } = useText();

	return (
		<input
			type="text"
			name=""
			id=""
			className={styles.SearchBar}
			value={value}
			onChange={change}
			placeholder={`${
				currentOption === "movie" ? text.placeholders.options.movies : text.placeholders.options.actors
			}...`}
		/>
	);
}

export default SearchBar;
