import React, { useEffect, useState } from "react"
import { PropagateLoader } from "react-spinners"
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
	}, [])
	
	useEffect(() => {
		setPages(Math.ceil(totalCar / limit))
	}, [totalCar, limit])
	useEffect(() => {
		console.log(pages);
		if (currentPage  > pages){
			setCurrentPage(Math.max(pages))
		}
	},[limit, pages])
	const { cars, setCars } = useLoadData(
		`https://quiet-mesa-05314.herokuapp.com/cars?limit=${limit}&page=${currentPage}`
	)
	if(!cars.length > 0){
		return (
			<div className="h-screen bg-white  w-screen flex items-center justify-center">
				<PropagateLoader speedMultiplier={6}></PropagateLoader>
			</div>
		)
	}
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
				<dir className='min:w-1/2 mx-auto flex justify-center bg-gray-400 py-8 rounded mb-6 flex-wrap px-8'>

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
					<input type="range" min={5} max={25} step={5} defaultValue={limit} onChange={(e) => setLimit(e.target.value)} />
				</dir>
			</div>
		</div>
	)
}

export default Inventory
