import Hero from '../components/Hero';
import { pageMetadata } from './seo';

export const metadata = pageMetadata('/');

export default function Home() {
	return (
		// <div className="bg-gradient-to-b from-blue-50 to-blue-100">
		<Hero />
		// </div>
	);
}
