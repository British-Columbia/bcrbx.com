// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

if (process.env.NODE_ENV === "development") {
	console.log("Loading config");
}

/** @type {import('@docusaurus/plugin-content-docs').Options} */
const ds = {
	breadcrumbs: false,
	showLastUpdateTime: true,
	showLastUpdateAuthor: false,
};

/** @returns {import('@docusaurus/plugin-content-docs').Options} */
const section = (slug, base) => ({
	id: slug,
	path: `content/${slug}`,
	routeBasePath: base,
});

const basicSection = (slug, base) => [
	"@docusaurus/plugin-content-docs",
	{
		...section(slug, base),
		...ds,
	},
];

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "British Columbia",
	tagline: "The official website of the BC community.",
	favicon: "favicon.ico",
	titleDelimiter: "•",

	// Set the production url of your site here
	url: "https://bcrbx.com",
	// Set the /<baseUrl>/ pathname under which your site is served
	baseUrl: "/",

	// GitHub pages deployment config.
	organizationName: "bcrbx",
	projectName: "bcrbx.com",

	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",

	i18n: {
		defaultLocale: "en-CA",
		locales: ["en-CA"],
	},

	presets: [
		[
			"classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					path: "content/community",
					routeBasePath: "/",
					...ds,
					sidebarPath: "sidebars/community.js",
					sidebarItemsGenerator: exclusionarySidebarFactory(
						["social/index", "elections/index"],
						["honours/index", "publishing/index", "#Publishing"]
					),
				},
				blog: false,
				theme: {
					customCss: "./src/css/custom.css",
				},
			}),
		],
	],

	plugins: [
		[
			"@docusaurus/plugin-content-docs",
			{
				...section("government", "gov"),
				...ds,
				sidebarPath: "sidebars/government.js",
				sidebarItemsGenerator: exclusionarySidebarFactory([
					"organisations/index",
				]),
			},
		],
		basicSection("legislature", "leg"),
		basicSection("judiciary", "courts"),
		[
			"@docusaurus/plugin-content-docs",
			{
				...section("history", "history"),
				...ds,
				sidebarPath: "sidebars/history.js",
				sidebarItemsGenerator: exclusionarySidebarFactory(),
			},
		],

		[
			"@docusaurus/plugin-client-redirects",
			{
				redirects: [
					{
						to: "https://www.roblox.com/games/18743397077/Victoria-British-Columbia-Alpha",
						from: "/go",
					},
				],
			},
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			image: "img/social-card.jpg",
			navbar: {
				title: "British Columbia",
				logo: {
					alt: "",
					src: "img/BCIcon.png",
				},
				items: [
					{ to: "/community", label: "Community", position: "left" },
					{ to: "/gov", label: "Government", position: "left" },
					{ to: "/leg", label: "Legislature", position: "left" },
					{ to: "/courts", label: "Judiciary", position: "left" },
				],
			},
			/*announcementBar: {
				id: "disclaimer",
				content:
					"This website is for a fictional roleplay game. It is not affiliated with any real-world entity.",
				isCloseable: false,
				backgroundColor: "#fff",
				textColor: "#000",
			}, */
			announcementBar: {
				id: "beta",
				content:
					"This website is in beta. There may be incomplete or inaccurate information.",
				isCloseable: true,
				backgroundColor: "#e8ce0c",
				textColor: "#000",
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 2,
			},
			footer: {
				style: "dark",
				links: [],
				copyright:
					`This website is for a fictional roleplay game. It is not affiliated with any real-world entity. <br/><div>` +
					`<a href="https://discord.gg/britishcolumbia" target="_blank">Discord server</a>` +
					`<a href="https://www.roblox.com/groups/34123347" target="_blank">Roblox group</a>` +
					`</div>`,
			},
		}),
};

function exclusionarySidebarFactory(indexOnly = [], ignoreIds = []) {
	return async ({ defaultSidebarItemsGenerator, ...args }) => {
		const items = await defaultSidebarItemsGenerator(args);
		const result = items
			.map((item, index) => {
				if (
					item.type === "doc" &&
					(ignoreIds.includes(item.id) || ignoreIds.includes(`#${item.label}`))
				)
					return null;

				if (
					item.type === "category" &&
					(ignoreIds.includes(item.link?.id) ||
						ignoreIds.includes(`#${item.label}`))
				)
					return null;

				if (
					item.type === "category" &&
					(indexOnly.includes(item.link?.id) ||
						indexOnly.includes(`#${item.label}`))
				)
					item.items = [];

				return item;
			})
			.filter((x) => x !== null);

		return result;
	};
}

export default config;
