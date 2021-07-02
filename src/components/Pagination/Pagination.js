import React from "react";
import { v4 } from "uuid";
import { Play, Skip } from "../../../public/icons/app";
import CustomLink from "../CustomLink/CustomLink";
import styles from "./Pagination.module.scss";

function Pagination(props) {
	const pageLimit = 5;
	let middleIdx = Math.ceil(pageLimit / 2);
	const { totalPages, page, query } = props;

	let pageLinks = [...Array(totalPages < pageLimit ? totalPages : pageLimit)].map((_, i) => {
		let start;

		if (page <= middleIdx) {
			// start at 1
			start = i + 1;
		} else if (page > totalPages - middleIdx) {
			// end in last page
			start = totalPages - pageLimit + 1 + i;
		} else {
			start = page - middleIdx + i + 1;
		}

		return (
			<li key={v4()} style={{ backgroundColor: +page === start ? "var(--common)" : "" }}>
				<CustomLink
					href={{
						pathname: "/movies/",
						query: { query, page: start },
					}}
					shallow={+page === start}>
					{start}
				</CustomLink>
			</li>
		);
	});

	return (
		<div className={styles.Pagination}>
			<ul className={styles.Pagination__pagelist}>
				{totalPages > pageLimit && page > middleIdx && (
					<>
						<li className={styles.Pagination__tostart}>
							<CustomLink
								href={{
									pathname: "/movies/",
									query: { query: query, page: 1 },
								}}>
								<Skip />
							</CustomLink>
						</li>
						<li className={styles.Pagination__prev}>
							<CustomLink
								href={{
									pathname: "/movies/",
									query: { query: query, page: +page - 1 },
								}}>
								<Play />
							</CustomLink>
						</li>
					</>
				)}
				{pageLinks}
				{page < totalPages - middleIdx - 1 && (
					<>
						<li className={styles.Pagination__next}>
							<CustomLink
								href={{
									pathname: "/movies/",
									query: { query: query, page: +page + 1 },
								}}>
								<Play />
							</CustomLink>
						</li>
						<li className={styles.Pagination__tolast}>
							<CustomLink
								href={{
									pathname: "/movies/",
									query: { query: query, page: totalPages },
								}}>
								<Skip />
							</CustomLink>
						</li>
					</>
				)}
			</ul>
		</div>
	);
}

export default Pagination;
