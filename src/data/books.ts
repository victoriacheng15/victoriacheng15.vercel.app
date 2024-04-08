const BOOKS = [
	{
		year: "2024",
		books: [
			{ title: "Find Your Why" },
			{ title: "Start with Why" },
			{ title: "Smart Brevity" },
			{ title: "Keep Going" },
			{
				title: "It Starts With Food: Discover the Whole30 and Change Your Life in Unexpected Ways",
			},
			{ title: "The 7 Habits of Highly Effective People" },
		],
	},
	{
		year: "2023",
		books: [
			{ title: "Show Your Work" },
			{ title: "Steal Like an Artis" },
			{ title: "Burn the Fat, Feed the Muscle" },
			{ title: "So Good They Can’t Ignore You" },
			{ title: "Modern Software Engineering" },
			{ title: "The 4-Hour Workweek" },
			{ title: "任正非正传 (A Biography of Ren Zhengfei)" },
			{ title: "Getting Things Done" },
			{ title: "Eat That Frog!" },
			{ title: "The Unfair Advantage" },
			{ title: "Ultralearning" },
			{ title: "Clean Architecture: A Craftsman's Guide to Software Structure and Design " },
			{ title: "Can’t Hurt Me" },
			{ title: "How to Win Friends and Influence People in the Digital Age" },
			{ title: "Software Engineering at Google" },
			{ title: "Head First Statistics" },
			{ title: "The Obstacle Is the Way" },
			{ title: "Building a Second Brain" },
			{ title: "Grokking Algorithms" },
			{ title: "The Subtle Art of Not Giving a F*ck" },
			{ title: "The Phoenix Projects" },
			{ title: "The 12 Week Year" },
			{
				title:
					"Limitless: Upgrade Your Brain, Learn Anything Faster, and Unlock Your Exceptional Life",
			},
			{ title: "Deep Work: Rules for Focused Success in a Distracted World" },
			{ title: "Clean Code: A Handbook of Agile Software Craftsmanship" },
		],
	},
	{
		year: "2022",
		books: [{ title: "Atomic Habits" }],
	},
];

type Book = {
	year: string;
	books: string[];
};

export const allBooks: Book[] = Object.values(BOOKS).map(({ year, books }) => ({
	year,
	books: books.map((book) => book.title),
}));
