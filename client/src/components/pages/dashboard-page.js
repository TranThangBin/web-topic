import { useNavigate } from "react-router";
import GoGopher from "../../assets/Go_Gopher.webp";

export function DashboardPage() {
	const navigate = useNavigate();
	const { displayName, gender, dateOfBirth } = JSON.parse(
		localStorage.getItem("user") || "{}",
	);
	return (
		<div className="grid min-h-screen place-items-center">
			<div className="flex min-h-4/5 min-w-4/5 flex-col items-center justify-center gap-4 rounded-xl bg-white text-lg shadow shadow-black">
				<h1 className="text-5xl font-bold">Dashboard</h1>
				<div className="overflow-hidden rounded-xl border-2 border-black">
					<img
						src={GoGopher}
						alt="placeholder avatar"
						className="min-w-xl"
					/>
				</div>
				<div className="flex flex-col gap-4">
					<div>Name: {displayName || "Guest"}</div>
					<div>Gender: {gender || "unknown"}</div>
					<div>Date of birth: {dateOfBirth || "unknown date"}</div>
				</div>

				<button
					onClick={() => {
						localStorage.removeItem("user");
						navigate("/login");
					}}
					className="cursor-pointer rounded-sm border-2 border-transparent bg-red-500 px-3 py-2 text-white outline-0 hover:border-black focus-visible:border-black"
				>
					Logout
				</button>
			</div>
		</div>
	);
}
