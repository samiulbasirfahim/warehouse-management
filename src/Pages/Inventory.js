import React from "react"
import { Link } from "react-router-dom"
import ReactHelmet from "../Components/ReactHelmet"

const Inventory = () => {
	return (
		<div className="bg-indigo-50 min-h-screen min-w-screen pt-[16vh] md:px-8 px-4 xl:px-26 2xl:px-36">
			<ReactHelmet>Helmet</ReactHelmet>
			<Link
				className="text-white mx-auto block text-2xl lg:w-1/2 bg-[#90ba14] hover:bg-[#90ba14]/80 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50  rounded-lg font-bold px-5 py-2.5 text-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
				to="/add-car"
			>Add to new car</Link>
		</div>
	)
}

export default Inventory
