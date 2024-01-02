import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import prefetch from "@astrojs/prefetch";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://victoriacheng15.vercel.app/",
	markdown: {
		shikiConfig: {
			theme: "github-dark",
			wrap: true,
		},
	},
	integrations: [
		mdx({}),
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		prefetch(),
		icon(),
	],
	vite: {
		optimizeDeps: {
			exclude: ["@resvg/resvg-js"],
		},
	},
});
