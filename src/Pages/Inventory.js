import React, { useEffect, useState } from "react"
import CarSmall from "../Components/CarSmall"
import ReactHelmet from "../Components/ReactHelmet"
import useLoadData from "../Hooks/useLoadData"

const Inventory = () => {
	const [limit, setLimit] = useState(10)
	const [currentPage, setCurrentPage] = useState(0)
	const [pages, setPages] = useState(0)
	const [totalCar, setTotalCar] = useState(0)
	useEffect(() => {
		fetch(`https://quiet-mesa-05314.herokuapp.com/get-total`)
			.then((res) => res.json())
			.then((data) => setTotalCar(data.result))
	}, [limit])
	useEffect(() => {
		setPages(Math.ceil(totalCar / limit))
	}, [totalCar, limit])
	const { cars, setCars } = useLoadData(
		`http://localhost:4000/cars?limit=${limit}&page=${currentPage}`
	)
	return (
		<div className="bg-white min-h-screen min-w-screen pt-[16vh] md:px-8 px-4 xl:px-26 2xl:px-36">
			<ReactHelmet>Inventory</ReactHelmet>
			<p className="text-4xl py-2 text-center font-bold font-mono">
				Inventory
			</p>
			<div className={"grid justify-items-center gap-y-8"}>
				{cars.map((car) => (
					<CarSmall
						key={car._id}
						setCars={setCars}
						cars={cars}
						car={car}
					></CarSmall>
				))}
				<dir className='w-1/2 mx-auto flex justify-center bg-gray-400 py-8 rounded mb-6'>
					{[...Array(pages).keys()].map((num) => (
						<button
							onClick={() => setCurrentPage(num)}
							className={`mr-6 px-4 py-4 ${
								num === currentPage
									? "text-red-800 font-bold bg-white rounded-full shadow-xl"
									: "text-gray-100"
							}`}
						>
							{num + 1}
						</button>
					))}
				</dir>
			</div>
		</div>
	)
}

export default Inventory
