import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import auth from "../firebase.init"

const useLoadData = (url) => {
	const [user] = useAuthState(auth)
	const email = user?.email
	const [cars, setCars] = useState([])
	const jwtToken = JSON.parse(
		window.localStorage.getItem("authorization-token")
	)

	useEffect(() => {
		fetch(url, {
			headers: {
				"content-type": "application/json",
				authorization: "Bearer " + jwtToken,
				email: email,
			},
		})
			.then((res) => res.json())
			.then((data) => setCars(data))
	}, [])
	return { cars, setCars }
}

export default useLoadData
