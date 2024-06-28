const BOOKS = [
	{
		year: "2024",
		books: [
      "Sleep Smarter"
			"Version Control with Git",
			"Make Time",
			"The Miracle Monring",
			"On Writing Well",
			"Find Your Why",
			"Start with Why",
			"Smart Brevity",
			"Keep Going",
			"It Starts With Food",
			"The 7 Habits of Highly Effective People",
		],
	},
	{
		year: "2023",
		books: [
			"Show Your Work",
			"Steal Like an Artis",
			"Burn the Fat, Feed the Muscle",
			"So Good They Can’t Ignore You",
			"Modern Software Engineering",
			"The 4-Hour Workweek",
			"任正非正传 (A Biography of Ren Zhengfei)",
			"Getting Things Done",
			"Eat That Frog!",
			"The Unfair Advantage",
			"Ultralearning",
			"Clean Architecture",
			"Can’t Hurt Me",
			"How to Win Friends and Influence People in the Digital Age",
			"Software Engineering at Google",
			"Head First Statistics",
			"The Obstacle Is the Way",
			"Building a Second Brain",
			"Grokking Algorithms",
			"The Subtle Art of Not Giving a F*ck",
			"The Phoenix Projects",
			"The 12 Week Year",
			"Limitless: Upgrade Your Brain, Learn Anything Faster, and Unlock You Exceptional Life",
			"Deep Work",
			"Clean Code",
		],
	},
	{
		year: "2022",
		books: ["Atomic Habits"],
	},
];

type Book = {
	year: string;
	books: string[];
};

export const allBooks: Book[] = Object.values(BOOKS).map(({ year, books }) => ({
	year,
	books,
}));
