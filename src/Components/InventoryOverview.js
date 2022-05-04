import React from "react"
import { Link } from "react-router-dom"
import useLoadData from "../Hooks/useLoadData"
import Car from "./Car"

const InventoryOverview = () => {
	const { cars } = useLoadData("https://quiet-mesa-05314.herokuapp.com/cars?limit=5")
	return (
		<div>
			<div className="bg-white rounded w-4/5 mx-auto">
				<p className="text-4xl py-12 lg:py-28 text-center font-bold font-mono">
					Latest 6 car
				</p>
			</div>
			<div className="py-10 w-full min-h-full bg-blend-overlay bg-fixed bg-center bg-no-repeat bg-cover bg-[url('https://i.ibb.co/vczgXpg/joey-banks-YApi-Wyp0lqo-unsplash.jpg')]">
				<div className="grid gap-y-10 p-4">
					{cars.map((car) => (
						<Car car={car} key={car._id}></Car>
					))}
				</div>
				<Link
					className="text-white mx-auto block text-2xl lg:w-1/2 bg-[#90ba14] hover:bg-[#90ba14]/80 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50  rounded-lg font-bold px-5 py-2.5 text-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
					to="/inventory"
				>
					Manage Inventory
				</Link>
			</div>
		</div>
	)
}

export default InventoryOverview
