import React from "react"
import HomeBanner from "../Components/HomeBanner"
import InventoryOverview from "../Components/InventoryOverview"
import ReactHelmet from "../Components/ReactHelmet"
import CustomerReview from "./CustomerReview"
import Testimonials from "./Testimonials"

const Home = () => {
	return (
		<div>
			<ReactHelmet>Home</ReactHelmet>
			<HomeBanner></HomeBanner>
			<InventoryOverview></InventoryOverview>
			<Testimonials></Testimonials>
			<CustomerReview></CustomerReview>
		</div>
	)
}

export default Home
