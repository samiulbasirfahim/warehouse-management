import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { PropagateLoader } from "react-spinners"
import useLoadSingleCar from "../Hooks/useLoadSingleCar"

const RandomCar = () => {
	const { car: carArray } = useLoadSingleCar(
		"https://quiet-mesa-05314.herokuapp.com/car-random"
	)
	const [car, setCar] = useState({})
	const [loading, setLoading] = useState(false)
	useEffect(() => {
		setCar(carArray ? carArray[0] : {})
	}, [carArray])
	const handleLoadAnotherCar = () => {
		setLoading(true)
		fetch("https://quiet-mesa-05314.herokuapp.com/car-random")
			.then((response) => response.json())
			.then((data) => {
				setCar(data[0])
				setLoading(false)
			})
	}
	if (loading) {
		return (
			<div className="h-screen bg-white dark:bg-gray-600 w-screen flex items-center justify-center">
				<PropagateLoader speedMultiplier={1}></PropagateLoader>
			</div>
		)
	}
	return (
		<div id="randomCar" className="py-16 -z-50 border-t-2 border-gray-400">
			<p className="text-4xl py-8 text-center font-bold font-mono dark:text-white">
				Random Hot Car
			</p>
			<div
				className="w-full h-[50vh] container mx-auto   bg-center bg-cover flex justify-start bg-no-repeat  lg:rounded-3xl overflow-x-hidden"
				style={{ backgroundImage: `url(${car?.imgLink})` }}
			>
				<div className="bg-slate-100/60 dark:bg-slate-500/70 dark:text-gray-50 lg:pl-8 px xl:pl-36 lg:w-1/2 lg:backdrop-blur-sm grid justify-items-center lg:rounded-l-3xl pb-6">
					<p className="text-2xl lg:text-4xl font-bold font-mono py-5">
						{car?.title}
					</p>
					<p className="md:hidden md:font-semibold text-sm md:text-base font-sans">
						{car?.description?.length > 300
							? car.description.slice(0, 300) + "..."
							: car.description}
					</p>
					<p className="hidden md:block md:font-semibold text-sm md:text-base font-sans">
						{car?.description?.length > 500
							? car.description.slice(0, 500) + "..."
							: car.description}
					</p>
					<div className="flex flex-col md:flex-row justify-between w-full items-center">
						<Link
							to={"/review/" + car?._id}
							className="mx-6 hover:bg-[#ff5722] block  w-auto  text-center hover:text-[#90ba14] py-1 md:py-3 px-10 md:w-full rounded text-white font-bold font-mono font-xl bg-[#90ba14]"
						>
							Review
						</Link>
						<button
							onClick={handleLoadAnotherCar}
							className="mx-6 hover:bg-[#90ba14] w-auto block text-center hover:text-[#ff5722] py-1 md:py-3 px-10 md:w-full rounded text-white font-bold font-mono font-xl bg-[#ff5722]"
						>
							Load Another
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default RandomCar
