import React, { InputHTMLAttributes } from "react";
import { MusicSquareSearch } from "iconsax-react";
type Props = {
	text: string; // search placeholder
	handlesearch: (text: string) => void; // search handle
} & InputHTMLAttributes<HTMLInputElement>;

const SearchBar = ({ text, ...props }: Props) => {
	return (
		<div className="flex bg-gray-200 items-center px-3 py-1 rounded-lg h-8 ml-2">
			<MusicSquareSearch
				size="24"
				className="text-secondary"
			/>
			<input
				type="text"
				{...props}
				className="border-none outline-none bg-transparent text-3xl placeholder:text-black text-[12px] ml-2 h-8 py-2 "
				placeholder={text}
				onKeyUp={(e) => {
					// handle press enter to search
					if (e.key === "Enter") props.handlesearch(props.value as string);
				}}
			/>
		</div>
	);
};

export default SearchBar;
