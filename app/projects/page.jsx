import Image from 'next/image';

export default function Projects() {
	return (
		<section
			id="projects"
			className="mt-8 py-20 bg-gray-100">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
				<h2 className="text-4xl font-extrabold mb-12 text-center">Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{[
						{
							id: 1,
							image: '/home-image.jpg',
							period: '2018 - 2024',
							client: 'Various Building Projects Commercial & Residential',
							description: 'Fit-out works',
						},
						{
							id: 2,
							image: '/home-image.jpg',
							period: '2023',
							client: 'BobMill Ltd',
							description: 'Insurance Claim for Fire Damage',
						},
						{
							id: 3,
							image: '/home-image.jpg',
							period: '2023',
							client: 'All Saints Cathedral',
							description: 'Preparation of Final accounts',
						},
						{
							id: 4,
							image: '/home-image.jpg',
							period: '2023',
							client: 'Ozone along James Gichuru Road',
							description:
								'Preparation of Bills of Quantities for Proposed Commercial Use		Offices',
						},
						{
							id: 5,
							image: '/home-image.jpg',
							period: '2023',
							client: 'Konza Offices',
							description:
								'Preparation of Bills of Quantities for Interior Fit-out works',
						},
						{
							id: 6,
							image: '/home-image.jpg',
							period: '2022',
							client: 'Trade Development Bank',
							description:
								'Preparation of Bills of Quantities for Interior Fit-out works, Gym						works, Signage works & Moveable Furniture',
						},
						{
							id: 7,
							image: '/home-image.jpg',
							period: '2022',
							client: 'Applewood Gate House ',
							description: 'Measurement & Preparation of Bills of Quantities',
						},
						{
							id: 8,
							image: '/home-image.jpg',
							period: '2022',
							client: 'Manipal Godown',
							description: 'Insurance Claim for Fire Damage',
						},
						{
							id: 9,
							image: '/home-image.jpg',
							period: '2022',
							client: 'Kinoo Magana Godown',
							description: 'Insurance Claim for Fire Damage',
						},

						{
							id: 10,
							image: '/home-image.jpg',
							period: '2022',
							client: 'Amari Gardens Gate House',
							description: 'Measurement & Preparation of  Bills of Quantities',
						},
						{
							id: 11,
							image: '/home-image.jpg',
							period: '2021',
							client: 'Ziwani Eco-Camp',
							description:
								'Insurance Claim valuation for flood damaged Tent and staff quarters',
						},
						{
							id: 12,
							image: '/home-image.jpg',
							period: '2021',
							client: 'Kenya Forest Services',
							description: 'Insurance Claim',
						},
						{
							id: 13,
							image: '/home-image.jpg',
							period: '2021',
							client: 'Matumbato Estate',
							description: 'Insurance Claim for Boundary wall',
						},
						{
							id: 14,
							image: '/home-image.jpg',
							period: '2021',
							client: 'Sunnyvale Apartments',
							description: 'Insurance Claim for Boundary wall',
						},
						{
							id: 15,
							image: '/home-image.jpg',
							period: '2020',
							client: 'KMRC',
							description:
								'Preparation of Bills of Quantities and tender evaluation of Interior Fit-out works',
						},
						{
							id: 16,
							image: '/home-image.jpg',
							period: '2020',
							client: 'Huruma Girls Secondary School',
							description: 'Insurance Claim for dormitory fire damage',
						},
						{
							id: 17,
							image: '/home-image.jpg',
							period: '2019',
							client: 'TRV Office Plaza',
							description:
								'Measurement & Preparation of Bills of Quantities for repair works',
						},
						{
							id: 18,
							image: '/home-image.jpg',
							period: '2019 - 2021',
							client: 'Cysuites',
							description: 'Renovation and Residential Development',
						},
						{
							id: 19,
							image: '/home-image.jpg',
							period: '2019',
							client: 'Mafila Apartments',
							description: 'Renovation Works',
						},
						{
							id: 20,
							image: '/home-image.jpg',
							period: '2019',
							client: 'Rapid Cate Services',
							description: 'Warehouse Development at Jomvu',
						},
						{
							id: 21,
							image: '/home-image.jpg',
							period: '2018 – 2020',
							client: 'Villa Maria',
							description: 'Residential Development at Muthaiga',
						},
						{
							id: 22,
							image: '/home-image.jpg',
							period: '2017 - 2023',
							client: 'All Saints Cathedral',
							description:
								'Children & Teens Centre, Nairobi (Site Re-measurements, Site visits)',
						},
						{
							id: 23,
							image: '/home-image.jpg',
							period: '2017 - 2023',
							client: 'Kenya High School',
							description: 'Site visits and site re-measurements',
						},
					].map((project) => (
						<div
							key={project.id}
							className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
							<Image
								width={1000}
								height={1000}
								src={project.image}
								alt={project.client}
								className="w-full h-40 object-cover rounded-lg mb-4"
							/>
							<p>{project.period}</p>
							<h3 className="text-2xl font-bold mb-2">
								Client: {project.client}
							</h3>
							<p>{project.description}.</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
