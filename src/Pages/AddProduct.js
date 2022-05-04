import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"
import auth from "../firebase.init"

const AddProduct = () => {
	const [user] = useAuthState(auth)
	const navigate = useNavigate()
	const location = useLocation()
	const from = location?.state?.from || "/"

	const [carInfo, setCarInfo] = useState({
		img: "",
	})
	const handleAddCar = (event) => {
		event.preventDefault()
		const title = event.target.title.value
		const imgLink = event.target.imgLink.value
		const description = event.target.description.value
		const supplierName = event.target.supplierName.value
		const stock = event.target.stock.value
		const price = event.target.price.value
		const jwtToken = window.localStorage.getItem("authorization-token")
		const carInfo = {
			title,
			imgLink,
			description,
			supplierName,
			stock,
			price,
			addedBy: user?.email,
		}
		fetch("https://quiet-mesa-05314.herokuapp.com/add-car", {
			headers: {
				"content-type": "application/json",
				authorization: "Bearer " + jwtToken,
				email: user?.email,
			},
			method: "POST",
			body: JSON.stringify(carInfo),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data?.insertedId) {
					navigate(from)

					toast("Product added successfully")
				} else {
					event.target.reset()
					toast("Product not added successfully")
				}
			})
	}
	return (
		<div className="flex pt-[14vh] w-full justify-center items-center min-h-screen">
			<form
				className="bg-slate-100 rounded p-6 w-5/6 grid"
				onSubmit={handleAddCar}
			>
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
							required
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
						required
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
						required
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
						required
						defaultValue={1}
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
						defaultValue={user?.displayName}
						required
					></input>
				</div>
				<div className="flex flex-col w-full border lg:px-6 py-2 mt-4 rounded ">
					<label htmlFor="price">Price</label>
					<input
						className="text-gray-800 bg-slate-300 rounded mt-2 h-12 pl-2"
						id="Price"
						name="price"
						type="number"
						min={0}
						placeholder="Price"
						required
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
