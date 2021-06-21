import { createContext, useContext } from "react";

const text = {
	ru: {},
	en: {},
};

const textContext = createContext();
const { Provider: Text } = textContext;

const TextProvider = () => {
	return <Text value={{}}></Text>;
};

const useText = () => useContext(textContext);

export { useText };
export default TextProvider;
