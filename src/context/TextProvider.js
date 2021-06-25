import { useRouter } from "next/router";
import { createContext, useContext } from "react";

const text = {
	ru: {
		title: {
			part1: "kino",
			part2: "wiki",
		},
		placeholders: {
			search: "поиск",
			rating: "рейтинг",
			votesingle: "голос",
			votesplural: "голоса",
			votespluralplus: "голосов",
			popularity: "популярность",
			error: "ошибка",
			options: {
				movies: "фильмы",
				actors: "актёры",
			},
		},
	},
	en: {
		title: {
			part1: "kino",
			part2: "wiki",
		},
		placeholders: {
			search: "search",
			rating: "rating",
			votesingle: "vote",
			votesplural: "votes",
			votespluralplus: "votes",
			popularity: "popularity",
			error: "error",
			options: {
				movies: "movies",
				actors: "actors",
			},
		},
	},
};

const textContext = createContext();
const { Provider: Text } = textContext;

const TextProvider = (props) => {
	const { locale } = useRouter();
	const value = {
		text: text[locale.split("-")[0]],
	};
	return <Text value={value}>{props.children}</Text>;
};

const useText = () => useContext(textContext);

export { useText };
export default TextProvider;
