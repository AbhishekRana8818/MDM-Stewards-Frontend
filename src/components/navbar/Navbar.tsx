import Image from "next/image";
import Actions from "./Actions";

const Navbar = () => {
	return (
		<>
			<div className="w-full h-[5.5rem] flex justify-between bg-gradient-to-r from-[#001E96] via-[#005CD9] to-[#008CE3] space-y-5">
				<div>
					<Image
						src="/ProcDNA - White.png"
						alt="procDna Logo"
						width={83.7}
						height={48}
						className="my-5 mx-5"
					/>
				</div>
				<Actions />
			</div>
		</>
	);
};

export default Navbar;
