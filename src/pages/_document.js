import Document, { Head, Html, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html>
				<Head></Head>
				<body>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							(function() {
								var className;
								var fallbackTheme = "light";
								var agentTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
								var cachedTheme = localStorage.getItem("kinointel-theme");
								if(cachedTheme === "dark" || cachedTheme === "light") {
									className = cachedTheme;
								}
								if(agentTheme === "dark" || agentTheme === "light") {
									className = agentTheme;
								}
								document.body.classList.add(className);
								localStorage.setItem("kinointel-theme", className);
							}())
					`,
						}}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
