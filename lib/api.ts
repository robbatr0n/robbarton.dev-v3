import fs from 'fs';
import matter from 'gray-matter';
import { join } from 'path';
import { Project } from '../interfaces/project';

const projectsDir = join(process.cwd(), 'projects');

export function getProjectSlugs() {
	return fs.readdirSync(projectsDir);
}

export function getProjectBySlug(slug: string) {
	const realSlug = slug.replace(/\.md$/, '');
	const fullPath = join(projectsDir, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, 'utf8');
	const { data, content } = matter(fileContents);
	return { ...data, slug: realSlug, content } as Project;
}

export function getAllProjects(): Project[] {
	const slugs = getProjectSlugs();
	const posts = slugs
		.map((slug) => getProjectBySlug(slug))
		.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
	return posts;
}
