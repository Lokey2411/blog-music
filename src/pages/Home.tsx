import React from "react";
import Layout from "../components/Layout";
import Posts from "../components/Posts/Posts";

const Home = () => {
	return (
		<Layout active="Home">
			<Posts />
		</Layout>
	);
};

export default Home;
