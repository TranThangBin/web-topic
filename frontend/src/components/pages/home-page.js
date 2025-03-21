import { Link } from "react-router";

export function HomePage() {
	return (
		<div className="flex min-h-[calc(100vh-6.25rem)] flex-col items-center justify-center gap-y-8">
			<h1 className="text-5xl font-bold">Welcome to the game store</h1>
			<Link
				className="rounded-sm bg-blue-500 px-3 py-2 text-lg text-white"
				to="/game"
			>
				See the games
			</Link>
		</div>
	);
}
