import React, { useContext } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosMore } from "react-icons/io";
import { UserContext } from "../../context/user";
import { ChatContext } from "../../context/view/chat";
import { removeDuplicate } from "../../controller";

type CardProps = {
	userId: string | number;
	chatOpened: number[];
	setChatOpened: (chat: number[]) => void;
};

const CardItem = ({ userId, setChatOpened, chatOpened }: CardProps) => {
	const { user } = useContext(UserContext);
	const { addChats } = useContext(ChatContext);
	return (
		<div
			className="flex w-full items-center cursor-pointer hover:bg-gray-100 rounded-lg p-2 select-none"
			onClick={() => {
				addChats(Number(userId));
				setChatOpened([...chatOpened, Number(userId)]);
			}}
		>
			<img
				src={user.avatar}
				alt=""
				className="w-[32px] h-[32px] rounded-full"
			/>
			<div className="ml-4">
				<h3 className="text-lg font-bold">{user.username}</h3>
			</div>
		</div>
	);
};

const ChatSidebar = () => {
	const { chatOpened, setChatOpened } = useContext(ChatContext);
	return (
		<div className="mr-6 p-1  h-screen w-1/5 m-0 md:flex flex-col hidden overflow-y-auto  shadow-[0_0_10px_rgba(0,0,0,0.1)]">
			<div className="overflow-y-auto w-full">
				{/* headers */}
				<div className="flex justify-between items-center ">
					<h1 className="text-gray-500 font-bold">Chat items</h1>
					<div className="flex mr-1">
						<div className="cursor-pointer rounded-full hover:bg-gray-300 p-2">
							<IoSearchOutline />
						</div>
						<div className="cursor-pointer rounded-full hover:bg-gray-300 p-2">
							<IoIosMore />
						</div>
					</div>
				</div>
				{removeDuplicate(chatOpened).map((userId, index) => (
					<CardItem
						chatOpened={chatOpened}
						key={index}
						setChatOpened={setChatOpened}
						userId={userId}
					/>
				))}
			</div>
		</div>
	);
};

export default ChatSidebar;
