import { useEffect, useState } from "react"

const useTotalCar = () => {
	const [totalCar, setTotalCar] = useState()
    useEffect(() => {
		fetch('https://quiet-mesa-05314.herokuapp.com/total-car', {
			headers: {}
		})
	},[])
   
}