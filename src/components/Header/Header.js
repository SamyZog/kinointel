import LangSelector from "../LangSelector/LangSelector";
import Logo from "../Logo/Logo";
import Search from "../Search/Search";
import ThemeSwitcher from "../Themeswitcher/ThemeSwitcher";
import styles from "./Header.module.scss";

const Header = (props) => {
	return (
		<>
			<header className={styles.Header}>
				<div>
					<Logo />
				</div>
				<div className={styles.Header__search}>
					<Search />
				</div>
				<div className={styles.Header__preferences}>
					<LangSelector />
					<ThemeSwitcher />
				</div>
			</header>
		</>
	);
};

export default Header;
