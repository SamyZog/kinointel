import React from "react";
import Spinner from "../../components/Spinner/Spinner";
import styles from "./[page].module.scss";

function Movies(props) {
	const router = useRouter();

	if (router.isFallback) {
		return (
			<div>
				<Spinner />
			</div>
		);
	}
	return <div className={styles}></div>;
}

export default Movies;
