/* eslint-disable prettier/prettier */
export const MENU_LINKS = [
	{
		title: "Home",
		path: "/",
	},
	{
		title: "Projects",
		path: "/projects",
	},
	{
		title: "Posts",
		path: "/posts",
	},
	{
		title: "Journals",
		path: "/journals",
	},
];

// ! Remember to add your own socials
export const SOCIALS = [
	{
		name: "github",
		href: "https://github.com/victoriacheng15",
		icon: "simple-icons:github",
		active: true,
	},
	{
		name: "linkedin",
		href: "https://www.linkedin.com/in/victoriacheng15",
		icon: "simple-icons:linkedin",
		active: true,
	},
	{
		name: "twitter",
		href: "https://www.twitter.com/viktoriacheng15",
		icon: "simple-icons:twitter",
		active: true,
	},
	{
		name: "polywork",
		href: "https://www.polywork.com/victoriacheng15",
		icon: "simple-icons:polywork",
		active: true,
	},
	{
		name: "codepen",
		href: "https://codepen.io/victoriacheng15",
		icon: "simple-icons:codepen",
		active: false,
	},
	{
		name: "buy me a coffee",
		href: "https://www.buymeacoffee.com/victoriacheng15",
		icon: "simple-icons:buymeacoffee",
		active: false,
	},
];

export const SKILLS = [
	{
		name: "TypeScript",
		skill: "simple-icons:typescript",
	},
	{
		name: "JavaScript",
		skill: "simple-icons:javascript",
	},
	{
		name: "Next.js",
		skill: "simple-icons:nextdotjs",
	},
	{
		name: "React",
		skill: "simple-icons:react",
	},
	{
		name: "React Router",
		skill: "simple-icons:reactrouter",
	},
	{
		name: "Jest",
		skill: "simple-icons:jest",
	},
	{
		name: "Node.js",
		skill: "simple-icons:nodedotjs",
	},
	{
		name: "Express",
		skill: "simple-icons:express",
	},
	{
		name: "Redux",
		skill: "simple-icons:redux",
	},
	{
		name: "Github Actions",
		skill: "simple-icons:githubactions",
	},
	{
		name: "Testing Library",
		skill: "simple-icons:testinglibrary",
	},
	{
		name: "Tailwind CSS",
		skill: "simple-icons:tailwindcss",
	},
	{
		name: "MongoDB",
		skill: "simple-icons:mongodb",
	},
	{
		name: "Bash",
		skill: "simple-icons:gnubash",
	},
	{
		name: "HTML 5",
		skill: "simple-icons:html5",
	},
	{
		name: "CSS 3",
		skill: "simple-icons:css3",
	},
];

export const PROJECTS = [
	{
		title: "Bubble Tea App",
		code: "https://github.com/victoriacheng15/bubble-tea-api#readme",
		live: "https://bubble-tea.cyclic.app/",
		backend: "",
		description:
			"Developed an app where users can submit their favorite bubble tea combinations and view a leaderboard that ranks the popularity of these combinations. Whether you're a bubble tea aficionado or just looking for some inspiration for your next drink, this app is sure to satisfy your cravings.",
		techs: ["Node.js", "Express", "JavaScript", "MongoDB", "CSS"],
		isDevelop: false,
	},
	{
		title: "Country Information App",
		code: "https://github.com/victoriacheng15/rest-countries-api-ts#readme",
		live: "https://rest-countries-api-ts-vc.netlify.app/",
		backend: "",
		description:
			"Developed an app that displays short information about various countries on cards, with pagination to navigate between them. Each card leads to a separate page with more detailed information about the corresponding country. This app is a convenient and easy way to learn about the world around us.",
		techs: [
			"TypeScript",
			"React",
			"React Router",
			"Tailwind CSS",
			"Testing Library",
			"Jest",
		],
		isDevelop: false,
	},
	{
		title: "Hacker News Clone",
		code: "https://github.com/victoriacheng15/hacker-news-next#readme",
		live: "https://hacker-news-next.vercel.app/",
		backend: "",
		description:
			"Developed a Hacker News clone that allows users to view the most recent eight stories for each category on the home page, and then browse additional stories on subsequent pages. The clone provides an intuitive interface for users to stay updated on the latest technology news.",
		techs: [
			"TypeScript",
			"Next.js",
			"Redux Toolkit",
			"Chakra UI",
			"Testing Library",
			"Vitest",
		],
		isDevelop: false,
	},
	{
		title: "AI Image Generation App",
		code: "https://github.com/victoriacheng15/ai-image-generation#readme",
		live: "https://ai-image-generation-sandy.vercel.app/",
		backend: "https://ai-image-generation-ixl2.onrender.com/",
		description:
			'Developed a Midjourney/DALL-E clone where users can view the gallery of AI-generated images on the homepage. Users also can create their own AI-generated images by submit their desired prompts or click the "surprise me" button for a random prompt. Lastly, hit the generate button! Like the image? Lets sharing with the community!',
		techs: [
			"TypeScript",
			"React",
			"React Router",
			"Node.js",
			"Express",
			"MongoDB",
		],
		isDevelop: true,
	},
];
