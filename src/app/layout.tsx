import Container from '../components/layout/container';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import { Space_Mono, Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
	subsets: ['latin'],
	weight: ['400', '600'],
	variable: '--font-inter',
});

const space_mono = Space_Mono({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-space_mono',
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html className={`${space_mono.variable} ${inter.variable}`} lang="en">
			<body className="bg-offwhite">
				<Container>
					<Header />
					{children}
					<Footer />
				</Container>
			</body>
		</html>
	);
}
