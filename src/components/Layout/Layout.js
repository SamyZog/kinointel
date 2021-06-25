import React from "react";
import styles from "./Layout.module.scss";

function Layout(props) {
	return <main className={styles.Layout}>{props.children}</main>;
}

export default Layout;
