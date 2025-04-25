"use client";
import { useState } from "react";
import Profile from "./Profile";

enum NavbarButtonID {
	UniverseScreen = "universe screen",
	MergeTaskList = "merge task list",
	Admin = "admin",
}

const Actions = () => {
	const [activeButton, setButtonActive] = useState(
		NavbarButtonID.UniverseScreen,
	);
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement;
		const id = target.id;
		if (id === NavbarButtonID.UniverseScreen) {
			setButtonActive(() => NavbarButtonID.UniverseScreen);
		} else if (id === NavbarButtonID.MergeTaskList) {
			setButtonActive(() => NavbarButtonID.MergeTaskList);
		} else if (id === NavbarButtonID.Admin) {
			setButtonActive(() => NavbarButtonID.Admin);
		}
	};
	return (
		<>
			<div className="flex justify-center items-center space-x-4">
				<button
					id={NavbarButtonID.UniverseScreen}
					onClick={handleClick}
					className={`${activeButton === NavbarButtonID.UniverseScreen ? "rounded-full bg-[#eee9f233] " : ""} w-fit px-4 h-10  text-white font-[600]`}
				>
					Account Universe
				</button>
				<button
					id={NavbarButtonID.MergeTaskList}
					onClick={handleClick}
					className={`${activeButton === NavbarButtonID.MergeTaskList ? "rounded-full bg-[#eee9f233] " : ""} w-fit px-4 h-10  text-white font-[600]`}
				>
					Merge Task List
				</button>
				<button
					id={NavbarButtonID.Admin}
					onClick={handleClick}
					className={`${activeButton === NavbarButtonID.Admin ? "rounded-full bg-[#eee9f233] " : ""} w-fit px-4 h-10  text-white font-[600]`}
				>
					Admin
				</button>
				<Profile />
			</div>
		</>
	);
};

export default Actions;
