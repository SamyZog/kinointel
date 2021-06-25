import "../../styles/main.scss";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import TextProvider from "../context/TextProvider";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<TextProvider>
				<Header />
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</TextProvider>
		</>
	);
}

export default MyApp;
