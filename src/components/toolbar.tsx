import Link from 'next/link';
import { RiArrowGoBackFill } from 'react-icons/ri';

interface Props {
	pageLocation: string;
	previousPage: string;
}

const Toolbar = ({ pageLocation, previousPage }: Props) => {
	if (pageLocation !== '/') {
		pageLocation = pageLocation + '/';
	}
	console.log(pageLocation);
	return (
		<div className="flex justify-between items-center py-1 px-2 w-full font-mono border-b border-title bg-offwhite2 md:px-4 lg:py-2">
			<p className="font-bold">Index of {pageLocation}</p>
			{pageLocation !== '/' && (
				<Link href={previousPage}>
					<RiArrowGoBackFill />
				</Link>
			)}
		</div>
	);
};

export default Toolbar;
