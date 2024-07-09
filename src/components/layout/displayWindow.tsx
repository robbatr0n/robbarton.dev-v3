import Toolbar from '../toolbar';

interface Props {
	children: React.ReactNode;
	pageLocation: string;
}
const DisplayWindow = ({ children, pageLocation }: Props) => {
	let previousPage = pageLocation.substring(0, pageLocation.lastIndexOf('/'));
	if (previousPage == '') {
		previousPage = '/';
	}

	return (
		<div className="border-title bg-offwhite2 mx-auto w-full max-w-4xl grow border-2 font-mono">
			<Toolbar pageLocation={pageLocation} previousPage={previousPage} />

			<div className="px-2 py-4 md:px-4 md:py-8">{children}</div>
		</div>
	);
};

export default DisplayWindow;
