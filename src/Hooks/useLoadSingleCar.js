import  { useEffect, useState } from "react"

const useLoadSingleCar = (url) => {
	const [car, setCar] = useState()
	useEffect(() => {
		fetch(url)
			.then((res) => res.json())
			.then((data) => setCar(data))
	}, [])
	return { car, setCar }
}

export default useLoadSingleCar
