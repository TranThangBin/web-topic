import { HashRouter, Route, Routes } from "react-router";
import { GameLayout } from "./components/layouts/game-layout";
import { MainLayout } from "./components/layouts/main-layout";
import {
	GameCreator,
	GameDetail,
	GameList,
} from "./components/pages/game-page";
import { HomePage } from "./components/pages/home-page";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path="game" element={<GameLayout />}>
						<Route index element={<GameList />} />
						<Route path="creator" element={<GameCreator />} />
					</Route>
				</Route>
				<Route path="/game/:id" element={<GameDetail />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
