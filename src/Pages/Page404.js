import React from "react"
import { Link } from "react-router-dom"

const Page404 = () => {
	return (
		<div className="pt-[16vh] lg:pt-8 bg-white min-h-screen min-w-screen flex items-center justify-center  lg:flex-row flex-col">
			<div className="w-full grid justify-items-center">
				<div className="">
					<div className="mb-28 mt-24">
						<p
							className="text-center font-bold text-9xl"
							style={{ fontFamily: "'Special Elite', cursive" }}
						>
							404
						</p>
						<p className="text-xs font-mono md:text-sm xl:text-xl text-center">
							Page not found
						</p>
					</div>
					<p
						className="2xl:text-5xl xl:text-4xl md:text-3xl  text-2xl font-black"
						style={{ fontFamily: "'Special Elite', cursive" }}
					>
						Dont try to go moon by car !
					</p>
					<p className="text-xs font-mono md:text-sm">
						Be patient, We will supply airship soon
					</p>
				</div>
				<Link
					className="font-mono text-xl border-2 lg:px-20 px-6 rounded-md bg-[#e53046] mt-12 py-2"
					to="/"
				>
					Go back homepage for now
				</Link>
			</div>
			<div className="w-full">
				<img src="https://i.ibb.co/XWmrFFQ/2y7f6wn2acm11.png" alt="" />
			</div>
		</div>
	)
}

export default Page404
