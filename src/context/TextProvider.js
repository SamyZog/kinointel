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
			filter: {
				sortby: "сортировать",
				year: "год",
				genre: "жанр",
				get years() {
					const startingYear = 1999;
					const currentYear = new Date().getFullYear();
					const length = currentYear - startingYear;

					return Array.from({ length }, (el, i) => startingYear + 1 + i).reverse();
				},
			},
			sort: {
				popular: "популярные",
				yeardesc: "сначала новые",
				yearasc: "сначала старые",
				titleasc: "а-я",
				titledesc: "я-а",
			},
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
			filter: {
				sortby: "sort",
				year: "year",
				genre: "genre",
				get years() {
					const startingYear = 1999;
					const currentYear = new Date().getFullYear();
					const length = currentYear - startingYear;

					return Array.from({ length }, (el, i) => startingYear + 1 + i).reverse();
				},
			},
			sort: {
				popular: "popular",
				yeardesc: "new first",
				yearasc: "old first",
				titleasc: "a-z",
				titledesc: "z-a",
			},
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
