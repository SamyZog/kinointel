import { useRouter } from "next/router";
import React, { useState } from "react";
import { v4 } from "uuid";
import { En, Ru } from "../../../public/icons/language";
import DropDown from "../DropDown/DropDown";
import styles from "./LangSelector.module.scss";

function LangSelector(props) {
	const router = useRouter();
	const options = [
		{ id: 1, option: "en-US", Icon: <En /> },
		{ id: 2, option: "ru-RU", Icon: <Ru /> },
	];
	const [currentOption, setCurrentOption] = useState(router.locale);

	const setOption = (option) => {
		setCurrentOption(option);
		document.cookie = `NEXT_LOCALE=${option}`;
		router.push(router.pathname, router.asPath, { locale: option, scroll: false });
	};

	return (
		<div className={styles.LangSelector}>
			<DropDown
				options={options}
				currentOption={currentOption === "en-US" ? <En /> : <Ru />}
				render={(height) => {
					return options.map(({ id, option, Icon }) => {
						return (
							<button onClick={setOption.bind(null, option)} key={v4()} style={{ height }}>
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
