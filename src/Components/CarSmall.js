import { signOut } from "firebase/auth"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { MdDelete, MdEdit, MdPreview } from "react-icons/md"
import { Link, useLocation, useNavigate } from "react-router-dom"
import auth from "../firebase.init"
import { confirmAlert } from "react-confirm-alert"
import "react-confirm-alert/src/react-confirm-alert.css"
const CarSmall = ({
	car: { description, imgLink, price, title, stock, supplierName, _id },
	setCars,
	cars,
}) => {
	const [user] = useAuthState(auth)
	const navigate = useNavigate()
	const jwtToken = JSON.parse(
		window.localStorage.getItem("authorization-token")
	)
	const location = useLocation()

	const handleDelete = () => {
		fetch("https://quiet-mesa-05314.herokuapp.com/delete/car/" + _id, {
			headers: {
				"content-type": "application/json",
				authorization: "Bearer " + jwtToken,
				email: user.email,
			},
			method: "DELETE",
		})
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					signOut(auth)
					navigate("/login")
				}
				return res.json()
			})
			.then((data) => {
				if (data.delete === "deleted") {
					const remaining = cars.filter((car) => car._id !== _id)
					setCars(remaining)
				}
			})
	}
	const confirmDelete = () => {
		confirmAlert({
			title: "Confirm to delete",
			message: "Are you sure to do this.",
			buttons: [
				{
					label: "Yes",
					onClick: () => handleDelete(),
				},
				{
					label: "No",
					onClick: () => {},
				},
			],
		})
	}

	return (
		<div className="bg-slate-200 dark:bg-gray-800 w-[95%] lg:w-5/6  flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-2xl">
			<div className="flex justify-between lg:w-3/4 px-4 py-2">
				<img
					className="lg:w-60 w-24  rounded-2xl"
					src={imgLink}
					alt=""
				/>
				<div className="flex flex-col justify-center">
					<p className="font-bold dark:text-white">{title}</p>
					<p className="flex justify-evenly font-thin font-mono text-gray-700 dark:text-gray-400">
						Price:${price}
					</p>
				</div>
			</div>
			<dir className="flex lg:w-1/4 py-2 px-8 lg:py-0 justify-between items-center  text-xl mt-2 lg:mt-0 dark:text-white lg:flex-col ">
				<Link
					className="mb-4"
					state={{ from: location }}
					to={`/review/${_id}`}
				>
					<MdPreview />
				</Link>

				<button onClick={confirmDelete}>
					<MdDelete />
				</button>

				<Link
					className="mt-4"
					to={"/edit-car/" + _id}
					state={{ from: location }}
				>
					<MdEdit />
				</Link>
			</dir>
		</div>
	)
}

export default CarSmall
