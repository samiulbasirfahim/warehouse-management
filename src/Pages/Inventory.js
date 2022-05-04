import React from "react"
import { Link } from "react-router-dom"
import ReactHelmet from "../Components/ReactHelmet"

const Inventory = () => {
	return (
		<div className="bg-white min-h-screen min-w-screen pt-[16vh] md:px-8 px-4 xl:px-26 2xl:px-36">
			<ReactHelmet>Inventory</ReactHelmet>
			<p className="text-4xl py-2 text-center font-bold font-mono">
				Inventory
			</p>
		</div>
	)
}

export default Inventory
