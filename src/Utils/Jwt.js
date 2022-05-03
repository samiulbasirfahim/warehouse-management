const createJwtToken = (email) => {
	fetch("http://localhost:5000/create-jwt-token", {
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
