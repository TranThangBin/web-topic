import { Link, useNavigate } from "react-router";
import Gophers2 from "../../assets/gophers2.jpg";
import { API_URL } from "../../utils";

export function RegisterPage() {
	const navigate = useNavigate();
	return (
		<div className="grid min-h-screen place-items-center">
			<div className="grid min-h-4/5 min-w-4/5 grid-cols-[1fr_auto] flex-col justify-between overflow-hidden rounded-xl bg-white shadow shadow-black">
				<div className="flex flex-col items-end justify-center text-lg">
					<form
						onSubmit={async (e) => {
							e.preventDefault();
							const formData = new FormData(e.currentTarget);
							const formObject = Object.fromEntries(formData);
							const res = await fetch(`${API_URL}/register`, {
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
							alert("create account successfully");
							navigate("/login");
						}}
						className="mx-8 flex w-lg flex-col items-center gap-4"
					>
						<h1 className="text-5xl font-bold">Register</h1>
						<label className="w-full">
							<div>
								Username <span className="text-red-500">*</span>
							</div>
							<input
								type="text"
								name="username"
								id="username"
								required
								className="w-full rounded-sm border-2 border-transparent bg-gray-200 px-3 py-2 outline-0 hover:border-black focus-visible:border-black"
							/>
						</label>

						<label className="w-full">
							<div>
								Password <span className="text-red-500">*</span>
							</div>
							<input
								type="password"
								name="password"
								id="password"
								required
								className="w-full rounded-sm border-2 border-transparent bg-gray-200 px-3 py-2 outline-0 hover:border-black focus-visible:border-black"
							/>
						</label>

						<label className="w-full">
							<div>
								Confirm password{" "}
								<span className="text-red-500">*</span>
							</div>
							<input
								type="password"
								name="confirmPassword"
								id="confirmPassword"
								required
								className="w-full rounded-sm border-2 border-transparent bg-gray-200 px-3 py-2 outline-0 hover:border-black focus-visible:border-black"
							/>
						</label>

						<label className="w-full">
							<div>
								Gender <span className="text-red-500">*</span>
							</div>
							<select
								name="gender"
								id="gender"
								required
								className="w-full rounded-sm border-2 border-transparent bg-gray-200 px-3 py-2 outline-0 hover:border-black focus-visible:border-black"
							>
								<option></option>
								<option value="male">Male</option>
								<option value="female">Female</option>
							</select>
						</label>

						<label className="w-full">
							<div>Display name</div>
							<input
								type="text"
								name="displayName"
								id="displayName"
								className="w-full rounded-sm border-2 border-transparent bg-gray-200 px-3 py-2 outline-0 hover:border-black focus-visible:border-black"
							/>
						</label>

						<label className="w-full">
							<div>Date of birth</div>
							<input
								type="date"
								name="dateOfBirth"
								id="dateOfBirth"
								className="w-full rounded-sm border-2 border-transparent bg-gray-200 px-3 py-2 outline-0 hover:border-black focus-visible:border-black"
							/>
						</label>
						<button
							type="submit"
							className="cursor-pointer rounded-sm border-2 border-transparent bg-green-500 px-3 py-2 text-white outline-0 hover:border-black focus-visible:border-black"
						>
							Register
						</button>
					</form>
					<Link
						to="/login"
						className="mx-8 text-right text-gray-600 hover:text-black"
					>
						Already have an account?
					</Link>
				</div>
				<img className="h-full" src={Gophers2} alt="a funny image" />
			</div>
		</div>
	);
}
