import React from "react"
import Product from "./Product"

const InventoryOverview = () => {
	return (
		<div>
			<div className="bg-white rounded w-4/5 mx-auto">
				<p className="text-4xl lg:py-12 text-center font-bold font-mono">
					🚗Inventory🚗
				</p>
			</div>
			<div
				className="py-10 w-full min-h-full bg-blend-overlay bg-fixed bg-center bg-no-repeat bg-cover bg-[url('https://i.ibb.co/vczgXpg/joey-banks-YApi-Wyp0lqo-unsplash.jpg')]"
			>
				<div className="grid gap-y-10 p-4">
					<Product></Product>
				</div>
			</div>
		</div>
	)
}

export default InventoryOverview
