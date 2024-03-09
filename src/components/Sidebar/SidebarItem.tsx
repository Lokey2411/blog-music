import React from "react";
import { Link } from "react-router-dom";

export type SidebarProps = {
	title: string;
	to: string;
	icon: JSX.Element;
};

const SidebarItem = ({ title, to, icon: Icon }: SidebarProps) => {
	return (
		<Link
			to={to}
			className="flex w-full px-4 hover:bg-gray-300 rounded-lg mb-1 py-2 items-center"
		>
			{/* icon 24px and margin-right 8px */}
			<div className="mr-2  w-[24px] h-[24px] rounded-full">{Icon}</div>
			{/* text */}
			<p className="font-bold text-tertiary">{title}</p>
		</Link>
	);
};

export default SidebarItem;
