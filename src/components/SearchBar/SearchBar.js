import React, { forwardRef } from "react";
import { useText } from "../../context/TextProvider";
import styles from "./SearchBar.module.scss";

function SearchBar(props, ref) {
	const { inputVal, currentOption, setInputVal, setOpen } = props;
	const { text } = useText();

	const handleChange = (e) => {
		setInputVal(e.target.value);
	};

	const handleClick = () => {
		if (inputVal.length > 0) {
			setOpen(true);
		}
	};

	return (
		<input
			ref={ref}
			type="text"
			name=""
			id=""
			className={styles.SearchBar}
			value={inputVal}
			onChange={handleChange}
			onClick={handleClick}
			placeholder={`${
				currentOption === "movie" ? text.placeholders.options.movies : text.placeholders.options.actors
			}...`}
		/>
	);
}

export default forwardRef(SearchBar);
