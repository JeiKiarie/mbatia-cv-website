import {
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
	FaLinkedin,
} from 'react-icons/fa';

export default function Contact() {
	return (
		<section
			id="contact"
			className="relative py-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white"
			style={{
				backgroundImage: 'url("/contact-image.jpg")',
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			{/* Background Overlay */}
			<div className="absolute inset-0 bg-black opacity-50"></div>

			<div className="relative max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
				<h2 className="text-4xl font-extrabold mb-12 text-center relative">
					Contact Me
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
					{/* Contact Details Section */}
					<div className="space-y-6">
						<h3 className="text-3xl font-bold">Contact Details</h3>
						<div className="flex items-center">
							<FaPhoneAlt className="text-xl mr-4" />
							<span className="text-lg">+254 722 711162</span>
						</div>
						<div className="flex items-center">
							<FaEnvelope className="text-xl mr-4" />
							<span className="text-lg">kiarie@microstation.co.ke</span>
						</div>
						<div className="flex items-center">
							<FaMapMarkerAlt className="text-xl mr-4" />
							<span className="text-lg">
								New Doonholm Road, Doonholm, Nairobi, Kenya
							</span>
						</div>
						<div className="flex items-center">
							<FaLinkedin className="text-xl mr-4" />
							<a
								href="https://www.linkedin.com/in/yourprofile"
								target="_blank"
								className="text-lg hover:underline">
								linkedin.com/in/jeikiarie
							</a>
						</div>
					</div>

					{/* Contact Form Section */}
					<div>
						<form className="space-y-6">
							<input
								required
								type="text"
								placeholder="Name"
								className="w-full p-4 bg-white text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
							/>
							<input
								required
								type="email"
								placeholder="Email"
								className="w-full p-4 bg-white text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"
							/>
							<textarea
								required
								placeholder="Message"
								className="w-full p-4 bg-white text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300"></textarea>
							<button
								type="submit"
								className="px-8 py-4 bg-blue-600 hover:bg-blue-800 rounded-full text-lg font-bold shadow-lg transform transition duration-300 hover:scale-105">
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
