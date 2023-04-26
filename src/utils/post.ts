import type { CollectionEntry } from "astro:content";

type Markdown = CollectionEntry<"post">[];

export function sortMDByDate(posts: Markdown = []) {
	return posts.sort(
		(a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf()
	);
}

export function getUniqueTags(posts: Markdown = []) {
	const uniqueTags = new Set<string>();
	posts.forEach(({ data: { tags } }) => {
		tags.map((tag) => uniqueTags.add(tag));
	});
	return Array.from(uniqueTags);
}

export function getUniqueTagsWithCount(posts: Markdown = []): {
	[key: string]: number;
} {
	return posts.reduce((prev, { data: { tags } }) => {
		const runningTags: { [key: string]: number } = { ...prev };
		tags.forEach((tag) => {
			runningTags[tag] = (runningTags[tag] || 0) + 1;
		});
		return runningTags;
	}, {});
}

const WORDS_PER_MINUTE = 200;

export function getReadingTime(content: string) {
	if (!content) return;
	const clean = content.replace(/<\/?[^>]+(>|$)/g, "");
	const numberOfWords = clean.split(/\s/g).length;
	return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
}
