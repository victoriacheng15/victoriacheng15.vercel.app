import type { Page } from "astro";
import type { CollectionEntry } from "astro:content";

type Post = Array<CollectionEntry<"post">>;

export function sortMDByDate(posts: Post) {
	return posts.sort(
		(a, b) => new Date(b.data.publishDate).valueOf() - new Date(a.data.publishDate).valueOf(),
	);
}

export function getAllTags(posts: Post) {
	return posts.flatMap(({ data: { tags } }) => [...tags]);
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

export function getAllYears(posts: Post) {
	return posts.flatMap(({ data: { publishDate } }) => [
		new Date(publishDate).toISOString().split("-")[0],
	]);
}

export function getUniqueYears(posts: Post) {
	return [...new Set(getAllYears(posts))];
}

export function getUniqueYearsWithoutCount(posts: Post): Array<[string, number]> {
	const years = [
		...getAllYears(posts).reduce((acc, year) => {
			return acc.set(year as string, (acc.get(year as string) || 0) + 1);
		}, new Map<string, number>()),
	];
	return years.sort((a, b) => b[1] - a[1]);
}

const WORDS_PER_MINUTE = 200;

export function getReadingTime(content: string) {
	if (!content) return;
	const clean = content.replace(/<\/?[^>]+(>|$)/g, "");
	const numberOfWords = clean.split(/\s/g).length;
	return Math.ceil(numberOfWords / WORDS_PER_MINUTE);
}

export function setPaginationProps(page: Page<CollectionEntry<"post">>) {
	return {
		...(page.url.prev && {
			prevUrl: {
				url: page.url.prev,
				text: `← Previous Posts`,
			},
		}),
		...(page.url.next && {
			nextUrl: {
				url: page.url.next,
				text: `Next Posts →`,
			},
		}),
	};
}
