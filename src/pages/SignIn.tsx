import { useId, useState } from "react";

import { useDispatch } from "react-redux";
import {
	DefaultButton,
	PrimaryButton,
} from "../components/muumwind/atoms/buttons";
import { signIn } from "../redux/slices/userSlice";

import "./signin.css";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const [emailId, passwordId] = useId();

	const signin = (e: any) => {
		e.preventDefault();
		dispatch(signIn({ password, email }));
	};

	return (
		<section className="flex flex-col md:flex-row h-screen items-center">
			<div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
				<img
					src="https://source.unsplash.com/random"
					alt=""
					className="w-full h-full object-cover"
				/>
			</div>

			<div
				className="bg-white w-full md:max-w-md lg:max-w-full  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center"
			>
				<div className="w-full h-100">
					<h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">
						Log in to Your Muum Account
					</h1>

					<form className="mt-6" onSubmit={signin} name="signin_form">
						<div>
							<label className="block text-gray-700">
								E-Mail
							</label>
							<input
								type="email"
								name="email"
								id={emailId}
								placeholder="Enter your email"
								className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
								autoFocus
								required
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</div>

						<div className="mt-4">
							<label className="block text-gray-700">
								Password
							</label>
							<input
								type="password"
								name=""
								id={passwordId}
								placeholder="Enter Password"
								minLength={6}
								className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none"
								required
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<div className="text-right mt-2">
							<a
								href="/"
								className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700"
							>
								Forgot Password?
							</a>
						</div>

						<PrimaryButton>
							<span>Log in</span>
						</PrimaryButton>

						<DefaultButton>
							<svg className="w-4" viewBox="0 0 533.5 544.3">
								<path
									d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z"
									fill="#4285f4"
								/>
								<path
									d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z"
									fill="#34a853"
								/>
								<path
									d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z"
									fill="#fbbc04"
								/>
								<path
									d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z"
									fill="#ea4335"
								/>
							</svg>

							<span>Log in with Google</span>
						</DefaultButton>
					</form>

					<p className="mt-8">
						Need an account?{" "}
						<a
							href="/"
							className="text-blue-500 hover:text-blue-700 font-semibold"
						>
							Create an account
						</a>
					</p>
				</div>
			</div>
		</section>
	);
}

export default SignIn;
