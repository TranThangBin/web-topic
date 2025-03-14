import { GameCard } from "../ui/game-card";
import { games } from "../../games";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import Pagination from "react-bootstrap/Pagination";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const categoryMap = new Map([
	["Action", "ACT"],
	["RPG", "RPG"],
	["Simulation", "SIM"],
	["Adventure", "ADV"],
	["Battle Royale", "BR"],
	["Platformer", "PLAT"],
	["First-Person Shooter", "FPS"],
	["MOBA", "MOBA"],
	["Sport", "SPORT"],
	["Horror", "HOR"],
]);

function GamePage({ itemPerPage }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentPage = parseInt(searchParams.get("page")) || 1;
	const category = searchParams.get("category") || "";

	const [modalState, setModalState] = useState({
		deleteId: 0,
		show: false,
	});

	const [gameDB, setGameDB] = useState(games);
	const [gameList, setGameList] = useState([]);
	const [pageGames, setPageGames] = useState([]);

	const [pageCount, setPageCount] = useState(0);

	useEffect(() => {
		setGameList(gameDB.filter(({ id }) => id.startsWith(category)));
	}, [category, gameDB]);

	useEffect(() => {
		const itemStart = (currentPage - 1) * itemPerPage;
		const itemEnd = itemStart + itemPerPage;
		setPageCount(Math.ceil(gameList.length / itemPerPage));
		setPageGames(gameList.slice(itemStart, itemEnd));
	}, [gameList, currentPage, itemPerPage]);

	return (
		<>
			<ConfirmDeleteModal
				show={modalState.show}
				handleClose={() => {
					setModalState({
						deleteId: 0,
						show: false,
					});
				}}
				handleDelete={() => {
					setGameDB(
						gameDB.filter(({ id }) => id !== modalState.deleteId),
					);
				}}
			/>
			<div className="tw:my-4 tw:grid tw:gap-y-4">
				<div className="tw:px-8">
					<label className="tw:text-lg">
						Category:{" "}
						<Form.Select
							size="lg"
							value={category}
							onChange={(e) => {
								setSearchParams({
									page: 1,
									category: e.currentTarget.value,
								});
							}}
						>
							<option value="">Filter by category</option>
							{Array.from(categoryMap.entries()).map(
								([key, value]) => (
									<option key={value} value={value}>
										{key}
									</option>
								),
							)}
						</Form.Select>
					</label>
				</div>
				<ul className="tw:grid tw:grid-cols-[repeat(auto-fill,minmax(25rem,1fr))] tw:gap-4 tw:pr-8">
					{pageGames.map((game) => (
						<GameCard
							key={game.id}
							{...game}
							as="li"
							handleDelete={() => {
								setModalState({
									deleteId: game.id,
									show: true,
								});
							}}
						/>
					))}
				</ul>
				<div className="tw:flex tw:justify-end tw:px-8">
					<Pagination>
						<Pagination.First
							onClick={() => {
								setSearchParams({ category, page: 1 });
							}}
						/>
						<Pagination.Prev
							onClick={() => {
								setSearchParams({
									category,
									page: currentPage - 1,
								});
							}}
							disabled={currentPage === 1}
						/>
						{Array.from({ length: pageCount }).map((_, idx) => {
							const page = idx + 1;
							return (
								<Pagination.Item
									key={page}
									onClick={() => {
										setSearchParams({
											category,
											page: page,
										});
									}}
									active={currentPage === page}
								>
									{page}
								</Pagination.Item>
							);
						})}
						<Pagination.Next
							onClick={() => {
								setSearchParams({
									category,
									page: currentPage + 1,
								});
							}}
							disabled={currentPage === pageCount}
						/>
						<Pagination.Last
							onClick={() => {
								setSearchParams({
									category,
									page: pageCount,
								});
							}}
						/>
					</Pagination>
				</div>
			</div>
		</>
	);
}

function ConfirmDeleteModal({ show, handleDelete, handleClose }) {
	return (
		<Modal show={show} onHide={handleClose}>
			<Modal.Header closeButton>
				<Modal.Title>Confirm</Modal.Title>
			</Modal.Header>
			<Modal.Body>Are you sure you want to delete this game?</Modal.Body>
			<Modal.Footer>
				<Button variant="secondary" onClick={handleClose}>
					Cancel
				</Button>
				<Button
					variant="danger"
					onClick={() => {
						handleDelete();
						handleClose();
					}}
				>
					Delete
				</Button>
			</Modal.Footer>
		</Modal>
	);
}

export default GamePage;
