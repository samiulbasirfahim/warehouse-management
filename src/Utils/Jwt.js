const createJwtToken = (email) => {
	fetch("https://quiet-mesa-05314.herokuapp.com/create-jwt-token", {
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email,
		}),
		method: "POST",
	})
		.then((res) => res.json())
		.then((data) =>
			window.localStorage.setItem(
				"authorization-token",
				JSON.stringify(data.token)
			)
		)
}

export default createJwtToken
