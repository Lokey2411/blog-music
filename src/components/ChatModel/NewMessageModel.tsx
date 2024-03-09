import React from "react";
import { FcAddImage } from "react-icons/fc";
import { GiMusicSpell } from "react-icons/gi";

type Props = {
	show: boolean;
	handleClose: () => void;
	onSubmit: (messageText: string) => void;
};

const NewMessageModel = ({ show, handleClose, onSubmit }: Props) => {
	const [messageText, setMessageText] = React.useState("");
	return (
		<div className={`fixed top-0 bottom-0 left-0 right-0 bg-[rgba(0,0,0,0.5)] z-10 ${show ? "block" : "hidden"}`}>
			{/* new message box */}
			<div className="absolute top-1/4 bottom-1/4 left-1/4 right-1/4 bg-white p-2 flex flex-col justify-between">
				{/* close button */}
				<div className="flex justify-end absolute right-0 top-0">
					<button
						className="p-1 rounded-full hover:bg-red-600 cursor-pointer w-8 h-8 flex items-center justify-center m-1"
						onClick={handleClose}
					>
						X
					</button>
				</div>
				<div className="">
					<h1 className="font-bold text-lg">New Message</h1>
					{/* find user */}
					<div className="border-b flex items-center p-2 ">
						New Message to:
						<input
							className="outline-none flex-1 ml-1"
							autoFocus
						/>
					</div>
				</div>
				{/* message */}
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
						value={messageText}
						onChange={(e) => {
							setMessageText(e.target.value);
						}}
						onKeyUp={(e) => {
							if (e.key === "Enter") onSubmit(messageText);
						}}
					></textarea>
					{/* send button */}
					<button
						className="bg-primary-gradient-reverse hover:opacity-50 text-white font-bold py-2 px-4 rounded-xl ml-2"
						onClick={() => onSubmit(messageText)}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default NewMessageModel;
