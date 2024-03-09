import NavItem from "./NavItem";
import { banner } from "../../assets";
import SearchBar from "../SearchBar";
import { useContext } from "react";
import { UserContext } from "../../context/user";
import { Link } from "react-router-dom";
import ChatBox from "../ChatBox";
import { ChatContext } from "../../context/view/chat";

export const tabs = [
	{
		title: "Home",
		to: "/",
	},
	{
		title: "Music",
		to: "/music",
	},
	{
		title: "Ranking",
		to: "/ranking",
	},
	{
		title: "Admin",
		to: "/admin",
	},
];

const Navbar = ({ active }: any) => {
	const { user } = useContext(UserContext);
	const handleSearch = (text: string) => {};
	// const { chatOpened, setChatOpened } = useContext(ChatContext);
	return (
		<div className="md:flex justify-between w-full px-4 py-2 fixed top-0 left-0 right-0 z-50 bg-tertiary h-[60px] items-center hidden shadow-md">
			{/* logo */}
			<img
				src={banner}
				alt="logo"
				className={"w-8 h-8 rounded-full"}
			/>
			{/* search */}
			<SearchBar
				text="Search for some blog, song or user"
				handlesearch={handleSearch}
			/>
			{/* tabs */}
			{tabs.map(({ title, to }) => (
				<NavItem
					isActive={title.toLowerCase() === active.toLowerCase()}
					title={title}
					to={to}
					key={to}
				/>
			))}
			{/* users and chat */}
			<div className="flex items-center">
				{/* Chat box */}
				<ChatBox />
				<Link
					to={`/profile/you`}
					className="ml-3 flex items-center gap-1"
				>
					<img
						src={user.avatar}
						className="w-6 h-6 rounded-full ml-2 cursor-pointer"
						alt=""
					/>
				</Link>
			</div>
		</div>
	);
};

export default Navbar;
