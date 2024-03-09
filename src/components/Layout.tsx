import React, { useContext } from "react";
import Navbar from "./Navbar/Navbar";
import Drawer from "./Navbar/Drawer";
import Sidebar from "./Sidebar/Sidebar";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import BubbleSidebar from "./BubbleSidebar";
import ChatModel from "./ChatModel";
import NewMessageModel from "./ChatModel/NewMessageModel";
import { ChatContext } from "../context/view/chat";

const Layout = ({ active, children }: { active: string; children: React.ReactElement }) => {
	const { isOpenNewMessageBox, setIsOpenNewMessageBox } = useContext(ChatContext);
	return (
		<div className="bg-primary-gradient min-h-screen h-fit w-full overflow-hidden">
			<Navbar active={active} />
			<Drawer active={active} />
			{/* container */}
			<div className="flex w-screen mt-[60px] justify-between">
				<Sidebar />
				{/* content */}
				{children}
				<ChatSidebar />
				<BubbleSidebar />
				<ChatModel />
				<NewMessageModel
					onSubmit={(messageText: string) => {}}
					show={isOpenNewMessageBox}
					handleClose={() => {
						setIsOpenNewMessageBox(false);
					}}
				/>
			</div>
		</div>
	);
};

export default Layout;
