import React, { useState } from "react"
import { Link } from "react-router-dom"

const AddProduct = () => {
	const [carInfo, setCarInfo] = useState({
		img: "",
	})
	return (
		<div className="flex pt-[14vh] w-full justify-center items-center min-h-screen">
			<form className="bg-slate-100 rounded p-6 w-5/6 grid">
				<div className="flex flex-col w-full border lg:px-6 py-2 mt-4 rounded ">
					<label htmlFor="imgLink">Image link</label>
					<div className="flex justify-between items-center">
						<input
							onBlur={(e) =>
								setCarInfo({ ...carInfo, img: e.target.value })
							}
							className="text-gray-800 w-full bg-slate-300 mr-6 rounded mt-2 h-12"
							id="imgLink"
							name="imgLink"
							type="text"
							placeholder="Image Link"
						></input>
						<img className="lg:w-64" src={carInfo.img} alt="" />
					</div>
				</div>
				<div className="flex flex-col w-full border lg:px-6 py-2 mt-4 rounded ">
					<label htmlFor="title">Title / car name</label>
					<input
						className="text-gray-800 bg-slate-300 rounded mt-2 h-12 pl-2"
						id="title"
						name="title"
						type="text"
						placeholder="Title"
					></input>
				</div>
				<div className="flex flex-col w-full border lg:px-6 py-2 mt-4 rounded ">
					<label htmlFor="description">Description</label>
					<textarea
						className="text-gray-800 bg-slate-300 rounded mt-2 h-12 pl-2"
						id="description"
						name="description"
						type="text"
						placeholder="Description"
					></textarea>
				</div>
				<div className="flex flex-col w-full border lg:px-6 py-2 mt-4 rounded ">
					<label htmlFor="stock">Stock</label>
					<input
						className="text-gray-800 bg-slate-300 rounded mt-2 h-12 pl-2"
						id="stock"
						name="stock"
						type="number"
                        min={0}
						placeholder="Stock"
					></input>
				</div>
				<div className="flex flex-col w-full border lg:px-6 py-2 mt-4 rounded ">
					<label htmlFor="supplierName"> Supplier name</label>
					<input
						className="text-gray-800 bg-slate-300 rounded mt-2 h-12 pl-2"
						id="supplierName"
						name="supplierName"
						type="text"
						placeholder="Supplier Name"
					></input>
				</div>
				<div className="flex flex-col w-full border lg:px-6 py-2 mt-4 rounded ">
					<label htmlFor="price">Price</label>
					<input
						className="text-gray-800 bg-slate-300 rounded mt-2 h-12 pl-2"
						id="Price"
						name="Price"
						type="number"
                        min={0}
						placeholder="Price"
					></input>
				</div>
				<input
					className="bg-[#ff5722]  lg:mx-6 py-4 cursor-pointer mt-4 rounded"
					type="submit"
					value="Add to stock"
				/>
			</form>
		</div>
	)
}

export default AddProduct
