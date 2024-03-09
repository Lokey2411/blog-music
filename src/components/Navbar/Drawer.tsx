import { MenuBoard } from "iconsax-react";
import React, { useState } from "react";
import { tabs } from "./Navbar";
import NavItem from "./NavItem";
import { motion } from "framer-motion";
import { slideIn } from "../../utils/motion";

const Drawer = ({ active }: any) => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div
			className="flex flex-col lg:hidden"
			onClick={() => setIsOpen(!isOpen)}
		>
			{/* Menu icon */}
			<MenuBoard
				size="32"
				color="#FF8A65"
			/>
			{isOpen &&
				tabs.map(({ title, to }, index) => (
					<motion.div
						variants={slideIn("right", "spring", 0.5, 0.75 * index)}
						className=""
					>
						<NavItem
							isActive={title.toLowerCase() === active.toLowerCase()}
							title={title}
							to={to}
							key={to}
						/>
					</motion.div>
				))}
		</div>
	);
};

export default Drawer;
