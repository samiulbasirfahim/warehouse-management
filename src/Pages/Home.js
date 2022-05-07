import React from "react"
import HomeBanner from "../Components/HomeBanner"
import InventoryOverview from "../Components/InventoryOverview"
import RandomCar from "../Components/RandomCar"
import ReactHelmet from "../Components/ReactHelmet"
import CustomerReview from "./CustomerReview"
import Testimonials from "../Components/Testimonials"
import auth from "../firebase.init"
import { useAuthState } from "react-firebase-hooks/auth"
import { PropagateLoader } from "react-spinners"
import Location from "../Components/Location"

const Home = () => {
	const [, loading] = useAuthState(auth)
	if (loading) {
		return (
			<div className="h-screen bg-white dark:bg-gray-600 w-screen flex items-center justify-center">
				<PropagateLoader speedMultiplier={1}></PropagateLoader>
			</div>
		)
	}
	return (
		<div>
			<ReactHelmet>Home</ReactHelmet>
			<HomeBanner></HomeBanner>
			<InventoryOverview></InventoryOverview>
			<RandomCar></RandomCar>
			<Location></Location>
			<Testimonials></Testimonials>
			<CustomerReview></CustomerReview>
		</div>
	)
}

export default Home
