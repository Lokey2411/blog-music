import React, { useState } from "react";
import { Post } from "../../types/post";
import { User } from "../../types/user";
import moment from "moment";
import { FaRegComments } from "react-icons/fa";
import Comments from "./Comments";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type Props = {
	author: User;
} & Post;

const PostItem = (props: Props) => {
	const [commentOpen, setCommentOpen] = useState(false);
	const [isFavorite, setIsFavorite] = useState(false);
	const [isDelete, setIsDelete] = useState(false);
	const handleLike = () => {
		setIsFavorite(!isFavorite);
	};
	const handleDelete = () => {
		setIsDelete(true);
	};
	return (
		<div className={`bg-tertiary-gradient m-4 p-2 rounded-lg ${isDelete && "hidden"}`}>
			{/* post control */}
			<div className="flex items-center justify-between">
				{/* post info */}
				<div className="flex items-center">
					<img
						src={props.author.avatar}
						alt=""
						className="w-[60px] h-[60px] rounded-full"
					/>
					<div className="ml-4">
						<h3 className="text-xl font-bold">{props.author.username}</h3>
						<p>{moment(props.createdAt).fromNow()}</p>
					</div>
				</div>
				{/* controller */}
				<div
					className="m-2 w-8 h-8 text-center text-xl font-bold text-gray-500 rounded-full hover:bg-gray-200 cursor-pointer"
					onClick={handleDelete}
				>
					x
				</div>
			</div>
			{/* post content */}
			{props.title && <h1 className="text-3xl font-bold">{props.title}</h1>}
			<p>{props.content}</p>
			{props.images &&
				props.images.map((image) => (
					<img
						src={image}
						alt=""
						className="w-full mt-4 shadow-md"
					/>
				))}
			{props.music && (
				<audio
					src={props.music as string}
					controls
					className="w-full mt-4"
				></audio>
			)}
			{/* Comments and likes */}
			<div
				className="flex items-center w-full mt-2"
				onClick={handleLike}
			>
				{/* likes */}
				<div className="flex items-center cursor-pointer hover:bg-gray-200 p-2 rounded select-none justify-center flex-1">
					{isFavorite ? <FaHeart style={{ color: "red" }} /> : <FaRegHeart style={{ color: "red" }} />}
					{12 + Number(isFavorite)} Likes
				</div>
				{/* comments */}
				<div
					className="cursor-pointer hover:bg-gray-200 p-2 rounded ml-4 select-none justify-center flex-1"
					onClick={() => setCommentOpen(!commentOpen)}
				>
					<div className="flex items-center justify-center">
						<FaRegComments />
						<p>12 comments</p>
					</div>
				</div>
			</div>
			{commentOpen && <Comments postId={props.id} />}
		</div>
	);
};

export default PostItem;
