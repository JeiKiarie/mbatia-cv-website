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
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center gap-4  justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaCalculator className="text-[3rem] text-center w-full" />
						</i>

						<h3 className="text-[1rem] md:text-2xl font-bold text-center">
							Cost Estimation & Management
						</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center gap-4 justify-center">
						<i>
							<FaClipboard className="text-[3rem] text-center w-full" />
						</i>

						<h3 className="text-[1rem] md:text-2xl font-bold text-center">
							Project Planning
						</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center gap-4 justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaSackDollar className="text-[3rem] text-center w-full" />
						</i>

						<h3 className="text-[1rem] md:text-2xl font-bold text-center">
							Insurance Loss Adjustment Consultancy & Valuations
						</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center gap-4 justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaChartBar className="text-[3rem] text-center w-full" />
						</i>

						<h3 className="text-[1rem] md:text-2xl font-bold text-center">
							Interim Valuations
						</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center gap-4 justify-center">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<TbRulerMeasure className="text-[3rem] text-center w-full" />
						</i>

						<h3 className="text-[1rem] md:text-2xl font-bold text-center">
							Site Measurements
						</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center gap-4 ">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<FaCoins className="text-[3rem] text-center w-full" />
						</i>

						<h3 className="text-[1rem] md:text-2xl font-bold text-center">
							Preparation of Final Accounts for Contractors
						</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center gap-4">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<SiAutodeskrevit className="text-[3rem] text-center w-full" />
						</i>

						<h3 className="text-[1rem] md:text-2xl font-bold text-center">
							CAD Software: ArchiCAD, Revit
						</h3>
					</div>
					<div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 flex flex-col items-center justify-center gap-4">
						<i className="w-16 h-16 text-[2rem] mb-4">
							<TfiMicrosoftAlt className="text-[3rem] text-center w-full" />
						</i>

						<h3 className="text-[1rem] md:text-2xl text-center font-bold">
							Applications: WinQS, MS Office (Excel, Word, PowerPoint)
						</h3>
					</div>
					{/* <!-- Additional skills go here --> */}
				</div>
			</div>
			{/* Education & Qualifications Section */}
			<div className="mt-8">
				<h2 className="text-4xl font-extrabold text-center">
					Education & Qualifications
				</h2>
				<p className="text-lg text-center text-gray-700 mt-4">
					Academic background and professional certifications.
				</p>
				{/* Education List */}
				<div className="mt-8 space-y-8">
					<div className="bg-white p-6 shadow-md rounded-lg text-center">
						<h3 className="text-xl font-bold">Diploma in Quantity Surveying</h3>
						<p className="text-gray-600">
							2016 - 2022 Kenya Institute of Professional Studies Technical
							College
						</p>
						{/* <p className="text-gray-500 mt-2">
							Graduated with honours
						</p> */}
					</div>

					<div className="bg-white p-6 shadow-md rounded-lg text-center">
						<h3 className="text-xl font-bold">
							Kenya Certificate of Secondary Education
						</h3>
						<p className="text-gray-600">
							2012 - 2015 St Augustine Gikondi Boys Secondary School
						</p>
						{/* <p className="text-gray-500 mt-2">
							Specialization in project management methodologies and tools.
						</p> */}
					</div>
				</div>
			</div>
		</section>
	);
}
