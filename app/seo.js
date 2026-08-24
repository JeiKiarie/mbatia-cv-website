export const siteUrl = 'https://mbatia-portfolio-cv-website.netlify.app';

export const siteName = 'Bernard Mbatia Mwangi Portfolio';

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
		title: defaultTitle,
		description: defaultDescription,
		priority: 1,
	},
	{
		path: '/about-me',
		title: 'About Bernard Mbatia Mwangi | Quantity Surveyor',
		description:
			'Learn about Bernard Mbatia Mwangi, his quantity surveying background, cost management strengths, valuation work, and project consultancy experience.',
		priority: 0.8,
	},
	{
		path: '/experience',
		title: 'Quantity Surveying Experience | Bernard Mbatia Mwangi',
		description:
			'Review Bernard Mbatia Mwangi\'s experience in cost estimates, bills of quantities, tender evaluation, interim valuations, site measurements, arbitration support, and final accounts.',
		priority: 0.8,
	},
	{
		path: '/skills',
		title: 'Skills and Qualifications | Bernard Mbatia Mwangi',
		description:
			'Explore quantity surveying skills including cost estimation, project planning, site measurements, interim valuations, CAD tools, WinQS, and Microsoft Office.',
		priority: 0.7,
	},
	{
		path: '/projects',
		title: 'Quantity Surveying Projects | Bernard Mbatia Mwangi',
		description:
			'Selected residential, commercial, fit-out, insurance claim, valuation, and bills of quantities projects handled by Bernard Mbatia Mwangi.',
		priority: 0.8,
	},
	{
		path: '/contact',
		title: 'Contact Bernard Mbatia Mwangi | Quantity Surveyor Nairobi',
		description:
			'Contact Bernard Mbatia Mwangi for quantity surveying, construction cost management, bills of quantities, valuations, and project consultancy in Nairobi, Kenya.',
		priority: 0.6,
	},
];

export function absoluteUrl(path = '/') {
	return new URL(path, siteUrl).toString();
}

export function pageMetadata(path) {
	const page = pages.find((item) => item.path === path) || pages[0];
	// Always emit fully qualified, self-referential URLs so every page declares an
	// unambiguous canonical even if access occurs via a host/URL variant.
	const url = absoluteUrl(path);

	return {
		title: path === '/' ? { absolute: page.title } : page.title,
		description: page.description,
		alternates: {
			canonical: url,
		},
		openGraph: {
			title: page.title,
			description: page.description,
			url,
		},
		twitter: {
			title: page.title,
			description: page.description,
		},
	};
}
