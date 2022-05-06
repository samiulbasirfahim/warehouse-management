import { signOut } from "firebase/auth"
import React, { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { PropagateLoader } from "react-spinners"
import ReactHelmet from "../Components/ReactHelmet"
import auth from "../firebase.init"
import useLoadSingleCar from "../Hooks/useLoadSingleCar"

const EditCarInfo = () => {
	const [user] = useAuthState(auth)
	const navigate = useNavigate()
	const location = useLocation()
	const from = location?.state?.from || "/"
	const { id } = useParams()
	const { car } = useLoadSingleCar(id)
	const [carInfo, setCarInfo] = useState({
		img: "",
	})
	if (!car) {
		return (
			<div className="h-screen   w-screen flex items-center justify-center">
				<PropagateLoader speedMultiplier={6}></PropagateLoader>
			</div>
		)
	}
	const handleEditCar = (event) => {
		event.preventDefault()
		console.log(event)
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
			addedBy: user?.email,
		}
		fetch("https://quiet-mesa-05314.herokuapp.com/edit-car/" + id, {
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
				if (data?.modifiedCount > 0) {
					navigate(from)

					toast("Product edited successfully")
				} else {
					event.target.reset()
					toast("Product not edited")
				}
				// console.log(data)
			})
	}
	return (
		<div className="flex pt-[14vh] w-full justify-center items-center min-h-screen">
			<ReactHelmet>Edit</ReactHelmet>
			<form
				className="bg-slate-100 dark:bg-gray-800 rounded p-6 w-5/6 flex flex-col"
				onSubmit={handleEditCar}
			>
				<div className="flex flex-col border dark:border-gray-600 lg:px-6 py-2 mt-4 rounded ">
					<label className="dark:text-white" htmlFor="imgLink">
						Image link
					</label>
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
							defaultValue={car?.imgLink}
						></input>
						<img
							className="lg:w-64 w-36"
							src={carInfo.img}
							alt=""
						/>
					</div>
				</div>
				<div className="flex flex-col w-full border dark:border-gray-600  dark:border-gray-600-gray-600 lg:px-6 py-2 mt-4 rounded ">
					<label className="dark:text-white" htmlFor="title">
						Title / car name
					</label>
					<input
						className="text-gray-800 dark:text-gray-200 bg-slate-300 dark:bg-gray-600 rounded mt-2 h-12 pl-2"
						id="title"
						name="title"
						type="text"
						placeholder="Title"
						required
						defaultValue={car?.title}
					></input>
				</div>
				<div className="flex flex-col w-full border dark:border-gray-600 lg:px-6 py-2 mt-4 rounded ">
					<label className="dark:text-white" htmlFor="description">
						Description
					</label>
					<textarea
						className="text-gray-800 dark:text-gray-200 bg-slate-300 dark:bg-gray-600 rounded mt-2 pl-2"
						id="description"
						name="description"
						type="text"
						placeholder="Description"
						required
						defaultValue={car?.description}
						rows={8}
					></textarea>
				</div>
				<div className="flex flex-col w-full border dark:border-gray-600 lg:px-6 py-2 mt-4 rounded ">
					<label className="dark:text-white" htmlFor="stock">
						Stock
					</label>
					<input
						className="text-gray-800 dark:text-gray-200 bg-slate-300 dark:bg-gray-600 rounded mt-2 h-12 pl-2"
						id="stock"
						name="stock"
						type="number"
						min={1}
						placeholder="Stock"
						required
						defaultValue={car?.stock}
					></input>
				</div>
				<div className="flex flex-col w-full border dark:border-gray-600 lg:px-6 py-2 mt-4 rounded ">
					<label className="dark:text-white" htmlFor="supplierName">
						{" "}
						Supplier name
					</label>
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
					<label className="dark:text-white" htmlFor="price">
						Price
					</label>
					<input
						className="text-gray-800 dark:text-gray-200 bg-slate-300 dark:bg-gray-600 rounded mt-2 h-12 pl-2"
						id="Price"
						name="price"
						type="number"
						min={1}
						placeholder="Price"
						required
						defaultValue={car?.price}
						
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

export default EditCarInfo
