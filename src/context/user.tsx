import { PropsWithChildren, createContext, useState } from "react";
import { User } from "../types/user";

type UserContextType = {
	user: User;
	setUser: (user: User) => void;
};

export const UserContext = createContext<UserContextType>({
	user: { avatar: "", username: "", email: "", id: "" },
	setUser: (user: any) => {},
});

const UserContextProvider = ({ children }: PropsWithChildren) => {
	const [user, setUser] = useState<User>({
		avatar: "https://minhtuanmobile.com/uploads/blog/tai-sao-gojo-van-chua-chet-phan-tich-chap-236-jujutsu-kaisen-230922023358.jpg",
		username: "Lokey",
		email: "lokey@me.com",
		id: "1",
	});
	return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
