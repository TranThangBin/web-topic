import { Outlet } from "react-router";
import { Navbar } from "../ui/navbar";

export function MainLayout() {
	return (
		<div className="bg-gray-100">
			<div className="border-4 border-gray-900 bg-gray-700">
				<Navbar />
			</div>
			<main>
				<Outlet />
			</main>
		</div>
	);
}
