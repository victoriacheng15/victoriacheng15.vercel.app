export const POSTS_PER_PAGE = 15;

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
		title: "Reading",
		path: "/reading",
	},
	{
		title: "Archive",
		path: "/archive",
	},
];

const SOCIALS = [
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
		name: "TikTok",
		href: "https://www.tiktok.com/@victoriacheng15",
		icon: "simple-icons:tiktok",
		active: true,
	},
	{
		name: "youtube",
		href: "https://www.youtube.com/@victoriacheng15",
		icon: "simple-icons:youtube",
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
		active: false,
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
		active: true,
	},
];

export const activeSocial = SOCIALS.filter(({ active }) => active);
