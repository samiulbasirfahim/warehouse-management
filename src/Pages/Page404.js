import React from "react"
import { Link } from "react-router-dom"

const Page404 = () => {
	return (
		<div className="min-h-screen flex justify-center flex-col items-center relative">
			<img
				src="https://pngimg.com/uploads/tire/tire_PNG50.png"
				className="w-32 lg:w-80"
				alt=""
			/>
			<p className="dark:text-white font-black text-9xl border-b-4 border-blue-600 lg:w-1/2 text-center ">
				404
			</p>
			<p className=" text-green-600 text-2xl font-bold line-through ">
				Page not found, Don't cry
			</p>
			<Link className="px-24 lg:px-44 lg:rounded-br-3xl rounded-lg lg:rounded-none lg:rounded-tl-3xl py-4 mt-6 bg-[#ff3565]" to={"/"}>
				Go back
			</Link>
		</div>
	)
}

export default Page404
