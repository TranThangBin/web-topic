import { Outlet } from "react-router";

export function BackgroundLayout() {
	return (
		<>
			<div className="fixed -z-10 min-h-screen min-w-screen bg-gray-300 bg-[url(/public/images/stars.png)] opacity-20"></div>
			<Outlet />
		</>
	);
}
