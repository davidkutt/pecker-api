import { describe, expect, it } from "vitest";
import { slugify } from "./slug.js";

describe("slugify", () => {
	it("lowercases and joins words with hyphens", () => {
		expect(slugify("Hello World")).toBe("hello-world");
	});

	it("drops accents and spells out ß", () => {
		expect(slugify("Café Straße Über")).toBe("cafe-strasse-uber");
	});

	it("collapses runs of separators and trims them at the ends", () => {
		expect(slugify("  --a__b // c--  ")).toBe("a-b-c");
	});

	it("keeps digits", () => {
		expect(slugify("Release 2.0")).toBe("release-2-0");
	});

	it("returns an empty string when nothing is left", () => {
		expect(slugify("!!!")).toBe("");
	});
});
