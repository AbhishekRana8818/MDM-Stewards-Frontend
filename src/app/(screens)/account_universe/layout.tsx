import Navbar from "@/components/navbar/Navbar";

const AccountUniverseScreenLayout = ({
	children,
}: { children: React.ReactNode }) => {
	return (
		<div className="h-screen w-full">
			<Navbar></Navbar>

			{children}
		</div>
	);
};

export default AccountUniverseScreenLayout;
