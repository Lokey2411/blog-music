import React, { useContext } from "react";
import ChatItem from "./ChatItem";
import { UserContext } from "../../context/user";
import { ChatContext } from "../../context/view/chat";

const ChatModel = () => {
	const { user } = useContext(UserContext);
	const { chats, chatOpened, setChatOpened } = useContext(ChatContext);
	return (
		<div className="fixed bottom-0 flex right-[100px] max-h-[400px] h-fit">
			{chats.map((chat, index) => (
				<ChatItem
					user={{ ...user, id: chat }}
					key={index}
					setChatOpened={setChatOpened}
					chatOpened={chatOpened}
				/>
			))}
		</div>
	);
};

export default ChatModel;
