import { HashRouter, Route, Routes } from "react-router";
import { LoginPage } from "./components/pages/login-page";
import { RegisterPage } from "./components/pages/register-page";
import { BackgroundLayout } from "./components/layouts/background-layout";
import { DashboardPage } from "./components/pages/dashboard-page";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route element={<BackgroundLayout />}>
					<Route index element={<LoginPage />} />
					<Route path="login" element={<LoginPage />} />
					<Route path="register" element={<RegisterPage />} />
					<Route path="dashboard" element={<DashboardPage />} />
				</Route>
			</Routes>
		</HashRouter>
	);
}

export default App;
