import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Ranking from "./pages/Ranking";
import Admin from "./pages/Admin";

function App() {
	return (
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/music"
				element={<Music />}
			/>
			<Route
				path="/music/:musicId"
				element={<Music />}
			/>
			<Route
				path="/ranking"
				element={<Ranking />}
			/>
			<Route
				path="/admin"
				element={<Admin />}
			/>
		</Routes>
	);
}

export default App;
