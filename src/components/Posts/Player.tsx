import React from "react";

const Player = ({ audio, src }: { audio: HTMLAudioElement; src: string }) => {
	return (
		<div>
			<audio src={src}></audio>
		</div>
	);
};

export default Player;
