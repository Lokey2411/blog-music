import React, { useContext } from "react";
import SidebarItem, { SidebarProps } from "./SidebarItem";
import { GiBookmark } from "react-icons/gi";
import { FaUserFriends } from "react-icons/fa";
import { MusicPlaylist } from "iconsax-react";
import { UserContext } from "../../context/user";

const Sidebar = () => {
	const { user } = useContext(UserContext);
	// sidebar items
	const sidebarItems: SidebarProps[] = [
		{
			title: "You",
			to: "/profile/" + user.id,
			icon: (
				<img
					src={user.avatar}
					alt="avatar"
					className="w-full h-full rounded-full"
				/>
			),
		},
		{
			title: "Saved",
			to: "/saved",
			icon: <GiBookmark className=" text-secondary" />,
		},
		{
			title: "Followed",
			to: "/followed/" + user.id,
			icon: <FaUserFriends className=" text-secondary" />,
		},
		{
			title: "Your playlists",
			to: "/playlists",
			icon: (
				<MusicPlaylist
					size="24"
					className="text-secondary"
				/>
			),
		},
	];
	// playlists
	const playlists: SidebarProps[] = [
		{
			title: "Jujutsu Kaisen",
			to: "/playlists/jujutsu-kaisen",
			icon: (
				<img
					src="https://ragingspirit.com/wp-content/uploads/2023/05/Itadori-Sukuna-jjk.jpg"
					alt=""
					className="w-full h-full rounded-full"
				/>
			),
		},
	];
	// sidebar
	return (
		<aside className=" h-screen w-1/5 m-0 md:flex flex-col shadow-lg hidden">
			<div className="hover:overflow-y-auto">
				{/* sidebar items */}
				{sidebarItems.map((item) => (
					<SidebarItem
						{...item}
						key={item.to}
					/>
				))}
				{/* border gradient */}
				<div className="w-full h-[1px] bg-secondary-gradient"></div>
				{/* Your album and playlists*/}
				<p className="text-gray-500">Your playlists</p>
				{playlists.map((item) => (
					<SidebarItem
						{...item}
						key={item.to}
					/>
				))}
			</div>
		</aside>
	);
};

export default Sidebar;
