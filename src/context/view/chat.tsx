import { PropsWithChildren, createContext, useState } from "react";

type T = number;

type ChatOnScreenContext = {
	chats: T[];
	addChats: (id: T) => void;
	removeChats: (id: T) => void;
	chatOpened: T[];
	setChatOpened: (id: T[]) => void;
	isOpenNewMessageBox: boolean;
	setIsOpenNewMessageBox: (isOpen: boolean) => void;
};

export const ChatContext = createContext<ChatOnScreenContext>({
	chats: [],
	addChats: () => {},
	removeChats: () => {},
	chatOpened: [],
	setChatOpened: () => {},
	isOpenNewMessageBox: false,
	setIsOpenNewMessageBox: () => {},
});

const ChatContextProvider = ({ children }: PropsWithChildren) => {
	const [chats, setChats] = useState<T[]>([1, 2]);
	const [chatOpened, setChatOpened] = useState<T[]>([1, 2]);
	const [isOpenNewMessageBox, setIsOpenNewMessageBox] = useState(false);

	const addChats = (item: T) => {
		let newChat = chats;
		if (chats.length > 2) {
			//limit that chats will be <= 2
			newChat = [chats[1], item];
		}
		if (!chats.includes(item)) {
			newChat = [...chats, item];
		}
		setChats(newChat);
	};
	const removeChats = (item: T) => {
		console.log(chats);

		if (chats.find((chatItem) => chatItem === item)) {
			setChats((prevState) => prevState.filter((chat) => chat !== item));
		}
	};

	return <ChatContext.Provider value={{ chats, addChats, removeChats, chatOpened, setChatOpened, isOpenNewMessageBox, setIsOpenNewMessageBox }}>{children}</ChatContext.Provider>;
};

export default ChatContextProvider;
