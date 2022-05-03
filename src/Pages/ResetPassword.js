import { sendPasswordResetEmail } from "firebase/auth"
import React, { useState } from "react"
import toast from "react-hot-toast"
import { Link, useLocation } from "react-router-dom"
import ReactHelmet from "../Components/ReactHelmet"
import auth from "../firebase.init"

const ResetPassword = () => {
	const location = useLocation()
	const from = location?.state?.from || "/"
	const [email, setEmail] = useState("")
	const handleSubmit = (event) => {
		event.preventDefault()
		sendPasswordResetEmail(auth, email)
			.then(() => {
				toast.success("Password reset email sent successfully")
			})
			.catch((error) => {
				switch (error.code) {
					case "auth/user-not-found":
						toast.error("User not found")
						break
					default:
						toast.error("Something went wrong")
						break
				}
			})
	}
	return (
		<div className="">
			<ReactHelmet>Reset password</ReactHelmet>
			<div className="pt-[12vh] bg-white min-h-screen min-w-screen flex items-center justify-center">
				<div className="xl:px-20 lg:px-10 sm:px-6 px-4 lg:py-12 py-9 lg:w-2/3 xl:1/3">
					<div className="bg-white shadow-lg rounded  w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
						<p
							tabIndex={0}
							className="focus:outline-none text-2xl font-extrabold leading-6 my-4 text-gray-800"
						>
							Login to your account
						</p>

						<form onSubmit={handleSubmit}>
							<div>
								<label
									htmlFor="email"
									className="text-sm font-medium leading-none text-gray-800"
								>
									Email
								</label>
								<input
									onChange={(event) =>
										setEmail(event.target.value)
									}
									id="email"
									name="email"
									type="email"
									className="bg-gray-200 border rounded text-xs font-medium text-gray-800 py-3 w-full pl-3 mt-2"
									required
								/>
							</div>

							<div className="flex flex-col lg:flex-row justify-between">
								<p
									tabIndex={0}
									className="text-xs lg:text-sm mt-4 font-medium leading-none text-gray-500"
								>
									Already have a account ?
									<Link
										state={{ from: from }}
										replace
										to={"/login"}
										className="hover:underline text-xs lg:text-sm ml-4 font-medium leading-none text-blue-700 cursor-pointer"
									>
										Sign in here
									</Link>
								</p>
								<p
									tabIndex={0}
									className="text-xs lg:text-sm mt-4 font-medium leading-none text-gray-500"
								>
									Dont have account?
									<Link
										state={{ from: from }}
										replace
										to={"/register"}
										className="hover:underline text-xs lg:text-sm ml-4 font-medium leading-none text-blue-700 cursor-pointer"
									>
										Sign up here
									</Link>
								</p>
							</div>
							<div className="mt-8">
								<input
									value={"Reset Password"}
									type="submit"
									className="text-sm font-semibold leading-none text-white focus:outline-none border rounded hover:bg-[#ff5722] bg-[#90ba14] py-4 w-full"
								/>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ResetPassword
