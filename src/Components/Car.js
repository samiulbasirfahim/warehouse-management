import React from "react"
import { ImPriceTags } from "react-icons/im"
import { useNavigate } from "react-router-dom"

const Car = () => {
	const imageLink = "https://i.ibb.co/X5LY5n6/download.jpg"
	const title = "Porsche Cayman"
	const description =
		"The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world."
	const supplierName = "fahim"
	const stock = 50
	const price = "2 kidneys + 2 eyes"
	const _id = "kjfjkdsjhafjkhjfdhjasdhfjh1114jdf"
	const navigate = useNavigate()
	return (
		<div className="bg-white rounded container mx-auto p-4 flex flex-col lg:items-center lg:flex-row overflow-x-hidden">
			<img
				data-aos="fade-right"
				data-aos-duration="1000"
				data-aos-easing="ease-in-back"
				data-aos-delay="50"
				src={imageLink}
				alt=""
				className="lg:h-[360px]  w-auto rounded"
			/>
			<div
				className="px-8"
				data-aos="fade-left"
				data-aos-duration="1000"
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
				<button
					onClick={() => navigate("/update/" + _id)}
					className="hover:bg-[#ff5722] hover:text-[#90ba14] py-3 mt-4 w-full lg:w-1/2 rounded text-white font-bold font-mono font-xl bg-[#90ba14]"
				>
					Update
				</button>
			</div>
		</div>
	)
}
export default Car
