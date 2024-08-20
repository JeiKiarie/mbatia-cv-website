'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const links = [
	{
		name: 'Home',
		link: '/',
	},
	{
		name: 'About',
		link: '/about-me',
	},
	{
		name: 'Skills',
		link: '/skills',
	},
	{
		name: 'Experience',
		link: '/experience',
	},
	{
		name: 'Projects',
		link: '/projects',
	},
	{
		name: 'Contact Me',
		link: '/contact',
	},
];

export default function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const pathname = usePathname();

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const isActive = (path) => pathname === path;

	return (
		<header className="bg-white shadow-lg fixed w-full top-0 left-0 z-50">
			<div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 flex justify-between items-center h-16">
				{/* Logo */}
				<div className="text-2xl font-bold">
					<a
						href="/"
						className="text-blue-700">
						J Kiarie
					</a>
				</div>
				<div className="text-2xl font-bold">
					<a
						href="/"
						className="text-blue-700">
						Curriculum Vitae
					</a>
				</div>

				{/* Desktop Menu */}
				<nav className="hidden lg:flex space-x-6 text-lg">
					{links.map((link) => (
						<Link
							href={link.link}
							// className="hover:text-blue-700 active:text-blue-700"
							className={
								isActive(`${link.link}`) ? 'active' : 'hover:text-blue-700'
							}>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Mobile Menu Button */}
				<div className="lg:hidden">
					<button
						onClick={toggleMenu}
						className="text-2xl text-blue-700 focus:outline-none">
						{isOpen ? <FaTimes /> : <FaBars />}
					</button>
				</div>

				{/* Mobile Menu Dropdown */}
				{isOpen && (
					<div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg">
						<nav className="flex flex-col items-center space-y-4 text-lg p-6">
							{links.map((link) => (
								<Link
									href={link.link}
									// className="hover:text-blue-700 active:text-blue-700"
									className={
										isActive(`${link.link}`)
											? 'active-mobile'
											: 'hover:text-blue-700'
									}
									onClick={toggleMenu}>
									{link.name}
								</Link>
							))}

							{/* <Link
								href="/"
								className="hover:text-blue-700 active:text-blue-700"
								onClick={toggleMenu}>
								Home
							</Link>
							<Link
								href="about-me"
								className="hover:text-blue-700 active:text-blue-700"
								onClick={toggleMenu}>
								About
							</Link>
							<Link
								href="experience"
								className="hover:text-blue-700"
								onClick={toggleMenu}>
								Experience
							</Link>
							<Link
								href="projects"
								className="hover:text-blue-700"
								onClick={toggleMenu}>
								Projects
							</Link>
							<Link
								href="contact"
								className="hover:text-blue-700"
								onClick={toggleMenu}>
								Contact Me
							</Link> */}
						</nav>
					</div>
				)}
			</div>
		</header>
	);
}
