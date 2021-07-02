import React from "react";
import Divider from "../Divider/Divider";
import Pagination from "../Pagination/Pagination";
import ShowCase from "../ShowCase/ShowCase";
import styles from "./MovieResultsPage.module.scss";

function MovieResultsPage(props) {
	const { data, totalPages, page, query } = props;
	return (
		<div className={styles.MovieResultsPage}>
			<section>
				<Pagination totalPages={totalPages} page={page} query={query} />
				<Divider />
				<ShowCase data={data} />
				<Divider />
				<Pagination totalPages={totalPages} page={page} query={query} />
			</section>
		</div>
	);
}

export default MovieResultsPage;
