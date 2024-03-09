export type Chat = {
	id: string | number;
	image?: string;
	message: string;
	createdAt: Date;
	updatedAt?: Date;
	senderId: string | number;
	receiverId: string | number;
};
