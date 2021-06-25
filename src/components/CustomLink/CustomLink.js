import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styles from "./CustomLink.module.scss";

const CustomLink = (props) => {
	const { pathname } = useRouter();
	const { active, href, children, ...lastProps } = props;
	let activeClass = active && pathname.startsWith(href) ? "active" : "";

	return (
		<Link href={href} {...lastProps}>
			<a className={`${styles.CustomLink} ${activeClass}`}>{children}</a>
		</Link>
	);
};

export default CustomLink;
