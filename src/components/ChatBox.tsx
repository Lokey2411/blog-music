import React, { useContext, useState } from "react";
import { Chat } from "../types/chat";
import { BsChatHeart } from "react-icons/bs";
import { UserContext } from "../context/user";
import moment from "moment";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { Edit2 } from "iconsax-react";
import SearchBar from "./SearchBar";
import { ChatContext } from "../context/view/chat";

const chatItems: Chat[] = [
	{
		id: 1,
		createdAt: new Date(Date.now()),
		image: "https://minhtuanmobile.com/uploads/blog/tai-sao-gojo-van-chua-chet-phan-tich-chap-236-jujutsu-kaisen-230922023358.jpg",
		message: "Nah, I'd win",
		senderId: 1,
		receiverId: 2,
	},
];

const ChatRender = ({ image, message, senderId, ...props }: Chat) => {
	const { user } = useContext(UserContext);
	const isSender = `${user.id}` === `${senderId}`;
	const { addChats } = useContext(ChatContext);

	return (
		<div
			className="flex w-fit items-center cursor-pointer hover:bg-gray-100 rounded-lg p-2 select-none"
			onClick={() => addChats(Number(props.receiverId))}
		>
			<img
				src={user.avatar}
				alt=""
				className="w-[60px] h-[60px] rounded-full"
			/>
			<div className="ml-4">
				<h3 className="text-xl font-bold">{user.username}</h3>
				<p>
					{image ? "Sent an image" : `${isSender && "You: "} ${message}`}. {moment(props.createdAt).fromNow()}
				</p>
			</div>
		</div>
	);
};

const ChatBox = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [searchText, setSearchText] = useState("");
	const handleSearch = (text: string) => {};
	return (
		<div>
			<BsChatHeart
				className={`${isOpen ? "text-white" : "text-primary"} text-[24px] cursor-pointer hover:text-white`}
				onClick={() => setIsOpen(!isOpen)}
			/>
			{/* chat box */}
			{isOpen && (
				<div className="absolute bg-white top-full right-0 mr-8 h-fit p-2 rounded-2xl">
					{/* chat box header */}
					<div className="flex items-center justify-between">
						<p className="font-bold text-3xl">Chat</p>
						<div className="flex items-center justify-between">
							<MdOutlineZoomOutMap
								size={32}
								className="text-3xl p-2 rounded-full hover:bg-gray-200 cursor-pointer"
							/>
							<Edit2
								size="32"
								className="text-3xl p-2 rounded-full hover:bg-gray-200 cursor-pointer"
							/>
						</div>
					</div>
					{/* Search bar */}
					<SearchBar
						text="Search someone"
						handlesearch={handleSearch}
						value={searchText}
						onChange={(e) => setSearchText(e.target.value)}
					/>
					{/* chat box items */}
					{chatItems.map((item) => (
						<ChatRender
							{...item}
							key={item.id}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default ChatBox;
