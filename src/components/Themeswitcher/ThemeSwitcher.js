import { useEffect, useState } from "react";
import { Moon, Sun } from "../../../public/icons/theme";
import styles from "./ThemeSwitcher.module.scss";

const ThemeSwitcher = (props) => {
	const [isDark, setIsDark] = useState("");

	useEffect(() => {
		__theme === "dark" ? setIsDark(true) : setIsDark(false);
	}, []);

	const handleCheck = () => {
		__switchTheme(isDark);
		setIsDark((state) => !state);
	};

	return (
		<div className={styles.ThemeSwitcher} onClick={handleCheck}>
			{isDark ? <Sun /> : <Moon />}
		</div>
	);
};

export default ThemeSwitcher;
