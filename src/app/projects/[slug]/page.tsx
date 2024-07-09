import DisplayWindow from '@/components/layout/displayWindow';
import { getProjectBySlug } from '../../../../lib/api';
import { FilesManager } from 'turbodepot-node';
import TerminalPrompt from '@/components/terminalPrompt';
import { TbWorld, TbBrandGithub } from 'react-icons/tb';
import Link from 'next/link';
import Image from 'next/image';
type Params = {
	params: {
		slug: string;
	};
};

export default async function Project({ params }: Params) {
	let filesManager: FilesManager = new FilesManager();
	const project = getProjectBySlug(params.slug);
	const dashedTitle = project.title.replaceAll(' ', '-');
	const commandString = `open ${dashedTitle}/README.md`;
	return (
		<DisplayWindow pageLocation={`/projects/${project.slug}`}>
			<article className="prose max-w-4xl">
				<TerminalPrompt command={commandString} />
				<div>
					<div className="sm:flex sm:items-end">
						<h3 className="mb-0 font-bold">{project.title}</h3>
						<div className="mt-2 flex text-2xl sm:mb-1 sm:ml-4 sm:mt-0">
							<Link className="mr-2" href={project.repo}>
								<TbBrandGithub />
							</Link>
							{project.demo && (
								<Link href={project.demo}>
									<TbWorld />
								</Link>
							)}
						</div>
					</div>
					<p>{project.content}</p>
				</div>
				<div className="mb-0 mt-4 flex w-96 justify-start">
					{project.tags.map((tag, id) => (
						<span
							key={id}
							className="hover:bg-title me-2 inline-flex items-center justify-center rounded border border-black bg-transparent px-2.5 py-0.5 text-xs font-semibold">
							{tag}
						</span>
					))}
				</div>
				{project.image && (
					<div className="p-4">
						<Image
							className="mx-auto"
							src={project.image}
							width={1024}
							height={1024}
							alt="Project image"
						/>
					</div>
				)}
			</article>
		</DisplayWindow>
	);
}
