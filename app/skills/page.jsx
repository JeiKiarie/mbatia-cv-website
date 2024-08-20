import { FaCalculator } from 'react-icons/fa';

export default function Skills() {
	return (
		<section
			id="skills"
			className="py-20 bg-white">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
				<h2 className="text-4xl font-extrabold mb-12 text-center">Skills</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaCalculator />
						</i>
						{/* <img
							src="/skills-icon1.svg"
							alt="Cost Estimation"
							className="w-8 h-8 mb-4"
						/> */}
						<h3 className="text-2xl font-bold">Cost Estimation</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaCalculator />
						</i>
						{/* <img
							src="/skills-icon1.svg"
							alt="Cost Estimation"
							className="w-8 h-8 mb-4"
						/> */}
						<h3 className="text-2xl font-bold">Cost Estimation</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaCalculator />
						</i>
						{/* <img
							src="/skills-icon1.svg"
							alt="Cost Estimation"
							className="w-8 h-8 mb-4"
						/> */}
						<h3 className="text-2xl font-bold">Cost Estimation</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaCalculator />
						</i>
						{/* <img
							src="/skills-icon1.svg"
							alt="Cost Estimation"
							className="w-8 h-8 mb-4"
						/> */}
						<h3 className="text-2xl font-bold">Cost Estimation</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaCalculator />
						</i>
						{/* <img
							src="/skills-icon1.svg"
							alt="Cost Estimation"
							className="w-8 h-8 mb-4"
						/> */}
						<h3 className="text-2xl font-bold">Cost Estimation</h3>
					</div>
					{/* <!-- Additional skills go here --> */}
				</div>
			</div>
		</section>
	);
}
