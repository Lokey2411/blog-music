import { Edit2 } from "iconsax-react";
import React, { useContext, useState } from "react";
import { Chat } from "../types/chat";
import { UserContext } from "../context/user";
import { ChatContext } from "../context/view/chat";
import { removeDuplicate } from "../controller";

const ChatRender = ({ image, message, senderId, ...props }: Chat & { handleOpen: (id: number) => void }) => {
	const { user } = useContext(UserContext);
	const isSender = `${user.id}` === `${senderId}`;
	const [isHover, setIsHover] = useState(false);
	return (
		<div
			className={`flex items-center cursor-pointer rounded-lg my-2 select-none flex-row-reverse`}
			onClick={() => {
				props.handleOpen(Number(props.receiverId));
			}}
		>
			<img
				src={user.avatar}
				alt=""
				className="w-[60px] h-[60px] rounded-full cursor-pointer"
				onMouseEnter={() => setIsHover(true)}
				onMouseLeave={() => setIsHover(false)}
			/>
			{isHover && (
				<div
					className="ml-4 bg-white p-2 rounded-lg z-50 relative right-full"
					onMouseEnter={() => setIsHover(true)}
					onMouseLeave={() => setIsHover(false)}
				>
					<h3 className="text-xl font-bold">{user.username}</h3>
					<p>{image ? "Sent an imag" : `${isSender && "You: "} ${message}`} </p>
				</div>
			)}
		</div>
	);
};

const BubbleSidebar = () => {
	const { addChats, chatOpened, setChatOpened, setIsOpenNewMessageBox } = useContext(ChatContext);
	const chats = [
		{
			id: 1,
			createdAt: new Date(Date.now()),
			image: "https://minhtuanmobile.com/uploads/blog/tai-sao-gojo-van-chua-chet-phan-tich-chap-236-jujutsu-kaisen-230922023358.jpg",
			message: "Nah, I'd win",
			senderId: 2,
			receiverId: 1,
		},
		{
			id: 2,
			createdAt: new Date(Date.now()),
			image: "https://minhtuanmobile.com/uploads/blog/tai-sao-gojo-van-chua-chet-phan-tich-chap-236-jujutsu-kaisen-230922023358.jpg",
			message: "Nah, I'd win",
			senderId: 1,
			receiverId: 2,
		},
	];
	const handleOpen = (id: number) => {
		// remove this item
		setChatOpened(chatOpened.filter((item) => item !== id));
		// add to chat model
		addChats(id);
	};
	return (
		<div className="fixed right-0 bottom-0 m-6 flex flex-col-reverse max-h-screen h-fit overflow-y-auto ">
			<div
				className="rounded-full bg-white p-2 cursor-pointer hover:bg-gray-200 w-[60px] h-[60px] flex items-center justify-center self-end"
				title="New message "
			>
				<Edit2
					size="24"
					onClick={() => setIsOpenNewMessageBox(true)}
				/>
			</div>
			{removeDuplicate(chatOpened).map((item) => (
				<ChatRender
					key={item}
					{...chats[item - 1]}
					handleOpen={handleOpen}
				/>
			))}
		</div>
	);
};

export default BubbleSidebar;
