import Document, { Head, Html, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head />
				<body>
					<script
						dangerouslySetInnerHTML={{
							__html: `
							(function() {
								window.__theme;
								const cachedTheme = localStorage.getItem("kinointel-theme");
								const agentThemeisDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

								if (cachedTheme === "dark" || cachedTheme === "light") {
									__theme = cachedTheme;
								} else if (agentThemeisDark) {
									__theme = "dark";
								} else {
									__theme = "light";
								}

								document.body.classList.add(__theme);

								window.__switchTheme = function(isDark) {
									if (isDark) {
										document.body.classList.add("light");
										document.body.classList.remove("dark");
										__theme = "dark";
									} else {
										document.body.classList.add("dark");
										document.body.classList.remove("light");
										__theme = "light";
									}
									localStorage.setItem("kinointel-theme", isDark ? "light" : "dark");
								}
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
