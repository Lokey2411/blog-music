import React, { useContext, useState } from "react";
import { Chat } from "../../types/chat";
import { User } from "../../types/user";
import { ChatContext } from "../../context/view/chat";
import moment from "moment";
import { AiOutlineClose, AiOutlineMinus } from "react-icons/ai";
import { UserContext } from "../../context/user";
import { GiMusicSpell } from "react-icons/gi";
import { FcAddImage } from "react-icons/fc";

type Props = {
	user: User;
	setChatOpened: (chat: any) => void;
	chatOpened: number[];
};

const MessageBubble = ({ image, message, senderId, ...props }: Chat) => {
	const { user } = useContext(UserContext);
	const isSender = `${user.id}` === `${senderId}`;
	return (
		<div
			title={moment(props.createdAt).format("DD/MM/YYYY HH:mm")}
			className={`mb-1 ${isSender && "flex-row-reverse"} flex`}
		>
			<div className="flex w-fit items-center cursor-pointer  rounded-lg p-2 select-none">
				<div className="ml-4">
					{image && (
						<img
							src={image}
							alt=""
							className="w-[60px] h-[60px] rounded-lg object-cover cursor-pointer self-end"
							onClick={() => window.open(image)}
						/>
					)}
					<div className={`text-sm text-left mt-1 ${isSender ? "bg-primary-gradient" : "bg-gray-300"} p-1 rounded-lg`}>{message}</div>
				</div>
			</div>
		</div>
	);
};

const ChatItem = (props: Props) => {
	const { removeChats } = useContext(ChatContext);
	const { user } = useContext(UserContext);
	const [openChatItems, setOpenChatItems] = useState<any>({});
	const [message, setMessage] = useState("");
	const [userChats, setUserChats] = useState<Chat[]>([
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
	]);
	const removeHandle = (type: string) => {
		const chatRemoved = userChats.find((chat) => chat.senderId.toString() === user.id.toString() && chat.receiverId.toString() === props.user.id.toString());

		console.log(userChats);
		if (chatRemoved) {
			removeChats(Number(chatRemoved.receiverId));
			// setIsOpen(false);
			setOpenChatItems((prevState: any) => ({ ...prevState, [props.user.id]: false }));
			if (type === "minimize") {
				// close the chat and put it to sidebar
				props.setChatOpened([...props.chatOpened, props.user.id]);
			} else {
				// close this chat and remove it
				props.setChatOpened(props.chatOpened.filter((chat) => chat !== props.user.id));
			}
			return;
		}
		alert("You don't have chat with this user");
	};

	const handleSend = () => {
		// check if message is "send" or empty string
		if (!message) return;
		//send message
		setUserChats([
			...userChats,
			{
				id: userChats.length + 1,
				createdAt: new Date(Date.now()),
				message: message.trim(),
				senderId: user.id,
				receiverId: props.user.id,
			},
		]);
		setMessage(""); //reset message
		// scroll chat to bottom
		let element = document.getElementById(`chat-items-${props.user.id}`) as HTMLDivElement;
		setTimeout(() => {
			element.scrollTop = element.scrollHeight;
		}, 10);
	};
	return (
		<div className={`flex-1 bg-white rounded-t-lg ${openChatItems[props.user.id] && "hidden"} mx-2 h-fit self-end max-h-[400px] z-0`}>
			{/* header */}
			<div className="flex items-center cursor-pointer rounded-lg p-2 select-none shadow-md mb-1">
				<div className="flex items-center w-full">
					<img
						src={props.user.avatar}
						alt=""
						className="w-[60px] h-[60px] rounded-full"
					/>
					<div className="ml-4">
						<h3 className="text-xl font-bold">{props.user.username}</h3>
					</div>
				</div>
				<div className="flex">
					<AiOutlineMinus
						className="ml-4 hover:bg-gray-100 p-1 rounded-full"
						onClick={() => {
							removeHandle("minimize");
						}}
						size={24}
					/>
					<AiOutlineClose
						size={24}
						onClick={() => {
							removeHandle("remove");
						}}
					/>
				</div>
			</div>
			{/* userChats */}
			<div
				className="h-fit overflow-y-auto max-h-[240px] self-end "
				id={`chat-items-${props.user.id}`}
			>
				{userChats.map((chat) => (
					<MessageBubble
						{...chat}
						key={chat.id}
					/>
				))}
			</div>
			{/* input new message */}
			<div className="flex items-center rounded-lg mb-2 mx-2">
				{/* control */}
				<div className="flex items-center">
					<div className="flex items-center ">
						<GiMusicSpell
							size={24}
							className="text-secondary cursor-pointer hover:opacity-50 mr-4"
						/>
						<FcAddImage
							size={24}
							className="text-secondary hover:opacity-50 cursor-pointer"
						/>
					</div>
					{/* text area */}
					<textarea
						name="message"
						className="resize-none p-2 flex-1 rounded-3xl ml-1 bg-gray-300 h-[40px] outline-none overflow-hidden w-[150px] "
						placeholder="Enter your message"
						value={message}
						onChange={(e) => {
							setMessage(e.target.value);
						}}
						onKeyUp={(e) => {
							if (e.key === "Enter") handleSend();
						}}
					></textarea>
					{/* send button */}
					<button
						className="bg-primary-gradient-reverse hover:opacity-50 text-white font-bold py-2 px-4 rounded-xl ml-2"
						onClick={handleSend}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default ChatItem;
