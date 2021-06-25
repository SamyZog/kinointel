module.exports = {
	reactStrictMode: true,

	i18n: {
		locales: ["en-US", "ru-RU"],
		defaultLocale: "ru-RU",
	},

	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [
				{
					loader: "@svgr/webpack",
					options: {
						titleProp: true,
					},
				},
			],
		});

		return config;
	},
};
