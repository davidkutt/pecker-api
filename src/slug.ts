/**
 * Turns free text into a URL-safe slug: lowercase ASCII letters and digits, words joined by
 * single hyphens. Accents are dropped ("Café" → "cafe") and "ß" becomes "ss".
 */
export function slugify(input: string): string {
	return input
		.replace(/ß/g, "ss")
		.normalize("NFKD")
		.replace(/[̀-ͯ]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}
