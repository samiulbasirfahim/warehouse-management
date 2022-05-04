import React from "react"
import { MdDelete, MdEdit, MdPreview } from "react-icons/md"
import { Link, useLocation } from "react-router-dom"

const CarSmall = ({
	car: { description, imgLink, price, title, stock, supplierName, _id },
}) => {
	const location = useLocation()
	return (
		<div className="bg-slate-300 w-[95%] lg:w-5/6  flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-2xl">
			<div className="flex justify-between lg:w-3/4 px-4 py-2">
				<img
					className="h-16 lg:h-36  rounded-2xl"
					src={imgLink}
					alt=""
				/>
				<div className="flex flex-col justify-center">
					<p className="font-bold">{title}</p>
					<p className="flex justify-evenly font-thin font-mono text-gray-700">
						Stock:{stock}{" "}
						<span className="ml-2"> Price:${price}</span>
					</p>
				</div>
			</div>
			<dir className="flex lg:w-1/4 justify-around">
				<Link state={{ from: location }} to={`/review/${_id}`}>
					<MdPreview size={"2em"} />
				</Link>
				<button>
					<MdDelete size={"2em"} />
				</button>
				<span>
					<MdEdit size={"2em"} />
				</span>
			</dir>
		</div>
	)
}

export default CarSmall
