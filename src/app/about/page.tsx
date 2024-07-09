import DisplayWindow from '@/components/layout/displayWindow';
import TerminalPrompt from '@/components/terminalPrompt';

const About = () => {
	return (
		<DisplayWindow pageLocation="/about">
			<article className="prose max-w-4xl">
				<TerminalPrompt command="neofetch" />
			</article>
		</DisplayWindow>
	);
};

export default About;
