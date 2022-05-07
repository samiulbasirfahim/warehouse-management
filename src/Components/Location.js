import React from "react"
import Map from "./Map"

const Location = () => {
	return (
		<div id="randomCar" className="py-16  border-t-2 border-gray-400 -z-50 overflow-x-hidden">
			<p className="text-4xl py-8 text-center font-bold font-mono dark:text-white">
				Warehouse Location
			</p>
			<Map></Map>
		</div>
	)
}

export default Location
