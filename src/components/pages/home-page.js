import splash from "../../assets/splash.jpg";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router";

function HomePage() {
	const navigate = useNavigate();

	return (
		<div className="tw:grid tw:*:row-start-1 tw:*:-row-end-1 tw:*:col-start-1 tw:*:-col-end-1 tw:place-items-center tw:h-[calc(100vh-8rem)]">
			<img className="tw:h-full" src={splash} alt="store splash art" />
			<div className="tw:bg-white tw:p-4 tw:grid tw:rounded-sm">
				<h1>Welcome to the React game store</h1>
				<Button
					onClick={() => navigate("/game/all")}
					variant="primary"
					href="#"
				>
					Go the game store
				</Button>
			</div>
		</div>
	);
}

export default HomePage;
