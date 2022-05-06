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
				} else  {
					event.target.reset()
					toast("Product not edited")
				}
				// console.log(data)
			})
	}
	return (
		<div className="flex pt-[14vh] w-full justify-center items-center min-h-screen">
			<ReactHelmet>Add car</ReactHelmet>
			<form
				className="bg-slate-100 rounded p-6 w-5/6 flex flex-col"
				onSubmit={handleEditCar}
			>
				<div className="flex flex-col border lg:px-6 py-2 mt-4 rounded ">
					<label htmlFor="imgLink">Image link</label>
					<div className="flex justify-between items-center">
						<input
                            onChange={(e) => setCarInfo({...car, imgLink: e.target.value})}
							defaultValue={car?.imgLink}
							className="text-gray-800 w-full bg-slate-300 mr-6 rounded mt-2 h-12"
							id="imgLink"
							name="imgLink"
							type="text"
							placeholder="Image Link"
							required
						></input>
						<img className="lg:w-64 w-36" src={!carInfo.imgLink ? car?.imgLink : carInfo.imgLink} alt="" />
					</div>
				</div>
				<div className="flex flex-col w-full border lg:px-6 py-2 mt-4 rounded ">
					<label htmlFor="title">Title / car name</label>
					<input
						defaultValue={car?.title}
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
						defaultValue={car?.description}
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
						defaultValue={car?.stock}
						className="text-gray-800 bg-slate-300 rounded mt-2 h-12 pl-2"
						id="stock"
						name="stock"
						type="number"
						min={1}
						placeholder="Stock"
						required
					></input>
				</div>
				<div className="flex flex-col w-full border lg:px-6 py-2 mt-4 rounded ">
					<label htmlFor="supplierName"> Supplier name</label>
					<input
						defaultValue={car?.supplierName}
						className="text-gray-800 bg-slate-300 rounded mt-2 h-12 pl-2"
						id="supplierName"
						name="supplierName"
						type="text"
						placeholder="Supplier Name"
						required
					></input>
				</div>
				<div className="flex flex-col w-full border lg:px-6 py-2 mt-4 rounded ">
					<label htmlFor="price">Price</label>
					<input
						defaultValue={car?.price}
						className="text-gray-800 bg-slate-300 rounded mt-2 h-12 pl-2"
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

export default EditCarInfo
