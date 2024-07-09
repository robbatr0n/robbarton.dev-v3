interface Props {
	children: React.ReactNode;
}

const Container = ({ children }: Props) => {
	return (
		<div className="bg-offwhite container mx-auto flex min-h-screen flex-col justify-between px-2">
			{children}
		</div>
	);
};

export default Container;
