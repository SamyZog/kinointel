import axios from "axios";
import HomePage from "../components/HomePage/HomePage";

export default function Home(props) {
	const { trending, genres } = props;
	return <HomePage trending={trending} genres={genres} />;
}

export async function getStaticProps(context) {
	let urls = [
		`https://api.themoviedb.org/3/trending/movie/week?api_key=a319ba0db74b862fec8c89164cc8ba8b`,
		`https://api.themoviedb.org/3/genre/movie/list?api_key=a319ba0db74b862fec8c89164cc8ba8b&language=${context.locale}`,
	];

	const res1 = await axios(urls[0]);
	const res2 = await axios(urls[1]);

	const [trending, genres] = await Promise.all([res1, res2]);

	return {
		revalidate: 60 * 60 * 12,
		props: { trending: trending.data, genres: genres.data.genres },
	};
}
