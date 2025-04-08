import { Link, useNavigate } from "react-router";
import Gophers from "../../assets/gophers.jpg";
import { API_URL } from "../../utils";

export function LoginPage() {
	const navigate = useNavigate();
	return (
		<div className="grid min-h-screen place-items-center">
			<div className="grid min-h-4/5 min-w-4/5 grid-cols-[1fr_auto] overflow-hidden rounded-xl bg-white shadow shadow-black">
				<img className="h-full" src={Gophers} alt="a funny image" />
				<div className="flex flex-col items-end justify-center text-lg">
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							const formData = new FormData(e.currentTarget);
							const formObject = Object.fromEntries(formData);
							const res = await fetch(`${API_URL}/login`, {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify(formObject),
							});
							if (!res.ok) {
								res.json()
									.then((err) => {
										alert(err.message);
									})
									.catch(() => {
										alert(
											"something went wrong with the server",
										);
									});
								return;
							}
							res.json()
								.then((user) => {
									localStorage.setItem(
										"user",
										JSON.stringify(user),
									);
									alert("successfully logged in");
									navigate("/dashboard");
								})
								.catch(() => {
									alert("something went wrong");
								});
						}}
						className="mx-8 flex w-lg flex-col items-center gap-4"
					>
						<h1 className="text-5xl font-bold">LOGIN</h1>
						<label className="w-full">
							<div>Username</div>
							<input
								type="text"
								name="username"
								id="username"
								className="w-full rounded-sm border-2 border-transparent bg-gray-200 px-3 py-2 outline-0 hover:border-black focus-visible:border-black"
							/>
						</label>

						<label className="w-full">
							<div>Password</div>
							<input
								type="password"
								name="password"
								id="password"
								className="w-full rounded-sm border-2 border-transparent bg-gray-200 px-3 py-2 outline-0 hover:border-black focus-visible:border-black"
							/>
						</label>

						<button
							type="submit"
							className="cursor-pointer rounded-sm border-2 border-transparent bg-blue-500 px-3 py-2 text-white outline-0 hover:border-black focus-visible:border-black"
						>
							Login
						</button>
					</form>
					<Link
						to="/register"
						className="mx-8 text-right text-gray-600 hover:text-black"
					>
						Don't have an account?
					</Link>
				</div>
			</div>
		</div>
	);
}
