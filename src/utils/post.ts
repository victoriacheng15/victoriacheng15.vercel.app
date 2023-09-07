import type { CollectionEntry } from "astro:content";

type Post = Array<CollectionEntry<"post">>;

export function sortMDByDate(posts: Post) {
	return posts.sort(
		(a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf(),
	);
}

export function getAllTags(posts: Post) {
	return posts.flatMap(({data: {tags}}) => [...tags]);
}

export function getUniqueTags(posts: Post) {
	return [...new Set(getAllTags(posts))];
}

export function getUniqueTagsWithCount(posts: Post): Array<[string, number]> {
	const tags = [
		...getAllTags(posts).reduce((acc, tag) => {
			return acc.set(tag, (acc.get(tag) || 0) + 1);
		}, new Map<string, number>()),
	];
	return tags.sort((a, b) => b[1] - a[1]);
}

const WORDS_PER_MINUTE = 200;

export function getReadingTime(content: string) {
	if (!content) return;
	const clean = content.replace(/<\/?[^>]+(>|$)/g, "");
	const numberOfWords = clean.split(/\s/g).length;
	return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
}
