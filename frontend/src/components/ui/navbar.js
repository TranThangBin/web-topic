import { NavLink } from "react-router";
import logo from "../../logo.svg";

export function Navbar() {
	return (
		<nav className="flex justify-between px-8 text-xl font-semibold text-white">
			<img className="w-32" src={logo} alt="App logo" />
			<ul className="flex">
				<li>
					<NavLink
						className="inline-block px-4 py-8 transition-colors hover:bg-gray-800
							[&.active]:bg-gray-900"
						to="/"
					>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink
						className="inline-block px-4 py-8 transition-colors hover:bg-gray-800
							[&.active]:bg-gray-900"
						to="/game"
					>
						Game
					</NavLink>
				</li>
			</ul>
		</nav>
	);
}
