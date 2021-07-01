import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import PersonPage from "../../components/PersonPage/PersonPage";
import Spinner from "../../components/Spinner/Spinner";

function Person(props) {
	const router = useRouter();

	const { person, movies, genres } = props;

	if (router.isFallback) {
		return (
			<div>
				<Spinner />
			</div>
		);
	}

	return (
		<>
			<Head>
				<title>{person.name}</title>
			</Head>
			<PersonPage person={person} movies={movies} genres={genres} />;
		</>
	);
}

export default Person;

export async function getStaticPaths(context) {
	// too manny paths to pre-render, we set fallback to true https://nextjs.org/docs/basic-features/data-fetching#when-is-fallback-true-useful
	// used fallback: true over fallback: "blocking" to load the page faster from the user's perspective https://nextjs.org/docs/basic-features/data-fetching#fallback-blocking
	return { paths: [{ params: { id: "520763" } }], fallback: true };
}

export async function getStaticProps(context) {
	const res1 = await axios(
		`https://api.themoviedb.org/3/person/${context.params.id}?api_key=a319ba0db74b862fec8c89164cc8ba8b&language=${context.locale}`,
	);

	const res2 = await axios(
		`https://api.themoviedb.org/3/person/${context.params.id}/movie_credits?api_key=a319ba0db74b862fec8c89164cc8ba8b&language=${context.locale}`,
	);

	const res3 = await axios(
		`https://api.themoviedb.org/3/genre/movie/list?api_key=a319ba0db74b862fec8c89164cc8ba8b&language=${context.locale}`,
	);

	const [person, movies, genres] = await Promise.all([res1, res2, res3]);

	return { props: { person: person.data, movies: movies.data, genres: genres.data } };
}
