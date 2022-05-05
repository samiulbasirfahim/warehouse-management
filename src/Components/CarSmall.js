import { signOut } from "firebase/auth"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { MdDelete, MdEdit, MdPreview } from "react-icons/md"
import { Link, useLocation, useNavigate } from "react-router-dom"
import auth from "../firebase.init"

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
	return (
		<div className="bg-slate-300 w-[95%] lg:w-5/6  flex flex-col lg:flex-row lg:items-center lg:justify-between rounded-2xl">
			<div className="flex justify-between lg:w-3/4 px-4 py-2">
				<img
					className="h-16 lg:h-36  rounded-2xl"
					src={imgLink}
					alt=""
				/>
				<div className="flex flex-col justify-center">
					<p className="font-bold">{title}</p>
					<p className="flex justify-evenly font-thin font-mono text-gray-700">
						Stock:{stock}{" "}
						<span className="ml-2"> Price:${price}</span>
					</p>
				</div>
			</div>
			<dir className="flex lg:w-1/4 justify-around">
				<Link state={{ from: location }} to={`/review/${_id}`}>
					<MdPreview size={"2em"} />
				</Link>
				<button onClick={handleDelete}>
					<MdDelete size={"2em"} />
				</button>
				<span>
					<MdEdit size={"2em"} />
				</span>
			</dir>
		</div>
	)
}

export default CarSmall
