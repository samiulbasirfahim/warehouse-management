import React from "react"
import CarSmall from "../Components/CarSmall"
import ReactHelmet from "../Components/ReactHelmet"
import useLoadData from "../Hooks/useLoadData"

const Inventory = () => {
	const { cars } = useLoadData("https://quiet-mesa-05314.herokuapp.com/cars")
	
	return (
		<div className="bg-white min-h-screen min-w-screen pt-[16vh] md:px-8 px-4 xl:px-26 2xl:px-36">
			<ReactHelmet>Inventory</ReactHelmet>
			<p className="text-4xl py-2 text-center font-bold font-mono">
				Inventory
			</p>
			<div className={"grid justify-items-center gap-y-8"}>
				{cars.map((car) => (
					<CarSmall car={car}></CarSmall>
				))}
				
			</div>
		</div>
	)
}

export default Inventory
