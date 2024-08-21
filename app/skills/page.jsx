import { FaCalculator } from 'react-icons/fa';
import { CiViewTimeline } from 'react-icons/ci';
import { FaClipboard } from 'react-icons/fa';
import { FaSackDollar } from 'react-icons/fa6';
import { FaChartBar } from 'react-icons/fa6';
import { TbRulerMeasure } from 'react-icons/tb';
import { FaCoins } from 'react-icons/fa';
import { SiAutodesk } from 'react-icons/si';
import { TfiMicrosoftAlt } from 'react-icons/tfi';
import { SiAutodeskrevit } from 'react-icons/si';

export default function Skills() {
	return (
		<section
			id="skills"
			className="py-20 bg-white mt-8">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
				<h2 className="text-4xl font-extrabold mb-12 text-center">
					Skills
					<span>
						<small>(among others)</small>
					</span>
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaCalculator />
						</i>

						<h3 className="text-2xl font-bold">Cost Estimation & Management</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaClipboard />
						</i>

						<h3 className="text-2xl font-bold">Project Planning</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaSackDollar />
						</i>

						<h3 className="text-2xl font-bold">
							Insurance Loss Adjustment Consultancy & Valuations
						</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaChartBar />
						</i>

						<h3 className="text-2xl font-bold">Interim Valuations</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<TbRulerMeasure />
						</i>

						<h3 className="text-2xl font-bold">Site Measurements</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaCoins />
						</i>

						<h3 className="text-2xl font-bold">
							Preparation of Final Accounts for Contractors
						</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<SiAutodeskrevit />
						</i>

						<h3 className="text-2xl font-bold">
							CAD Software: ArchiCAD, Revit
						</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<TfiMicrosoftAlt />
						</i>

						<h3 className="text-2xl font-bold">
							Applications: WinQS, MS Office (Excel, Word, PowerPoint)
						</h3>
					</div>
					{/* <!-- Additional skills go here --> */}
				</div>
			</div>
		</section>
	);
}
