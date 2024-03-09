import React, { useContext } from "react";
import { UserContext } from "../../context/user";
import { GiMusicSpell } from "react-icons/gi";
import { FcAddImage } from "react-icons/fc";
import { Post } from "../../types/post";
import PostItem from "./Post";

const Posts = () => {
	const { user } = useContext(UserContext);
	const posts: Post[] = [
		{
			id: 1,
			content: "Nah, I'd win",
			createdAt: new Date(Date.now()),
			authorId: 1,
			title: "Hồng lâu mộng - MC ILL",
			images: ["https://i.kym-cdn.com/photos/images/newsfeed/002/697/316/d31"],
		},
		{
			id: 2,
			content: `Đây là một trong những album bị underated nhất năm 2024. Nói là bị underated cũng không hẳn vì tại thời điểm album này ra mắt, bất kỳ ai nghe đều đánh giá cao nó. Chỉ là đó là một album không hợp thời nên bị ít view so với các bài nhạc. Album truyền tải về quá trình trưởng thành của một người với mỗi bài tương ứng với một giai đoạn với giai đoạn đầu tiên chúng ta có thể làm mọi thứ như trong bài Eazy Peazy cho tới giai đoạn chúng ta đạt tới "Điểm tuyệt dối". Theo như đánh giá của mình thì bài tuyệt nhất có lẽ là bài 7 năm được ICD hoàn thiện nhân dịp 7 năm làm nhạc `,
			createdAt: new Date(Date.now()),
			authorId: 1,
			title: "Điểm tuyệt đối - ICD",
			images: ["https://i.kym-cdn.com/photos/images/newsfeed/002/697/316/d31"],
			music: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
		},
	];
	return (
		<div className="flex-1 m-4 h-screen overflow-y-auto">
			{/* New post */}
			<div className="bg-white p-4 rounded-lg">
				<h2 className="text-2xl font-bold">New Post</h2>
				<p className="text-gray-500">Create a new post</p>
				<div className="flex justify-between items-center  mt-2">
					<img
						src={user.avatar}
						alt="avatar"
						className="w-[60px] h-[60px] rounded-full cursor-pointer"
					/>
					<textarea
						name="message"
						className="w-full resize-none outline-none bg-gray-50 hover:bg-gray-200 cursor-pointer rounded-xl p-2 ml-2"
						placeholder="What's you want to share?"
					></textarea>
				</div>
				<div className="flex justify-between items-center py-3">
					<div className="flex items-center ">
						<GiMusicSpell
							size={40}
							className="text-secondary cursor-pointer hover:bg-primary p-2 rounded-full mr-4"
						/>
						<FcAddImage
							size={40}
							className="text-secondary hover:bg-primary p-2 rounded-full cursor-pointer"
						/>
					</div>
					<button className="bg-primary-gradient-reverse text-white px-4 py-2 rounded-lg mt-4 hover:opacity-50">Post</button>
				</div>
			</div>
			{/* Posts */}
			<div className="bg-white p-4 rounded-lg mt-4">
				<h2 className="text-2xl font-bold">Posts</h2>
				{posts.map((post) => (
					<PostItem
						author={user}
						{...post}
						key={post.id}
					/>
				))}
			</div>
			{/* comments and likes */}
		</div>
	);
};

export default Posts;
