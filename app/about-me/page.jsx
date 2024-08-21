import Image from 'next/image';

export default function About() {
	return (
		<section
			id="about"
			className="py-20 bg-white mt-[2rem]">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
				<div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
					{/* Profile Photo */}
					<div className="mb-8 lg:mb-0 lg:mr-12">
						<Image
							width={300}
							height={300}
							src="/Mbatia.png"
							alt="Your Name"
							className="w-64 h-64 rounded-full object-cover object-center shadow-lg"
						/>
					</div>

					{/* About Content */}
					<div className="space-y-4 max-w-xl mx-auto">
						<h2 className="text-4xl font-extrabold">About Me</h2>
						<p className="text-lg text-gray-700">
							I have over 6 years of experience in Quantity Surveying and Cost
							Consultancy, specializing in Cost Management, Estimation, and
							Project Management. I bring expertise in preparation of Pretender
							Cost Estimates, Measurements & Bills of Quantities/Specifications,
							Tender Evaluations Reports, Project Contract & Sub Contracts,
							Interim Valuations, Insurance Loss Adjustment Consultancy &
							Valuations, Preparation of Final Accounts for Main Contractors and
							Sub-contractors coordination as well as Site Measurements.
						</p>
						<div className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-lg">
							<h3 className="text-2xl font-bold mb-2">Key Strengths</h3>
							<ul className="list-none list-inside">
								<li>Cost Management</li>
								<li>Project Planning</li>
								<li>Insurance Loss Adjustment Consultancy & Valuations</li>
								<li>Risk Assessment</li>
							</ul>
						</div>
						{/* Download CV Button */}
						<div className="mt-8">
							<a
								href="/Mbatia_CV.pdf"
								download="Mbatia_CV.pdf"
								className="text-white inline-block px-8 py-4 bg-blue-600 hover:bg-blue-800 rounded-full text-lg font-bold shadow-lg transform transition duration-300 hover:scale-105">
								Download CV
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
