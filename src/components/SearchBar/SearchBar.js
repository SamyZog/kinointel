import React, { forwardRef } from "react";
import { useText } from "../../context/TextProvider";
import styles from "./SearchBar.module.scss";

function SearchBar(props, ref) {
	const { value, change, currentOption } = props;
	const { text } = useText();

	return (
		<input
			ref={ref}
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

export default forwardRef(SearchBar);
