import React from "react"
import HomeBanner from "../Components/HomeBanner"
import InventoryOverview from "../Components/InventoryOverview"
import ReactHelmet from "../Components/ReactHelmet"
import CustomerReview from "./CustomerReview"

const Home = () => {
	return (
		<div>
			<ReactHelmet>Home</ReactHelmet>
			<HomeBanner></HomeBanner>
			<InventoryOverview></InventoryOverview>
			<CustomerReview></CustomerReview>
		</div>
	)
}

export default Home
