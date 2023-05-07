import { describe, expect, it } from "vitest";
import { JSDOM } from "jsdom";
import { toggleClass, elementHasClass } from "../utils";

const dom = new JSDOM();
global.document = dom.window.document;

describe("toggleClass", () => {
	it("adds class if not present", () => {
		const element = document.createElement("div");
		element.classList.add("existing-class");
		toggleClass(element, "new-class");
		expect(element.classList.contains("new-class")).toBe(true);
	});

	it("removes class if present", () => {
		const element = document.createElement("div");
		element.classList.add("existing-class", "remove-me");
		toggleClass(element, "remove-me");
		expect(element.classList.contains("remove-me")).toBe(false);
	});
});

describe("elementHasClass", () => {
	it("returns true for an element that has the class", () => {
		const element = document.createElement("div");
		element.classList.add("test-class");
		const result = elementHasClass(element, "test-class");
		expect(result).toBe(true);
	});

	it("returns false for an element that does not have the class", () => {
		const element = document.createElement("div");
		element.classList.add("existing-class");
		const result = elementHasClass(element, "test-class");
		expect(result).toBe(false);
	});
});
