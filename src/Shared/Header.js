import React, { useEffect, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { HiOutlineMenu, HiOutlineMenuAlt1 } from "react-icons/hi"
import { useScrollTracker } from "react-scroll-tracker"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../firebase.init"
import { signOut } from "firebase/auth"

const Header = () => {
	const [user] = useAuthState(auth)
	const location = useLocation()
	const [scrollY, setScrollY] = useState(0)
	const { scrollY: scrollwork } = useScrollTracker()
	useEffect(() => {
		setScrollY(window.scrollY)
	}, [scrollY, scrollwork])
	const [menuOpen, setMenuOpen] = useState(false)
	const activeNavStyle = {
		color: "#90ba14",
		backgroundColor: "#fff",
		borderRadius: "15px",
		border: "0px",
	}

	return (
		<div>
			<header
				className={`fixed w-full z-50 top-0  duration-500 lg:px-8 xl:px-26 2xl:px-36 flex items-center justify-between ${
					scrollY < 200
						? "min-h-[14vh] backdrop-blur-[0px] text-white lg:text-black"
						: "min-h-[8vh] backdrop-blur-[50px] text-white bg-black/60"
				}`}
			>
				<div
					className={
						"absolute lg:static top-0 h-full right-0 z-50 bg-white lg:bg-transparent w-full lg:w-auto flex justify-between items-center px-4 lg:px-auto"
					}
				>
					<Link
						to="/"
						className="text-3xl lg:text-5xl font-bold flex items-center font-mono"
					>
						<span className="pr-2 lg:pr-4 text-[#ff5722] border-t-2 border-r-2 border-[#90ba14] pt-1 lg:pt-2">
							Rapid
						</span>
						<span className="text-[#90ba14] border-b-2 border-l-2  border-[#ff5722] lg:pb-2 pb-1">
							Dealer
						</span>
					</Link>
					<span
						className="lg:hidden text-black"
						onClick={() => setMenuOpen(!menuOpen)}
					>
						{menuOpen ? (
							<HiOutlineMenuAlt1 size={"2em"} />
						) : (
							<HiOutlineMenu size={"2em"} />
						)}
					</span>
				</div>
				<div>
					<nav>
						<ul
							style={
								menuOpen ? { top: "4vh" } : { top: "-100vh" }
							}
							className="grid gap-0 lg:flex pt-24 lg:pt-0 justify-items-center items-center w-full  lg:ml-auto lg:justify-between h-[80vh] bg-gray-800/90 lg:backdrop-blur-0 backdrop-blur-xl lg:bg-transparent lg:h-auto absolute lg:static duration-700"
						>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeNavStyle : {}
								}
								className={
									" font-bold  py-[8px]  mx-0  lg:px-[15px] xl:px-[30px]  hover:text-[#90ba14]"
								}
								to={"/"}
							>
								Home
							</NavLink>
							{user && (
								<>
									<NavLink
										style={({ isActive }) =>
											isActive ? activeNavStyle : {}
										}
										className={
											"   font-bold  py-[8px] ml-0  lg:px-[15px] xl:px-[30px]  hover:text-[#90ba14]"
										}
										to={"/inventory"}
									>
										Manage cars
									</NavLink>
									<NavLink
										style={({ isActive }) =>
											isActive ? activeNavStyle : {}
										}
										className={
											"   font-bold  py-[8px] mx-0   lg:px-[15px] xl:px-[30px]  hover:text-[#90ba14]"
										}
										to={"/add-car"}
										state={{ from: location }}
									>
										Add car
									</NavLink>

									<NavLink
										style={({ isActive }) =>
											isActive ? activeNavStyle : {}
										}
										className={
											" font-bold  py-[8px]  mx-0  lg:px-[15px] xl:px-[30px]  hover:text-[#90ba14]"
										}
										to={"/my-cars"}
									>
										My cars
									</NavLink>
								</>
							)}
							<NavLink
								style={({ isActive }) =>
									isActive ? activeNavStyle : {}
								}
								className={
									" font-bold  py-[8px]  mx-0  lg:px-[15px] xl:px-[30px]  hover:text-[#90ba14]"
								}
								to={"/blog"}
							>
								Blog
							</NavLink>
							{!user ? (
								<NavLink
									style={({ isActive }) =>
										isActive ? activeNavStyle : {}
									}
									to="/login"
									className={
										" font-bold py-[8px] mx-0  lg:px-[15px] xl:px-[30px]  lg:bg-transparent rounded-[15px] lg:rounded-none lg:border-l-2 hover:text-[#90ba14] text-[#ff5722]"
									}
								>
									Login
								</NavLink>
							) : (
								<button
									onClick={() => signOut(auth)}
									className="hover:text-[#90ba14] hover:bg-white hover:rounded-r-[15px] hover:border-0 font-bold py-[8px] mx-0  lg:px-[15px] xl:px-[30px]  bg-white lg:bg-transparent rounded-[15px] lg:rounded-none lg:border-l-2 text-[#ff5722]"
								>
									Sign out
								</button>
							)}
						</ul>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header
