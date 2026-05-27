import Link from 'next/link';

export default function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer className="bg-gray-800 text-white py-4 text-center">
			<p className="text-white">
				© {year} Bernard Mbatia Mwangi. All rights reserved.
			</p>
			<p className="mt-1 text-xs text-gray-400">
				<Link
					href="https://microstation.co.ke/"
					target="_blank"
					rel="noreferrer"
					className="hover:text-white hover:underline">
					Website by JeiKiarie
				</Link>
			</p>
		</footer>
	);
}
