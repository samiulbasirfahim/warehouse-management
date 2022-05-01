import React from "react"
import Product from "./Product"

const InventoryOverview = () => {
	return (
		<div className="relative">
			<div
				className="absolute w-full top-[8vh]  min-h-full
             bg-blend-overlay bg-fixed bg-center bg-no-repeat bg-cover bg-[url('https://i.ibb.co/vczgXpg/joey-banks-YApi-Wyp0lqo-unsplash.jpg')]"
			>
				<div className="bg-white rounded w-4/5 mx-auto">
					<p className="text-4xl py-12 text-center font-bold font-mono">
						Hot products
					</p>
				</div>
				<div className="mt-10 w-full top-[8vh] grid gap-10 overflow-x-hidden scroll-y-hidden">
					<Product></Product>
					<Product></Product>
					<Product></Product>
					<Product></Product>
				</div>
			</div>
		</div>
	)
}

export default InventoryOverview
