import { signOut } from "firebase/auth"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { Link, useLocation, useNavigate, useParams } from "react-router-dom"
import { PropagateLoader } from "react-spinners"
import ReactHelmet from "../Components/ReactHelmet"
import auth from "../firebase.init"
import useLoadSingleCar from "../Hooks/useLoadSingleCar"

const ReviewCar = () => {
	const location = useLocation()
	const navigate = useNavigate()
	const from = location?.state?.from || "/"
	const { carId } = useParams({})
	const [user] = useAuthState(auth)
	const { car, setCar } = useLoadSingleCar(carId)
	if (!car) {
		return (
			<div className="h-screen w-screen flex items-center justify-center">
				<PropagateLoader speedMultiplier={6}></PropagateLoader>
			</div>
		)
	}
	const jwtToken = JSON.parse(
		window.localStorage.getItem("authorization-token")
	)
	const handleDelivere = () => {
		fetch("https://quiet-mesa-05314.herokuapp.com/delivered/" + car._id, {
			headers: {
				"content-type": "application/json",
				Authorization: `Bearer ${jwtToken}`,
				email: user?.email,
			},
		})
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					signOut(auth)
					navigate("/login")
				}
				return res.json()
			})
			.then((data) => {
				console.log(data)
				toast.success("Product delivered successfully")
				if (data.modifiedCount > 0) {
					setCar({
						...car,
						stock: +car?.stock - 1,
						sold: +car?.sold + 1,
					})
				}
				// else if (data.delete === "deleted") {
				// 	navigate(from)
				// }
			})
	}
	const handleAddStock = (event) => {
		event.preventDefault()
		const stock = +event.target.stock.value
		fetch(
			"https://quiet-mesa-05314.herokuapp.com/add-car-stock/" + car._id,
			{
				headers: {
					"content-type": "application/json",
					Authorization: `Bearer ${jwtToken}`,
					email: user?.email,
				},
				body: JSON.stringify({ stock: stock }),
				method: "POST",
			}
		)
			.then((res) => {
				if (res.status === 401 || res.status === 403) {
					signOut(auth)
					navigate("/login")
				}
				return res.json()
			})
			.then((data) => {
				if (data.modifiedCount > 0) {
					event.target.reset()
					setCar({ ...car, stock: +car.stock + stock })
					toast.success(`${stock} more car added to stock.`)
				}
			})
	}
	const title = car?.title
	return (
		<div className="min-h-screen pt-[14vh] lg:px-8 xl:px-26 2xl:px-36 overflow-x-hidden ">
			<div className="flex items-center justify-between">
				<ReactHelmet>{title}</ReactHelmet>
				<div className="lg:flex  items-center justify-center py-12 2xl:px-20 lg:px-6 px-2">
					<div className="xl:w-2/6 lg:w-2/5 w-80 lg:block hidden">
						<img className="w-full" alt="" src={car?.imgLink} />
					</div>
					<div className="lg:hidden">
						<img className="w-full" alt="" src={car?.imgLink} />
					</div>
					<div className="xl:w-2/5 lg:w-1/2 lg:ml-6 lg:mt-0 mt-6">
						<div className="border-b border-gray-200 pb-6">
							<h1
								className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
							>
								{car?.title}
							</h1>
						</div>

						<div>
							<p className="xl:pr-48 text-base lg:leading-tight leading-normal text-gray-800 mt-7">
								{car?.description}
							</p>
							<p className="text-base leading-4 mt-2 text-gray-400">
								Product id: {car?._id}
							</p>

							{car.stock > 0 ? (
								<p className="text-base leading-4 mt-4 text-blue-600">
									Stocks: {car?.stock != 0 && car?.stock}
								</p>
							) : (
								<p className="text-base leading-4 mt-4 text-red-600">
									out of stock
								</p>
							)}
							<p className="text-base leading-4 mt-4 text-purple-600">
								sold : {car?.sold}
							</p>
							<p className="text-base leading-4 mt-4 text-green-600">
								Supplier : {car?.supplierName}
							</p>
							<p className="text-base leading-4 mt-4 text-red-600">
								Price: ${car?.price}
							</p>
							<div className="flex justify-center">
								{car.stock > 0 && (
									<button
										onClick={handleDelivere}
										className="text-white bg-[#90ba14] hover:bg-[#90ba14]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 mr-2"
									>
										Delivered
									</button>
								)}
							</div>
							<form
								className=" mt-6 py-2 px-6 rounded-lg bg-slate-100 grid"
								onSubmit={handleAddStock}
							>
								<label
									htmlFor="stock"
									className="my-2 font-semibold"
								>
									Add more on stock
								</label>
								<input
									type="number"
									name="stock"
									min={0}
									className="h-10  rounded"
									id="addItem"
								/>
								<input
									className="bg-[#ff5722] py-2 cursor-pointer mt-4 rounded"
									type="submit"
									value="Add to stock"
								/>
							</form>
						</div>
					</div>
				</div>
			</div>
			<Link
				className="text-white lg:mx-auto block text-2xl mx-8 lg:w-1/2 bg-[#90ba14] hover:bg-[#90ba14]/80 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50  rounded-lg font-bold px-5 py-2.5 text-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30"
				to="/inventory"
			>
				Manage Inventory
			</Link>
		</div>
	)
}

export default ReviewCar
