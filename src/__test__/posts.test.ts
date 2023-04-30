import { describe, expect, it } from "vitest";
import { sortMDByDate, getUniqueTags, getUniqueTagsWithCount, getReadingTime } from "../utils";
import { posts, expectedPostsByDate, content } from "../__testData__/testData";

describe("sort by date", () => {
	it("should return dat in sorted order", () => {
		//@ts-expect-error
		expect(sortMDByDate(posts)).toEqual(expectedPostsByDate);
	});
});

describe("unique tags", () => {
	it("should return tags without duplications", () => {
		//@ts-expect-error
		expect(getUniqueTags(posts)).toEqual(["reflection", "monthly-reflection", "test"]);
	});

	it("should return unique tags with count", () => {
		//@ts-expect-error
		expect(getUniqueTagsWithCount(posts)).toEqual({
			reflection: 2,
			"monthly-reflection": 2,
			test: 1,
		});
	});
});

describe("get reading time", () => {
	it("should return reading time of each blog post", () => {
		expect(getReadingTime(content)).toEqual(2);
	});
});
