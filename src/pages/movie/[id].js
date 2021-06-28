import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import MoviePage from "../../components/MoviePage/MoviePage";
import Spinner from "../../components/Spinner/Spinner";

function Movie(props) {
	const router = useRouter();
	console.log(props.data);

	if (router.isFallback) {
		return (
			<div>
				<Spinner />
			</div>
		);
	}

	return <MoviePage />;
}

export default Movie;

export async function getStaticPaths(context) {
	console.log();
	// too manny paths to pre-render, we set fallback to true https://nextjs.org/docs/basic-features/data-fetching#when-is-fallback-true-useful
	// used fallback: true over fallback: "blocking" to load the page faster from the user's perspective https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking
	return { paths: [{ params: { id: "" } }], fallback: true };
}

export async function getStaticProps(context) {
	const res = await axios(
		`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=a319ba0db74b862fec8c89164cc8ba8b&language=${context.locale}`,
	);
	const data = res.data;

	return { props: { data } };
}
