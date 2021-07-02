import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import MoviesResultsPage from "../../components/MovieResultsPage/MovieResultsPage";

function Movies(props) {
	const router = useRouter();
	let searchQuery = router.query.query;
	const { result, page } = props;

	return (
		<div>
			<MoviesResultsPage data={result.results} totalPages={result.total_pages} page={page} query={searchQuery} />
		</div>
	);
}

export default Movies;

export async function getServerSideProps(context) {
	const { query, page } = context.query;

	try {
		const res = await axios(
			`https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_API_KEY}&language=en-US&query=${query}&page=${page}&include_adult=false`,
		);

		return {
			props: { result: res.data, page },
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
}
