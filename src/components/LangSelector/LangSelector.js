import { useRouter } from "next/router";
import React from "react";
import { En, Ru } from "../../../public/icons/language";
import DropDown from "../DropDown/DropDown";
import styles from "./LangSelector.module.scss";

function LangSelector(props) {
	const router = useRouter();
	const options = [
		{ option: "en-US", Icon: <En /> },
		{ option: "ru-RU", Icon: <Ru /> },
	];

	const setOption = (option) => {
		// https://nextjs.org/docs/advanced-features/i18n-routing#leveraging-the-next_locale-cookie
		document.cookie = `NEXT_LOCALE=${option}`;
		router.push(router.pathname, router.asPath, { locale: option, scroll: false });
	};

	return (
		<div className={styles.LangSelector}>
			<DropDown
				options={options}
				currentOption={router.locale === "en-US" ? <En /> : <Ru />}
				render={(height) => {
					return options.map(({ option, Icon }) => {
						return (
							<button onClick={setOption.bind(null, option)} key={option} style={{ height }}>
								{Icon}
							</button>
						);
					});
				}}
			/>
		</div>
	);
}

export default LangSelector;
