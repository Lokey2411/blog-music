import React from "react";
import { Link } from "react-router-dom";

type Props = {
	title: string;
	to: string;
	isActive: boolean;
};

const NavItem = ({ title, to, isActive }: Props) => {
	return (
		<Link
			to={to}
			className={`${isActive ? "text-white" : "text-secondary"} flex-1 px-2 md:text-center  text-[24px] hover:text-white font-hand-writing cursor-pointer`}
		>
			{title}
		</Link>
	);
};

export default NavItem;
