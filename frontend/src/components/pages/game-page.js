import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { API_URL } from "../../lib/utils";
import { GameCard, Input, Select } from "../ui/game";

export function GameList() {
	const [games, setGames] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();

	useEffect(() => {
		(async () => {
			const apiUrl = new URL(`${API_URL}/game/query`);
			apiUrl.searchParams.append("name", searchParams.get("name") || "");
			apiUrl.searchParams.append(
				"releaseDate",
				searchParams.get("releaseDate") || "",
			);
			const res = await fetch(apiUrl);
			const gameList = await res.json();
			setGames(gameList);
		})();
	}, [searchParams]);

	return (
		<div className="overflow-auto">
			<div className="p-4">
				<search>
					<form className="flex justify-evenly items-center">
						<label>
							Release date:
							<Select
								onChange={(e) => {
									searchParams.set(
										"releaseDate",
										e.currentTarget.value,
									);
									setSearchParams(searchParams);
								}}
								name="release-date"
								id="release-date"
								value={searchParams.get("releaseDate") || ""}
							>
								<option value="">Default</option>
								<option value="asc">Ascending</option>
								<option value="desc">Descending</option>
							</Select>
						</label>
						<label>
							Query games by name:
							<Input
								onChange={(e) => {
									searchParams.set(
										"name",
										e.currentTarget.value,
									);
									setSearchParams(searchParams);
								}}
								name="name"
								id="name"
								value={searchParams.get("name") || ""}
							/>
						</label>
					</form>
				</search>
			</div>
			<ul
				className="grid max-h-[calc(100vh-6.25rem)] grid-cols-[repeat(auto-fill,minmax(25rem,1fr))]
					p-4 gap-4"
			>
				{games.map((game) => (
					<li className="relative" key={game.id}>
						<Link
							className="absolute top-[2.5rem] w-full h-[calc(100%-2.5rem-3.5rem)] text-transparent z-10"
							to={`/game/${game.id}`}
						>
							{game.name}
						</Link>
						<GameCard
							{...game}
							deleteAction={async (id) => {
								try {
									const res = await fetch(
										`${API_URL}/game/delete/${id}`,
										{ method: "DELETE" },
									);
									const deletedGame = await res.json();
									setGames(
										games.filter(
											(game) =>
												game.id !== deletedGame.id,
										),
									);
								} catch (err) {
									console.error(err);
								}
							}}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}

export function GameCreator() {
	const [formData, setFormData] = useState({});
	return (
		<div className="flex justify-evenly items-center h-full">
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const form = e.currentTarget;
					try {
						await fetch(`${API_URL}/game/new`, {
							method: "POST",
							body: new FormData(form),
						});
						form.reset();
						setFormData({});
					} catch (err) {
						console.error(err);
					}
				}}
				className="min-w-96 font-semibold grid gap-y-4"
			>
				<h1 className="text-5xl text-center font-bold">Create game</h1>
				<label>
					Name: <br />
					<Input
						type="text"
						name="name"
						id="name"
						value={formData.name || ""}
						onChange={(e) => {
							setFormData({
								...formData,
								name: e.currentTarget.value,
							});
						}}
					/>
				</label>
				<label>
					Description: <br />
					<Input
						type="text"
						name="description"
						id="description"
						value={formData.description || ""}
						onChange={(e) => {
							setFormData({
								...formData,
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
						value={formData.releaseDate || ""}
						onChange={(e) => {
							setFormData({
								...formData,
								releaseDate: e.currentTarget.value,
							});
						}}
					/>
				</label>
				<label>
					Thumbnail: <br />
					<Input
						type="file"
						name="thumbnail"
						id="thumbnail"
						accept="image/png, image/jpeg, image/jpg, image/webp"
						onChange={(e) => {
							const files = e.target.files;
							if (files.length > 0) {
								const reader = new FileReader();
								reader.onload = () => {
									setFormData({
										...formData,
										thumbnailUrl: reader.result,
									});
								};
								reader.readAsDataURL(files[0]);
							}
						}}
					/>
				</label>
				<button
					className="rounded-sm bg-green-500 px-3 py-2 text-lg text-white"
					type="submit"
				>
					Create
				</button>
			</form>
			<div className="w-[25rem]">
				<h2 className="text-4xl text-center font-semibold grid gap-x-2">
					Preview
				</h2>
				<GameCard {...formData} />
			</div>
		</div>
	);
}

export function GameDetail() {
	const { id } = useParams();
	const [game, setGame] = useState({});
	const [currentGame, setCurrentGame] = useState({});
	const [formData, setFormData] = useState({});
	const [viewMode, setViewMode] = useState("");

	useEffect(() => {
		const requestUrl = new URL(`${API_URL}/game/query`);
		requestUrl.searchParams.append("id", id);
		(async () => {
			const res = await fetch(requestUrl);
			const game = await res.json();
			if (game.length === 1) {
				const releaseDate = new Date(
					game[0].releaseDate,
				).toLocaleString("en-CA", {
					day: "2-digit",
					month: "2-digit",
					year: "numeric",
				});
				setCurrentGame({ ...game[0], releaseDate });
			}
		})();
	}, [id]);

	useEffect(() => {
		setFormData({ ...currentGame });
	}, [currentGame]);

	useEffect(() => {
		if (viewMode === "preview") {
			setGame(formData);
		} else {
			setGame(currentGame);
		}
	}, [viewMode, formData, currentGame]);

	return (
		<div className="bg-gray-700 min-h-screen flex justify-evenly items-center">
			<form
				onSubmit={async (e) => {
					e.preventDefault();
					const form = e.currentTarget;
					try {
						const res = await fetch(
							`${API_URL}/game/update/${id}`,
							{
								method: "PATCH",
								body: new FormData(form),
							},
						);
						const data = await res.json();
						setCurrentGame(data);
					} catch (err) {
						console.error(err);
					}
				}}
				className="text-white min-w-96 font-semibold grid gap-y-4"
			>
				<h1 className="text-5xl text-center font-bold">Update game</h1>
				<label>
					ID: <br />
					<Input type="text" disabled value={formData.id || ""} />
				</label>
				<label>
					Name: <br />
					<Input
						type="text"
						name="name"
						id="name"
						value={formData.name || ""}
						onChange={(e) => {
							setFormData({
								...formData,
								name: e.currentTarget.value,
							});
						}}
					/>
				</label>
				<label>
					Description: <br />
					<Input
						type="text"
						name="description"
						id="description"
						value={formData.description || ""}
						onChange={(e) => {
							setFormData({
								...formData,
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
						value={formData.releaseDate || ""}
						onChange={(e) => {
							setFormData({
								...formData,
								releaseDate: e.currentTarget.value,
							});
						}}
					/>
				</label>
				<label>
					Thumbnail: <br />
					<Input
						type="file"
						name="thumbnail"
						id="thumbnail"
						accept="image/png, image/jpeg, image/jpg, image/webp"
						onChange={(e) => {
							const files = e.target.files;
							if (files.length > 0) {
								const reader = new FileReader();
								reader.onload = () => {
									setFormData({
										...formData,
										thumbnailUrl: reader.result,
									});
								};
								reader.readAsDataURL(files[0]);
							}
						}}
					/>
				</label>
				<button
					className="rounded-sm bg-blue-500 px-3 py-2 text-lg text-white"
					type="submit"
				>
					Update
				</button>
			</form>
			<div className="max-w-[25rem]">
				<label className="bg-white px-4 py-2 text-xl font-semibold grid grid-cols-[auto_1fr] gap-x-2">
					View mode:
					<select
						onChange={(e) => {
							setViewMode(e.currentTarget.value);
						}}
						name="view-mode"
						value={viewMode}
					>
						<option value="">Current</option>
						<option value="preview">Preview</option>
					</select>
				</label>
				<GameCard {...game} />
			</div>
		</div>
	);
}
