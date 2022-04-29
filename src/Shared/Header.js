import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import { useScrollTracker } from "react-scroll-tracker"
import { HiOutlineMenu, HiOutlineMenuAlt1 } from "react-icons/hi"

const Header = () => {
	const { scrollY } = useScrollTracker()
	console.log(scrollY)
	const [navSize, setNavSize] = useState("large")
	useEffect(() => {
		if (scrollY < 30) {
			setNavSize("large")
		} else {
			setNavSize("small")
		}
	}, [scrollY])
	const [menuOpen, setMenuOpen] = useState(false)
	return (
		<header
			className={`${
				navSize === "large"
					? "h-[10vh] md:h-[12vh]"
					: "h-[6vh] md:h-[8vh]"
			} sticky  top-0 container mx-auto`}
		>
			<div
				className={
					"absolute md:static top-0 h-full right-0 z-50 w-full bg-white  flex justify-between items-center"
				}
			>
				<p>Rapid Dealer</p>
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

				<nav>
					<ul
						style={menuOpen ? { top: "6vh" } : { top: "-100vh" }}
						className="grid md:flex justify-items-center items-center w-full  md:ml-auto md:justify-between h-[80vh] backdrop-blur-[4px] md:backdrop-blur-0 bg-blue-600/50 md:bg-transparent md:h-auto absolute md:static duration-700 "
					>
						<NavLink to={"/"}>Home</NavLink>
						<NavLink to={"/inventory"}>Inventory</NavLink>
						<NavLink to={"/"}>Orders</NavLink>
						<NavLink to={"/"}>Services</NavLink>
						<NavLink to={"/"}>About us</NavLink>
					</ul>
				</nav>
			</div>
		</header>
	)
}

export default Header
