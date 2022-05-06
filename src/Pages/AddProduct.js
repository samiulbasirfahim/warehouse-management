import { signOut } from "firebase/auth"
import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router-dom"
import ReactHelmet from "../Components/ReactHelmet"
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
		const jwtToken = JSON.parse(
			window.localStorage.getItem("authorization-token")
		)
		const carInfo = {
			title,
			imgLink,
			description,
			supplierName,
			stock,
			price,
			sold: 0,
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
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					signOut(auth)
					navigate("/login")
				}
				return res.json()
			})
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
			<ReactHelmet>Add car</ReactHelmet>
			<form
				className="bg-slate-100 dark:bg-gray-800 rounded p-6 w-5/6 flex flex-col"
				onSubmit={handleAddCar}
			>
				<div className="flex flex-col border dark:border-gray-600 lg:px-6 py-2 mt-4 rounded ">
					<label className="dark:text-white"  htmlFor="imgLink" >Image link</label>
					<div className="flex justify-between items-center">
						<input
							onBlur={(e) =>
								setCarInfo({ ...carInfo, img: e.target.value })
							}
							className="text-gray-800 dark:text-gray-200 w-full bg-slate-300 dark:bg-gray-600 mr-6 rounded mt-2 h-12"
							id="imgLink"
							name="imgLink"
							type="text"
							placeholder="Image Link"
							required
						></input>
						<img
							className="lg:w-64 w-36"
							src={carInfo.img ? carInfo.img : "data:image/png;base64,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"}
							alt=""
						/>
					</div>
				</div>
				<div className="flex flex-col w-full border dark:border-gray-600  dark:border-gray-600-gray-600 lg:px-6 py-2 mt-4 rounded ">
					<label className="dark:text-white"  htmlFor="title">Title / car name</label>
					<input
						className="text-gray-800 dark:text-gray-200 bg-slate-300 dark:bg-gray-600 rounded mt-2 h-12 pl-2"
						id="title"
						name="title"
						type="text"
						placeholder="Title"
						required
					></input>
				</div>
				<div className="flex flex-col w-full border dark:border-gray-600 lg:px-6 py-2 mt-4 rounded ">
					<label className="dark:text-white"  htmlFor="description">Description</label>
					<textarea
						className="text-gray-800 dark:text-gray-200 bg-slate-300 dark:bg-gray-600 rounded mt-2 h-12 pl-2"
						id="description"
						name="description"
						type="text"
						placeholder="Description"
						required
						rows={8}
					></textarea>
				</div>
				<div className="flex flex-col w-full border dark:border-gray-600 lg:px-6 py-2 mt-4 rounded ">
					<label className="dark:text-white"  htmlFor="stock">Stock</label>
					<input
						className="text-gray-800 dark:text-gray-200 bg-slate-300 dark:bg-gray-600 rounded mt-2 h-12 pl-2"
						id="stock"
						name="stock"
						type="number"
						min={1}
						placeholder="Stock"
						required
						defaultValue={1}
					></input>
				</div>
				<div className="flex flex-col w-full border dark:border-gray-600 lg:px-6 py-2 mt-4 rounded ">
					<label className="dark:text-white"  htmlFor="supplierName"> Supplier name</label>
					<input
						className="text-gray-800 dark:text-gray-200 bg-slate-300 dark:bg-gray-600 rounded mt-2 h-12 pl-2"
						id="supplierName"
						name="supplierName"
						type="text"
						placeholder="Supplier Name"
						defaultValue={user?.displayName}
						required
					></input>
				</div>
				<div className="flex flex-col w-full border dark:border-gray-600 lg:px-6 py-2 mt-4 rounded ">
					<label className="dark:text-white"  htmlFor="price">Price</label>
					<input
						className="text-gray-800 dark:text-gray-200 bg-slate-300 dark:bg-gray-600 rounded mt-2 h-12 pl-2"
						id="Price"
						name="price"
						type="number"
						min={1}
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
