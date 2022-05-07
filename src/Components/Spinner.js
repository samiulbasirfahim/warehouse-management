import React from "react"
import { PropagateLoader } from "react-spinners"

const Spinner = () => {
	return (
		<div className="h-screen bg-white dark:bg-gray-600 w-screen flex items-center justify-center">
			<PropagateLoader speedMultiplier={1}></PropagateLoader>
		</div>
	)
}

export default Spinner
