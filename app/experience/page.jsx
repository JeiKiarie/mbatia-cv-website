import Image from 'next/image';

export default function Experience() {
	return (
		<section
			id="experience"
			className="mt-8 py-20 bg-gradient-to-b from-gray-100 to-white">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
				<h2 className="text-4xl font-extrabold mb-12 text-center">
					Experience
				</h2>
				<div className="flex flex-wrap gap-4 flex-col md:flex-row items-center justify-center">
					<div className="basis-[100%] flex flex-col items-center">
						<div className="bg-blue-700 rounded-full h-52 w-52 flex items-center justify-center">
							<Image
								className="object-contain"
								width={200}
								height={200}
								src="/Masterbill-Integrated-Projects-LOGO.jpg"
								alt="Masterbill Integrated Projects Logo"
								// className="h-full w-full"
							/>
						</div>
						<div className="ml-6">
							<h3 className="text-2xl text-center font-bold">
								Assistant Quantity Surveyor
							</h3>
							<p className="text-gray-600 text-center mb-4">
								Masterbill Integrated Projects & Integrated Projects Consultants
								& MIP Project Management Ltd, 2018 - Present
							</p>
							<p className="text-slate-950 text-xl font-bold">
								Duties include;
							</p>
							<p className="mt-2 text-gray-700">
								Managed cost estimation and budgeting for large-scale
								construction projects. <br /> Pretender cost estimates. <br />{' '}
								Measurements & Bills of Quantities & specifications. <br />{' '}
								Tender evaluations reports. <br />
								Project contract & sub contracts. <br /> Interim Valuations.{' '}
								<br /> Attending site meetings & inspections. <br /> Insurance
								Loss Adjustment Consultancy & Valuations. <br /> Final accounts
								for main contractors and sub-contractors coordination. <br />{' '}
								Site measurements. <br /> Arbitration & Mediation (pupillage).{' '}
								<br /> Preparation of Arbitration Awards. <br />
								Working as Personal Assistant (PA) to the Managing Director in
								matters of Arbitration & Mediation.
							</p>
						</div>
					</div>

					{/* <!-- Additional experiences go here --> */}
				</div>
			</div>
		</section>
	);
}
