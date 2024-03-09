export type Post = {
	id: string | number;
	title?: string;
	content: string;
	images?: string[]; // Image URLs for the post.
	music?: string;
	createdAt: Date;
	updatedAt?: Date;
	authorId: string | number;
};
