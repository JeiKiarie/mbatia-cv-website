import { absoluteUrl, pages, siteLastUpdated } from './seo';

export default async function sitemap() {
	const lastModified = new Date(siteLastUpdated);

	return pages.map((page) => ({
		url: absoluteUrl(page.path),
		lastModified,
		changeFrequency: 'monthly',
		priority: page.priority,
	}));
}
