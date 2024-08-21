export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-gray-800 text-white py-4 text-center">
			<p className="text-white">
				© {year} Bernard Mbatia Mwangi. All rights reserved.
			</p>
		</footer>
	);
}
