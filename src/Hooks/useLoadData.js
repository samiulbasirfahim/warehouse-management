import { useEffect, useState } from "react"

const useLoadData = (url) => {
	const [cars, setCars] = useState([])
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setCars(data))
	}, [])
	return { cars, setCars }
}

export default useLoadData
