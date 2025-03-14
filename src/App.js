import { BrowserRouter, Routes, Route } from "react-router";
import MainLayout from "./components/layouts/main-layout";
import HomePage from "./components/pages/home-page";
import GamePage from "./components/pages/game-page";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route
						path="/game/all"
						element={<GamePage itemPerPage={8} />}
					/>
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
