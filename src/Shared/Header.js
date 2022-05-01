import React, { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { HiOutlineMenu, HiOutlineMenuAlt1 } from "react-icons/hi"
import { useScrollTracker } from "react-scroll-tracker"

const Header = () => {
	const [scrollY, setScrollY] = useState(0)
	const { scrollY: scrollwork } = useScrollTracker()
	useEffect(() => {
		setScrollY(window.scrollY)
		console.log(scrollY)
	}, [scrollY, scrollwork])
	const [menuOpen, setMenuOpen] = useState(false)
	const activeNavStyle = {
		backgroundColor: "rgba(241, 186, 176,0.25)",
		borderRadius: "15px",
		boxShadow: "1px 1px 8px 1px rgba(235, 79, 68)",
		color: "red",
	}

	return (
		<div>
			<header
				className={`fixed py-4 w-full z-50 top-0 duration-500 md:px-8 xl:px-26 2xl:px-36 flex items-center justify-between ${
					scrollY < 1000
						? "h-[14vh] backdrop-blur-[0px] text-black"
						: "h-[8vh] backdrop-blur-[50px] text-white bg-black/60"
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
						<span className="pr-2 lg:pr-4 text-green-600 border-t-2 border-r-2 border-red-400 pt-1 lg:pt-2">
							Rapid
						</span>
						<span className="text-red-600 border-b-2 border-l-2  border-green-400 lg:pb-2 pb-1">
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
							className="grid gap-0 lg:flex pt-12 lg:pt-0 justify-items-center items-center w-full  lg:ml-auto lg:justify-between h-[80vh] bg-gray-800/80 lg:backdrop-blur-0 backdrop-blur-xl lg:bg-transparent lg:h-auto absolute lg:static duration-700"
						>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeNavStyle : {}
								}
								className={
									"   font-bold  py-[8px] ml-0 px-[30px]"
								}
								to={"/"}
							>
								Home
							</NavLink>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeNavStyle : {}
								}
								className={
									"   font-bold  py-[8px] mx-0  px-[30px]"
								}
								to={"/inventory"}
							>
								Inventory
							</NavLink>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeNavStyle : {}
								}
								className={
									"   font-bold  py-[8px] mx-0  px-[30px]"
								}
								to={"/services"}
							>
								Services
							</NavLink>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeNavStyle : {}
								}
								className={
									"   font-bold  py-[8px]  mx-0 px-[30px]"
								}
								to={"/about"}
							>
								About
							</NavLink>
							<NavLink
								style={({ isActive }) =>
									isActive ? activeNavStyle : {}
								}
								to="/login"
								className={
									"   font-bold  py-[8px] mx-0  px-[30px] "
								}
							>
								Login
							</NavLink>
						</ul>
					</nav>
				</div>
			</header>
		</div>
	)
}

export default Header
