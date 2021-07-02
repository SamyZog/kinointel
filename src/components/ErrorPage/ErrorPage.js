import React from "react";
import { Error } from "../../../public/icons/app";
import styles from "./ErrorPage.module.scss";

function ErrorPage(props) {
	return (
		<div className={styles.ErrorPage}>
			<h1>404</h1>
			<Error />
		</div>
	);
}

export default ErrorPage;
