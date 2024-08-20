export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-gray-800 text-white py-4 text-center">
			<p className="text-white">© {year} J Kiarie. All rights reserved.</p>
		</footer>
	);
}
