import { data } from "autoprefixer"
import React, { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { PropagateLoader } from "react-spinners"
import CarSmall from "../Components/CarSmall"
import ReactHelmet from "../Components/ReactHelmet"
import auth from "../firebase.init"

const MyCars = () => {
	const [user] = useAuthState(auth)
	const [myCars, setMyCars] = useState(null)
	const jwtToken = JSON.parse(
		window.localStorage.getItem("authorization-token")
	)
	useEffect(() => {
		fetch("https://quiet-mesa-05314.herokuapp.com/my-cars", {
			headers: {
				authorization: "Bearer " + jwtToken,
				email: user.email,
			},
		})
			.then((res) => res.json())
			.then((data) => setMyCars(data))
	}, [])
	if (!myCars) {
		return (
			<div className="h-screen bg-white  w-screen flex items-center justify-center">
				<PropagateLoader speedMultiplier={6}></PropagateLoader>
			</div>
		)
	}
	return (
		<div className="bg-white min-h-screen min-w-screen pt-[16vh] md:px-8 px-4 xl:px-26 2xl:px-36">
			<ReactHelmet>My cars</ReactHelmet>
			<p className="text-4xl py-2 text-center font-bold font-mono">
				My cars
			</p>
			<div className={"grid justify-items-center gap-y-8"}>
				{myCars.length === 0 && (
					<div className={"flex justify-center items-center h-[70vh]"}>
						<p className="text-2xl text-red-600 font-bold font-mono ">You didn't add any cars</p>
					</div>
				)}
				{Array.isArray(myCars) && myCars.map((car) => (
					<CarSmall
						key={car._id}
						setCars={setMyCars}
						cars={myCars}
						car={car}
					></CarSmall>
				))}
			</div>
		</div>
	)
}

export default MyCars
