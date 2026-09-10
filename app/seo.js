export const siteUrl = 'https://mbatia-portfolio-cv-website.netlify.app';

export const siteName = 'Bernard Mbatia Mwangi Portfolio';

// Date the page copy was last changed. Bump this whenever the content of any
// page is edited so the sitemap reports an accurate <lastmod>. A stable value is
// preferable to `new Date()`, which would claim every URL changed on every
// single deploy and make the sitemap signal untrustworthy to crawlers.
export const siteLastUpdated = '2026-09-10';

export const openGraphImage = {
	url: '/Mbatia.png',
	width: 300,
	height: 300,
	alt: 'Bernard Mbatia Mwangi',
};

export const defaultTitle =
	'Bernard Mbatia Mwangi | Quantity Surveyor in Nairobi';

export const defaultDescription =
	'Portfolio and CV for Bernard Mbatia Mwangi, a Nairobi-based Quantity Surveyor specializing in construction cost management, bills of quantities, tender evaluation, valuations, and project cost consultancy.';

export const keywords = [
	'Bernard Mbatia Mwangi',
	'Quantity Surveyor Nairobi',
	'Quantity Surveyor Kenya',
	'Construction cost management',
	'Bills of quantities',
	'Tender evaluation',
	'Interim valuations',
	'Insurance loss adjustment consultancy',
	'Project cost consultancy',
	'Construction estimation',
];

export const pages = [
	{
		path: '/',
		label: 'Home',
		title: defaultTitle,
		description: defaultDescription,
		priority: 1,
	},
	{
		path: '/about-me',
		label: 'About',
		title: 'About Bernard Mbatia Mwangi | Quantity Surveyor',
		description:
			'Learn about Bernard Mbatia Mwangi, his quantity surveying background, cost management strengths, valuation work, and project consultancy experience.',
		priority: 0.8,
	},
	{
		path: '/experience',
		label: 'Experience',
		title: 'Quantity Surveying Experience | Bernard Mbatia Mwangi',
		description:
			'Review Bernard Mbatia Mwangi\'s experience in cost estimates, bills of quantities, tender evaluation, interim valuations, site measurements, arbitration support, and final accounts.',
		priority: 0.8,
	},
	{
		path: '/skills',
		label: 'Skills',
		title: 'Skills and Qualifications | Bernard Mbatia Mwangi',
		description:
			'Explore quantity surveying skills including cost estimation, project planning, site measurements, interim valuations, CAD tools, WinQS, and Microsoft Office.',
		priority: 0.7,
	},
	{
		path: '/projects',
		label: 'Projects',
		title: 'Quantity Surveying Projects | Bernard Mbatia Mwangi',
		description:
			'Selected residential, commercial, fit-out, insurance claim, valuation, and bills of quantities projects handled by Bernard Mbatia Mwangi.',
		priority: 0.8,
	},
	{
		path: '/contact',
		label: 'Contact',
		title: 'Contact Bernard Mbatia Mwangi | Quantity Surveyor Nairobi',
		description:
			'Contact Bernard Mbatia Mwangi for quantity surveying, construction cost management, bills of quantities, valuations, and project consultancy in Nairobi, Kenya.',
		priority: 0.6,
	},
];

export function absoluteUrl(path = '/') {
	return new URL(path, siteUrl).toString();
}

export function findPage(path) {
	return pages.find((item) => item.path === path) || pages[0];
}

export function pageMetadata(path) {
	const page = findPage(path);
	// Always emit fully qualified, self-referential URLs so every page declares an
	// unambiguous canonical even if access occurs via a host/URL variant.
	const url = absoluteUrl(path);

	return {
		// Use an absolute title on every page so the root title template does not
		// append the site name on top of a title that already contains the name
		// (which produced duplicated titles such as
		// "Contact Bernard Mbatia Mwangi | Quantity Surveyor Nairobi | Bernard
		// Mbatia Mwangi Portfolio").
		title: { absolute: page.title },
		description: page.description,
		alternates: {
			canonical: url,
		},
		openGraph: {
			type: 'website',
			locale: 'en_KE',
			siteName,
			title: page.title,
			description: page.description,
			url,
			images: [openGraphImage],
		},
		twitter: {
			card: 'summary_large_image',
			title: page.title,
			description: page.description,
			images: [openGraphImage.url],
		},
	};
}

// BreadcrumbList structured data helps search engines understand where each page
// sits in the site hierarchy and can surface breadcrumbs in search results.
export function breadcrumbSchema(path) {
	const current = findPage(path);
	const trail = current.path === '/' ? [pages[0]] : [pages[0], current];

	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: trail.map((page, index) => ({
			'@type': 'ListItem',
			position: index + 1,
			name: page.label,
			item: absoluteUrl(page.path),
		})),
	};
}
