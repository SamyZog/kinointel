import React from "react";
import { Loader } from "../../../public/icons/app";
import styles from "./Spinner.module.scss";

function Spinner(props) {
	return (
		<div className={styles.Spinner}>
			<div className={styles.Spinner__spinner}>
				<Loader />
			</div>
		</div>
	);
}

export default Spinner;
