import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import { GameCard, Input } from "../ui/game";

export function GameList() {
	const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";

	const [games, setGames] = useState([]);

	useEffect(() => {
		(async () => {
			const res = await fetch(`${apiUrl}/game/query`);
			const gameList = await res.json();
			setGames(gameList);
		})();
	}, []);

	return (
		<div>
			<ul
				className="grid max-h-[calc(100vh-6.25rem)] overflow-auto
					grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] p-4 gap-4"
			>
				{games.map((game) => (
					<li className="relative" key={game.id}>
						<Link
							className="absolute top-[2.5rem] w-full h-[calc(100%-2.5rem-3.5rem)] text-transparent z-10"
							to={`/game/${game.id}`}
						>
							{game.name}
						</Link>
						<GameCard {...game} deleteEnabled />
					</li>
				))}
			</ul>
		</div>
	);
}

export function GameCreator() {
	return <></>;
}

export function GameDetail() {
	const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080";
	const { id } = useParams();
	const [game, setGame] = useState({});

	useEffect(() => {
		(async () => {
			const requestUrl = new URL(`${apiUrl}/game/query`);
			requestUrl.searchParams.append("id", id);
			const res = await fetch(requestUrl);
			const game = await res.json();
			if (game.length === 1) {
				setGame({
					...game[0],
					releaseDate: new Date(game[0].releaseDate).toLocaleString(
						"en-CA",
						{
							day: "2-digit",
							month: "2-digit",
							year: "numeric",
						},
					),
				});
			}
		})();
	}, []);

	return (
		<div className="bg-gray-700 min-h-screen flex justify-evenly items-center">
			<form className="text-white min-w-96 font-semibold grid gap-4">
				<h1 className="text-5xl text-center font-bold">Update game</h1>
				<label>
					ID: <br />
					<Input
						type="text"
						name="id"
						id="id"
						disabled
						value={game.id}
					/>
				</label>
				<label>
					Name: <br />
					<Input
						type="text"
						name="name"
						id="name"
						value={game.name}
						onChange={(e) => {
							setGame({ ...game, name: e.currentTarget.value });
						}}
					/>
				</label>
				<label>
					Description: <br />
					<Input
						type="text"
						name="description"
						id="description"
						value={game.description}
						onChange={(e) => {
							setGame({
								...game,
								description: e.currentTarget.value,
							});
						}}
					/>
				</label>
				<label>
					Release date: <br />
					<Input
						type="date"
						name="releaseDate"
						id="releaseDate"
						value={game.releaseDate}
						onChange={(e) => {
							setGame({
								...game,
								releaseDate: e.currentTarget.value,
							});
						}}
					/>
				</label>
				<label>
					Thumbnail: <br />
					<Input type="file" name="thumbnail" id="thumbnail" />
				</label>
			</form>
			<div className="max-w-[25rem]">
				<GameCard {...game} />
			</div>
		</div>
	);
}
