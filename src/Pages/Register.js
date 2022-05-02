import React, { useEffect, useState } from "react"
import SocialLogin from "../Components/SocialLogin"
import { Link } from "react-router-dom"

const Register = () => {
	const [showpass, setShowPass] = useState(false)
	const [errorName, setNameError] = useState("")
	const [errorPassword, setPasswordError] = useState("")
	const [errorConfirmPassword, setConfirmPasswordError] = useState("")
	const [userInfo, setUserInfo] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	})

	useEffect(() => {
		if (userInfo.name.length < 3) {
			setNameError("Your name must be at least 3 characters")
		} else {
			setNameError("")
		}
	}, [userInfo])
	useEffect(() => {
		if (userInfo.password.length < 8) {
			setPasswordError("Your password must be at least 8 characters")
		} else if (
			userInfo.password.includes(userInfo.name) &&
			userInfo.name !== ""
		) {
			setPasswordError("Your cant use your name in your password")
		} else if (
			!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*]).{8,}$/.test(
				userInfo.password
			)
		) {
			setPasswordError("your password is too weak")
		} else {
			setPasswordError("")
		}
	}, [userInfo])
	useEffect(() => {
		if (userInfo.password !== userInfo.confirmPassword) {
			setConfirmPasswordError("Password mismatch")
		} else {
			setConfirmPasswordError("")
		}
	}, [userInfo])
	const handleRegister = (event) => {
		event.preventDefault()
		const name = event.target.name.value
		const email = event.target.email.value
		const password = event.target.password.value
		const confirmPassword = event.target.confirmPassword.value
		console.log(name, email, password, confirmPassword)
	}
	const handleUserInfo = (event) => {
		setUserInfo({
			...userInfo,
			[event.target.name]: event.target.value,
		})
	}
	return (
		<div>
			<div className="">
				<div className="pt-[12vh] bg-indigo-50 min-h-screen min-w-screen flex items-center justify-center">
					<div className="xl:px-20 lg:px-10 sm:px-6 px-4 lg:py-12 py-9 lg:w-1/3 ">
						<div className="bg-white shadow-lg rounded  w-full lg:px-10 sm:px-6 sm:py-10 px-2 py-6">
							<p
								tabIndex={0}
								className="focus:outline-none text-2xl font-extrabold leading-6 text-gray-800"
							>
								Create a new account
							</p>
							<p
								tabIndex={0}
								className="focus:outline-none text-sm mt-4 font-medium leading-none text-gray-500"
							>
								Already have a account ?
								<Link
									to={"/login"}
									className="hover:underline text-sm font-medium leading-none text-blue-700 cursor-pointer"
								>
									Sign in here
								</Link>
							</p>
							<SocialLogin></SocialLogin>
							<form onSubmit={handleRegister}>
								<div>
									<label
										htmlFor="email"
										className="text-sm font-medium leading-none text-gray-800"
									>
										Full Name
									</label>
									<input
										onChange={(event) =>
											handleUserInfo(event)
										}
										id="name"
										type="text"
										name="name"
										className="bg-gray-200 border rounded text-xs font-medium text-gray-800 py-3 w-full pl-3 mt-2"
									/>
									{userInfo.name !== "" && (
										<p className="text-xs text-red-600">
											{errorName}
										</p>
									)}
								</div>
								<div>
									<label
										htmlFor="email"
										className="text-sm font-medium leading-none text-gray-800"
									>
										Email
									</label>
									<input
										onChange={(event) =>
											handleUserInfo(event)
										}
										id="email"
										type="email"
										name="email"
										className="bg-gray-200 border rounded text-xs font-medium text-gray-800 py-3 w-full pl-3 mt-2"
									/>
								</div>
								<div className="mt-6 w-full">
									<label
										htmlFor="password"
										className="text-sm font-medium leading-none text-gray-800"
									>
										Password
									</label>
									<div className="relative flex items-center justify-center">
										<input
											onChange={(event) =>
												handleUserInfo(event)
											}
											id="password"
											name="password"
											type={
												showpass ? "text" : "password"
											}
											className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
										/>
										<div
											onClick={() =>
												setShowPass(!showpass)
											}
											className="absolute right-0 mt-2 mr-3 cursor-pointer"
										>
											<div id="show">
												<svg
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
														fill="#71717A"
													/>
												</svg>
											</div>
										</div>
									</div>
									{userInfo.password !== "" && (
										<p className="text-xs text-red-600">
											{errorPassword}
										</p>
									)}
								</div>
								<div className="mt-6 w-full">
									<label
										htmlFor="confirmPassword"
										className="text-sm font-medium leading-none text-gray-800"
									>
										Confirm Password
									</label>
									<div className="relative flex items-center justify-center">
										<input
											onChange={(event) =>
												handleUserInfo(event)
											}
											name="confirmPassword"
											id="confirmPassword"
											type={
												showpass ? "text" : "password"
											}
											className="bg-gray-200 border rounded text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2"
										/>
										<div
											onClick={() =>
												setShowPass(!showpass)
											}
											className="absolute right-0 mt-2 mr-3 cursor-pointer"
										>
											<div id="show">
												<svg
													width={16}
													height={16}
													viewBox="0 0 16 16"
													fill="none"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														d="M7.99978 2C11.5944 2 14.5851 4.58667 15.2124 8C14.5858 11.4133 11.5944 14 7.99978 14C4.40511 14 1.41444 11.4133 0.787109 8C1.41378 4.58667 4.40511 2 7.99978 2ZM7.99978 12.6667C9.35942 12.6664 10.6787 12.2045 11.7417 11.3568C12.8047 10.509 13.5484 9.32552 13.8511 8C13.5473 6.67554 12.8031 5.49334 11.7402 4.64668C10.6773 3.80003 9.35864 3.33902 7.99978 3.33902C6.64091 3.33902 5.32224 3.80003 4.25936 4.64668C3.19648 5.49334 2.45229 6.67554 2.14844 8C2.45117 9.32552 3.19489 10.509 4.25787 11.3568C5.32085 12.2045 6.64013 12.6664 7.99978 12.6667ZM7.99978 11C7.20413 11 6.44106 10.6839 5.87846 10.1213C5.31585 9.55871 4.99978 8.79565 4.99978 8C4.99978 7.20435 5.31585 6.44129 5.87846 5.87868C6.44106 5.31607 7.20413 5 7.99978 5C8.79543 5 9.55849 5.31607 10.1211 5.87868C10.6837 6.44129 10.9998 7.20435 10.9998 8C10.9998 8.79565 10.6837 9.55871 10.1211 10.1213C9.55849 10.6839 8.79543 11 7.99978 11ZM7.99978 9.66667C8.4418 9.66667 8.86573 9.49107 9.17829 9.17851C9.49085 8.86595 9.66644 8.44203 9.66644 8C9.66644 7.55797 9.49085 7.13405 9.17829 6.82149C8.86573 6.50893 8.4418 6.33333 7.99978 6.33333C7.55775 6.33333 7.13383 6.50893 6.82126 6.82149C6.5087 7.13405 6.33311 7.55797 6.33311 8C6.33311 8.44203 6.5087 8.86595 6.82126 9.17851C7.13383 9.49107 7.55775 9.66667 7.99978 9.66667Z"
														fill="#71717A"
													/>
												</svg>
											</div>
										</div>
									</div>
									{userInfo.confirmPassword !== "" && (
										<p className="text-xs text-red-600">
											{errorConfirmPassword}
										</p>
									)}
								</div>

								<div className="mt-8">
									<input
										type="submit"
										className={`text-sm font-semibold leading-none text-white focus:outline-none border rounded hover:bg-[#ff5722] bg-[#90ba14] py-4 w-full `}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Register
