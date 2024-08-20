import Image from 'next/image';

export default function About() {
	return (
		<section
			id="about"
			className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
				<div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left">
					{/* Profile Photo */}
					<div className="mb-8 lg:mb-0 lg:mr-12">
						<Image
							width={300}
							height={300}
							src="/kiarie.jpg"
							alt="Your Name"
							className="w-64 h-64 rounded-full object-cover object-right-top shadow-lg"
						/>
					</div>
					{/* <div className="mb-8 lg:mb-0 lg:mr-12">
						<img
							src="/profile-photo.jpg"
							alt="Your Name"
							className="w-48 h-48 rounded-full object-cover shadow-lg"
						/>
					</div> */}

					{/* About Content */}
					<div className="space-y-4 max-w-xl">
						<h2 className="text-4xl font-extrabold">About Me</h2>
						<p className="text-lg text-gray-700">
							I have over 10 years of experience as a Quantity Surveyor,
							specializing in cost management, estimation, and project
							management. I bring expertise in...
						</p>
						<div className="mt-8 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-xl shadow-lg">
							<h3 className="text-2xl font-bold mb-2">Key Strengths</h3>
							<ul className="list-disc list-inside">
								<li>Cost Management</li>
								<li>Project Planning</li>
								<li>Risk Assessment</li>
							</ul>
						</div>
						{/* Download CV Button */}
						<div className="mt-8">
							<a
								href="/cv.pdf"
								download="YourName_CV.pdf"
								className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-800 rounded-full text-lg font-bold shadow-lg transform transition duration-300 hover:scale-105">
								Download CV
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
