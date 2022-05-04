import React from "react"
import ReactHelmet from "../Components/ReactHelmet"

const MyCars = () => {
	return (
		<div className="bg-white min-h-screen min-w-screen pt-[16vh] md:px-8 px-4 xl:px-26 2xl:px-36">
			<ReactHelmet>My items</ReactHelmet>
			<p className="text-4xl py-12 lg:py-28 text-center font-bold font-mono">
				Inventory
			</p>
		</div>
	)
}

export default MyCars
