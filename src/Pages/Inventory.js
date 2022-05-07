import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import CarSmall from "../Components/CarSmall"
import ReactHelmet from "../Components/ReactHelmet"
import Spinner from "../Components/Spinner"
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
	}, [])

	useEffect(() => {
		setPages(Math.ceil(totalCar / limit))
	}, [totalCar, limit])
	useEffect(() => {
		console.log(pages)
		if (currentPage > pages) {
			setCurrentPage(Math.max(pages))
		}
	}, [limit, pages])
	const { cars, setCars } = useLoadData(
		`https://quiet-mesa-05314.herokuapp.com/cars?limit=${limit}&page=${currentPage}`
	)
	if (!cars.length > 0) {
		return <Spinner></Spinner>
	}
	return (
		<div className="min-h-screen min-w-screen pt-[16vh] md:px-8 px-4 xl:px-26 2xl:px-36">
			<ReactHelmet>Inventory</ReactHelmet>
			<Link
				className="text-white lg:mx-auto block text-2xl mx-8 lg:w-1/3 bg-[#90ba14]/80 hover:bg-[#90ba14] focus:ring-4 focus:outline-none focus:ring-[#24292F]/50  rounded-lg font-bold px-5 py-2.5 text-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mb-6"
				to="/add-car"
			>
				Add new car
			</Link>
			<div className={"grid justify-items-center gap-y-8"}>
				{cars.map((car) => (
					<CarSmall
						key={car._id}
						setCars={setCars}
						cars={cars}
						car={car}
					></CarSmall>
				))}
				{totalCar > 10 && (
					<dir className="min:w-1/2 mx-auto flex justify-center bg-gray-400 py-8 rounded mb-6 flex-wrap px-8">
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
						<div className="flex items-center bg-slate-400 rounded">
							<input
								type="range"
								min={5}
								max={25}
								step={5}
								defaultValue={limit}
								onChange={(e) => setLimit(e.target.value)}
							/>
							<label
								className="mx-4 text-gray-800"
								htmlFor="range"
							>
								{limit}
							</label>
						</div>
					</dir>
				)}
			</div>
		</div>
	)
}

export default Inventory
