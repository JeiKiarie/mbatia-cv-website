import Image from 'next/image';

export default function Projects() {
	return (
		<section
			id="projects"
			className="py-20 bg-gray-100">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
				<h2 className="text-4xl font-extrabold mb-12 text-center">Projects</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
						<Image
							width={1000}
							height={1000}
							src="/home-image.jpg"
							alt="Project Name"
							className="w-full h-40 object-cover rounded-lg mb-4"
						/>
						<h3 className="text-2xl font-bold mb-2">Project Name</h3>
						<p>Project details.</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
						<Image
							width={1000}
							height={1000}
							src="/home-image.jpg"
							alt="Project Name"
							className="w-full h-40 object-cover rounded-lg mb-4"
						/>
						<h3 className="text-2xl font-bold mb-2">Project Name</h3>
						<p>Project details.</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
						<Image
							width={1000}
							height={1000}
							src="/home-image.jpg"
							alt="Project Name"
							className="w-full h-40 object-cover rounded-lg mb-4"
						/>
						<h3 className="text-2xl font-bold mb-2">Project Name</h3>
						<p>Project details.</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
						<Image
							width={1000}
							height={1000}
							src="/home-image.jpg"
							alt="Project Name"
							className="w-full h-40 object-cover rounded-lg mb-4"
						/>
						<h3 className="text-2xl font-bold mb-2">Project Name</h3>
						<p>Project details.</p>
					</div>
					<div className="bg-white p-6 rounded-lg shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition duration-300">
						<Image
							width={1000}
							height={1000}
							src="/home-image.jpg"
							alt="Project Name"
							className="w-full h-40 object-cover rounded-lg mb-4"
						/>
						<h3 className="text-2xl font-bold mb-2">Project Name</h3>
						<p>Project details.</p>
					</div>
					{/* <!-- Additional projects go here --> */}
				</div>
			</div>
		</section>
	);
}
