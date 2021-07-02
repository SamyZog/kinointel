import axios from "axios";
import Head from "next/head";
import HomePage from "../components/HomePage/HomePage";

export default function Home(props) {
	const { trending, genres } = props;
	console.log("HOME");
	return (
		<>
			<Head>
				<title>KINO WIKI | All About Movies</title>
			</Head>
			<HomePage trending={trending} genres={genres} />;
		</>
	);
}

export async function getStaticProps(context) {
	let urls = [
		`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.TMDB_API_KEY}`,
		`https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.TMDB_API_KEY}&language=${context.locale}`,
	];

	const res1 = axios(urls[0]);
	const res2 = axios(urls[1]);

	try {
		const [trending, genres] = await Promise.all([res1, res2]);
		return {
			revalidate: 60 * 60 * 12,
			props: { trending: trending.data, genres: genres.data.genres },
		};
	} catch (error) {
		return {
			notFound: true,
		};
	}
}
