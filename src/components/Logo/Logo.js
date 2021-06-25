import React from "react";
import { useText } from "../../context/TextProvider";
import CustomLink from "../CustomLink/CustomLink";
import styles from "./Logo.module.scss";

const Logo = (props) => {
	const { text } = useText();
	return (
		<h1 className={styles.Logo}>
			<CustomLink href="/" passHref>
				{text.title.part1}
				<span>{text.title.part2}</span>
			</CustomLink>
		</h1>
	);
};

export default Logo;
