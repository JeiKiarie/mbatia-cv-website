export default async function sitemap() {
	const baseUrl = 'https://mbatia-portfolio-cv-website.netlify.app';

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1.0,
		},
		{
			url: `${baseUrl}/about-me`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/experience`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/skills`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/projects`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/contact`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.6,
		},
	];
}
