import "../../styles/main.css";
import TextProvider from "../context/TextProvider";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<TextProvider>
				<Component {...pageProps} />;
			</TextProvider>
		</>
	);
}

export default MyApp;
