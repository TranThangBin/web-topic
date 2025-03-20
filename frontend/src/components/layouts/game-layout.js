import { Outlet } from "react-router";
import { GameSidebar } from "../ui/game";

export function GameLayout() {
	return (
		<div className="grid grid-cols-[auto_1fr]">
			<div className="min-h-[calc(100vh-6.25rem)] border-4 border-t-0 border-gray-900 bg-gray-700">
				<GameSidebar />
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	);
}
