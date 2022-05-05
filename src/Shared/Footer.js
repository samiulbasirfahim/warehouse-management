import React from "react"
import { Link } from "react-router-dom"

const Footer = () => {
	return (
		<div className="mx-auto container xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
			<div className="flex flex-col items-center justify-center">
				<div>
					<p className="font-bold text-2xl text-[#ff5722]">
						Rapid Dealer
					</p>
				</div>
				<div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
					<Link
						to={"/inventory"}
						className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800"
					>
						Inventory
					</Link>
					<Link
						to="/my-cars"
						className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800"
					>
						my Cars
					</Link>
					<Link
						to="/blog"
						className="hover:text-gray-500 text-base cursor-pointer leading-4 text-gray-800"
					>
						blog
					</Link>
				</div>

				<div className="flex items-center mt-6">
					<p className="text-base leading-4 text-gray-800">
						{new Date().getFullYear()}{" "}
						<span className="font-semibold">Rapid Dealer</span>
					</p>
					<div className="border-l border-gray-800 pl-2 ml-2">
						<p className="text-base leading-4 text-gray-800">
							Inc. All rights reserved
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Footer
