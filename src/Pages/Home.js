import React from "react"
import HomeBanner from "../Components/HomeBanner"
import InventoryOverview from "../Components/InventoryOverview"
import ReactHelmet from "../Components/ReactHelmet"

const Home = () => {
	return (
		<div>
			<ReactHelmet>Home</ReactHelmet>
			<HomeBanner></HomeBanner>
			<InventoryOverview></InventoryOverview>
		</div>
	)
}

export default Home
