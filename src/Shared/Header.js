import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { HiOutlineMenu, HiOutlineMenuAlt1 } from "react-icons/hi"
import { useScrollTracker } from "react-scroll-tracker"

const Header = () => {
	const [scrollY, setScrollY] = useState(0)
	const { scrollY: scrollhook } = useScrollTracker()
	useEffect(() => {
		setScrollY(window.scrollY)
		console.log(scrollY)
	}, [scrollhook])
	const [menuOpen, setMenuOpen] = useState(false)

	return (
		<header
			className={`fixed w-full top-0 duration-100 md:px-12 lg:px-36 flex items-center justify-between ${
				scrollY < 100
					? "h-[12vh] backdrop-blur-[0.8px]"
					: "h-[6vh] backdrop-blur-[8px]"
			}`}
		>
			<div
				className={
					"absolute md:static top-0 h-full right-0 z-50 bg-white md:bg-transparent w-full md:w-auto flex justify-between items-center px-4 md:px-auto"
				}
			>
				<p className="text-3xl md:text-5xl font-bold flex items-center font-mono">
					<span className="pr-2 md:pr-4 text-green-600 border-t-2 border-r-2 border-red-400 pt-2">
						Rapid{" "}
					</span>{" "}
					<span className="text-red-600 border-b-2 border-l-2  border-green-400 pb-2">
						{" "}
						Dealer
					</span>
				</p>
				<span
					className="md:hidden"
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
						style={menuOpen ? { top: "0vh" } : { top: "-100vh" }}
						className="grid md:flex pt-12 md:pt-0 justify-items-center items-center w-full  md:ml-auto md:justify-between h-[80vh] backdrop-blur-[4px] md:backdrop-blur-0 bg-green-200 md:bg-transparent md:h-auto absolute md:static duration-700 "
					>
						<NavLink className={"md:ml-12 text-2xl"} to={"/"}>
							Home
						</NavLink>
						<NavLink
							className={"md:ml-12 text-2xl"}
							to={"/inventory"}
						>
							Inventory
						</NavLink>
						<NavLink className={"md:ml-12 text-2xl"} to={"/"}>
							Orders
						</NavLink>
						<NavLink className={"md:ml-12 text-2xl"} to={"/"}>
							Services
						</NavLink>
						<NavLink className={"md:ml-12 text-2xl"} to={"/"}>
							About us
						</NavLink>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
