import DisplayWindow from '../components/layout/displayWindow';
import Link from 'next/link';
import { FcFolder } from 'react-icons/fc';
import TerminalPrompt from '../components/terminalPrompt';
import Image from 'next/image';

export default function Home() {
	return (
		<DisplayWindow pageLocation="/">
			<article className="prose max-w-4xl">
				<p className="font-bold">Updated 21/05/2023</p>
				<p>
					Hello, my name is Rob Barton and I am a software developer and computer science graduate
					currently based in London.
				</p>
				<p>
					Welcome to my portfolio where you can see some of my projects as well as find out a bit
					about me.
				</p>
				<p>---</p>
				<TerminalPrompt command="ls -d */" />
				<p className="flex items-center">
					<span className="mr-2 font-bold">
						<FcFolder />
					</span>
					<Link className="underline" href="/projects">
						Projects/
					</Link>
				</p>
				<p className="flex items-center">
					<span className="mr-2 font-bold">
						<FcFolder />
					</span>
					<Link className="underline" href="/about">
						About/
					</Link>
				</p>
				<p className="flex items-center">
					<span className="mr-2 font-bold">
						<FcFolder />
					</span>
					<Link className="underline" href="/contact">
						Contact/
					</Link>
				</p>
			</article>
		</DisplayWindow>
	);
}

{
	/* <table className="prose-sm mt-12 w-full max-w-none xl:prose xl:max-w-none">
				<thead className="text-left">
					<tr>
						<th>name</th>
						<th>description</th>
						<th>date</th>
					</tr>
				</thead>
				<tbody>
					{projects.map((project, id) => (
						<tr key={id}>
							<td className="underline">
								<Link href={`projects/${project.slug}`}>{project.title}</Link>
							</td>
							<td>{project.description}</td>
							<td>{moment(project.date).format('MM/YY')}</td>
						</tr>
					))}
				</tbody>
			</table> */
}
