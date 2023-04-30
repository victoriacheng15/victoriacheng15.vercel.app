import { describe, expect, it } from "vitest";
import { getFormattedDate } from "../utils";

describe("getFormattedDate", () => {
	it("should return a date", () => {
		expect(getFormattedDate("2023-04-26")).toBe("2023-04-26");
	});
});
