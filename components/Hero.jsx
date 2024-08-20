import { motion } from 'framer-motion';

export default function Hero() {
	return (
		<section
			id="hero"
			className="relative flex items-center justify-center bg-cover bg-center bg-no-repeat text-white mt-[4.1rem]"
			style={{ backgroundImage: 'url("/home-image.jpg")' }}>
			<div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-black opacity-60"></div>
			<motion.div
				className="relative text-center z-10"
				initial={{ opacity: 0, scale: 0.9 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 2 }}>
				<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight drop-shadow-lg">
					Hello, I'm a Quantity Surveyor
				</h1>
				<p className="mt-4 text-xl md:text-2xl text-white max-w-xl mx-auto drop-shadow-md">
					Expert in construction cost management and estimation.
				</p>
				<a
					href="contact"
					className="mt-8 inline-block px-8 py-4 bg-blue-600 hover:bg-blue-700 rounded-full text-lg font-bold text-white shadow-lg transform transition duration-300 hover:scale-105">
					Get in Touch
				</a>
			</motion.div>
		</section>
	);
}
