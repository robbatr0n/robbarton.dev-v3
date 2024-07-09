interface Props {
	command: string;
}

const TerminalPrompt = ({ command }: Props) => {
	return (
		<p>
			<span className="text-title font-bold">user@robbarton.dev&nbsp;&gt;&nbsp;</span>
			{command}
		</p>
	);
};

export default TerminalPrompt;
