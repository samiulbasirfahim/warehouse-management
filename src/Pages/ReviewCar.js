import React from "react"
import { useParams } from "react-router-dom"

const ReviewCar = () => {
	const imageLink = "https://i.ibb.co/X5LY5n6/download.jpg"
	const title = "Porsche Cayman"
	const description =
		"The 718 models were made for the sport of it. They are mid-engined roadsters that unite the sporting spirit of the legendary Porsche 718 with the sports car of tomorrow – and transfer it to the roads of today’s world."
	const supplierName = "fahim"
	const stock = 50
	const price = "2 kidneys + 2 eyes"
	const _id = "kjfjkdsjhafjkhjfdhjasdhfjh1114jdf"
	const { carId } = useParams()
	return (
		<div className="min-h-screen flex items-center justify-between lg:px-8 px-4 xl:px-26 2xl:px-36">
			<div className="lg:flex items-center justify-center py-12 2xl:px-20 lg:px-6 px-4">
				<div className="xl:w-2/6 lg:w-2/5 w-80 lg:block hidden">
					<img className="w-full" alt="" src={imageLink} />
				</div>
				<div className="lg:hidden">
					<img className="w-full" alt="" src={imageLink} />
				</div>
				<div className="xl:w-2/5 lg:w-1/2 lg:ml-8 lg:ml-6 lg:mt-0 mt-6">
					<div className="border-b border-gray-200 pb-6">
						<h1
							className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
						>
							{title}
						</h1>
					</div>

					<div>
						<p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-800 mt-7">
							{description}
						</p>
						<p className="text-base leading-4 mt-2 text-gray-400">
							Product id: {_id}
						</p>
						<p className="text-base leading-4 mt-4 text-blue-600">
							Stocks: {stock}
						</p>
						<p className="text-base leading-4 mt-4 text-green-600">
							Supplier : {supplierName}
						</p>
						<p className="text-base leading-4 mt-4 text-red-600">
							Price: ${price}
						</p>
						<div className="flex justify-between mt-6 py-2 px-6 rounded-lg bg-slate-100 ">
							<button class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2">
								Delivered
							</button>
							<button
								type="button"
								class="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2"
							>
								Edit
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReviewCar
