import { useState } from "react";
import "./signin.css";
import { useDispatch } from "react-redux";
import { signIn } from "../redux/slices/userSlice";

function SignIn() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const dispatch = useDispatch();

	const signin = (e) => {
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
								id=""
								placeholder="Enter your email"
								className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
								autofocus
								autocomplete
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
								id=""
								placeholder="Enter Password"
								minlength="6"
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

						<button
							type="submit"
							className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6"
						>
							Log In
						</button>
					</form>

					<hr className="my-6 border-gray-300 w-full" />

					<button
						type="button"
						className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300"
					>
						<div className="flex items-center justify-center">
            <svg class="w-4" viewBox="0 0 533.5 544.3">
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

							<span className="ml-4">Log in with Google</span>
						</div>
					</button>


					<button
						type="button"
						className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 mt-6 border border-gray-300"
					>
						<div className="flex items-center justify-center">
            <svg class="w-6" viewBox="0 0 32 32">
                    <path
                      fill-rule="evenodd"
                      d="M16 4C9.371 4 4 9.371 4 16c0 5.3 3.438 9.8 8.207 11.387.602.11.82-.258.82-.578 0-.286-.011-1.04-.015-2.04-3.34.723-4.043-1.609-4.043-1.609-.547-1.387-1.332-1.758-1.332-1.758-1.09-.742.082-.726.082-.726 1.203.086 1.836 1.234 1.836 1.234 1.07 1.836 2.808 1.305 3.492 1 .11-.777.422-1.305.762-1.605-2.664-.301-5.465-1.332-5.465-5.93 0-1.313.469-2.383 1.234-3.223-.121-.3-.535-1.523.117-3.175 0 0 1.008-.32 3.301 1.23A11.487 11.487 0 0116 9.805c1.02.004 2.047.136 3.004.402 2.293-1.55 3.297-1.23 3.297-1.23.656 1.652.246 2.875.12 3.175.77.84 1.231 1.91 1.231 3.223 0 4.61-2.804 5.621-5.476 5.922.43.367.812 1.101.812 2.219 0 1.605-.011 2.898-.011 3.293 0 .32.214.695.824.578C24.566 25.797 28 21.3 28 16c0-6.629-5.371-12-12-12z"
                    />
                  </svg>
                   
							<span className="ml-4">Log in with Github</span>
						</div>
					</button>

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
