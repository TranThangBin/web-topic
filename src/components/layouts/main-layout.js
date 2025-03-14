import logo from "../../assets/logo.svg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container } from "react-bootstrap";
import { Outlet, useNavigate } from "react-router";

function MainLayout() {
	const navigate = useNavigate();

	return (
		<>
			<Navbar variant="dark" bg="dark">
				<Container>
					<Navbar.Brand onClick={() => navigate("/")} href="#">
						<img
							className="tw:w-36"
							src={logo}
							alt="Logo of brand"
						/>
					</Navbar.Brand>
					<Nav
						onSelect={(path) => navigate(path)}
						className="tw:text-xl"
						as="ul"
					>
						<Nav.Item as="li">
							<Nav.Link eventKey="/">Home</Nav.Link>
						</Nav.Item>
						<Nav.Item as="li">
							<Nav.Link eventKey="/game/all">Games</Nav.Link>
						</Nav.Item>
					</Nav>
				</Container>
			</Navbar>
			<main>
				<Outlet />
			</main>
		</>
	);
}

export default MainLayout;
