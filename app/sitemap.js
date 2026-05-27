import { absoluteUrl, pages } from './seo';

export default async function sitemap() {
	const lastModified = new Date();

	return pages.map((page) => ({
		url: absoluteUrl(page.path),
		lastModified,
		changeFrequency: 'monthly',
		priority: page.priority,
	}));
}
