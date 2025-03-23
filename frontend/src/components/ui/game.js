import { NavLink } from "react-router";
import { API_URL } from "../../lib/utils";

export function GameSidebar() {
	return (
		<aside className="w-fit text-xl font-semibold text-white">
			<ul>
				<li>
					<NavLink
						className="inline-block w-full px-3 py-2 text-center transition-colors hover:bg-gray-800
							[&.active]:bg-gray-900"
						to="/game"
						end
					>
						List
					</NavLink>
				</li>
				<li>
					<NavLink
						className="inline-block w-full px-3 py-2 text-center transition-colors hover:bg-gray-800
							[&.active]:bg-gray-900"
						to="/game/creator"
						end
					>
						Creator
					</NavLink>
				</li>
			</ul>
		</aside>
	);
}

export function GameCard({
	id,
	name,
	description,
	thumbnail,
	releaseDate,
	deleteAction,
	thumbnailUrl,
}) {
	return (
		<div className="text-white bg-gray-700 rounded-md grid grid-rows-[auto_1fr_auto] h-full">
			<div className="flex justify-between items-center bg-black font-bold pl-4 rounded-t-md h-10">
				#{id || "Unknown"}
				{deleteAction !== undefined ? (
					<button
						onClick={() => deleteAction(id)}
						className="h-full aspect-square px-2 bg-red-500 cursor-pointer fill-white rounded-tr-md"
					>
						<XMarkIcon />
					</button>
				) : (
					<></>
				)}
			</div>
			<div className="p-4 flex flex-col gap-2 relative">
				<div className="aspect-square overflow-hidden grid place-items-center bg-black rounded-md">
					{thumbnailUrl || thumbnail ? (
						<img
							className="rounded-md"
							src={
								thumbnailUrl || `${API_URL}/images/${thumbnail}`
							}
							alt={`thumbnail of ${name}`}
						/>
					) : (
						<></>
					)}
				</div>
				<div className="font-semibold text-xl">{name}</div>
				<div className="text-gray-200 italic">{description}</div>
			</div>
			<div className="py-4 bg-black font-bold text-center rounded-b-md">
				{new Date(releaseDate).toLocaleString("vi-VN", {
					day: "2-digit",
					month: "2-digit",
					year: "numeric",
				})}
			</div>
		</div>
	);
}

/**
 * @param {import("react").InputHTMLAttributes} props
 */
export function Input(props) {
	return (
		<input
			className="bg-gray-200 disabled:bg-gray-300 text-black min-w-full p-2 font-normal border"
			{...props}
		/>
	);
}

function XMarkIcon() {
	return (
		<svg viewBox="0 0 16 16" version="1.1">
			<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
			<g
				id="SVGRepo_tracerCarrier"
				strokeLinecap="round"
				strokeLinejoin="round"
			></g>
			<g id="SVGRepo_iconCarrier">
				<rect width="16" height="16" id="icon-bound" fill="none"></rect>
				<polygon points="14.707,2.707 13.293,1.293 8,6.586 2.707,1.293 1.293,2.707 6.586,8 1.293,13.293 2.707,14.707 8,9.414 13.293,14.707 14.707,13.293 9.414,8"></polygon>
			</g>
		</svg>
	);
}
