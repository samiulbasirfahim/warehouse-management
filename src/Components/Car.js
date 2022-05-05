import React from "react"
import { ImPriceTags } from "react-icons/im"
import { Link, useLocation, useNavigate } from "react-router-dom"

const Car = ({car : {description, imgLink, price, title, stock, supplierName, _id}}) => {
	const location = useLocation()
	return (
		<div className="bg-white rounded container mx-auto p-4 flex flex-col lg:items-center lg:flex-row overflow-x-hidden">
			<img
				data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-easing="ease-in-back"
				data-aos-delay="50"
				src={imgLink}
				alt=""
				className="lg:h-[360px]  w-auto rounded"
			/>
			<div
				className="px-8"
				data-aos="fade-left"
				data-aos-duration="1000"d
				data-aos-easing="ease-in-back"
				data-aos-delay="50"
			>
				<p className="text-2xl lg:text-4xl py-4 lg:py-10 text-center font-bold font-mono">
					{title}
				</p>

				<p className="text-gray-500 text-xs lg:text-base">
					{description.length > 250
						? description.slice(0, 250) + " ..."
						: description}
				</p>
				<p className="text-[#ff5722] text-sm">Stock : {stock}</p>
				<p className="text-[#ff5722] text-sm">
					Supplier : {supplierName}
				</p>
				<p className="flex items-center text-center my-2 font-semibold font-mono lg:text-xl">
					<ImPriceTags />
					<span className="ml-4">$_{price}</span>
				</p>
				<Link
					state={{from:location}}
					to={"/review/" + _id}
					className="hover:bg-[#ff5722] block text-center hover:text-[#90ba14] py-3 mt-4 w-full lg:w-1/2 rounded text-white font-bold font-mono font-xl bg-[#90ba14]"
				>
					Review
				</Link>
			</div>
		</div>
	)
}
export default Car
