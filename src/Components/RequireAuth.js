import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import auth from "../firebase.init"
import VerifyEmail from "../Pages/VerifyEmail"
import Spinner from "./Spinner"

const RequireAuth = ({ children }) => {
	const [user, loading] = useAuthState(auth)
	const location = useLocation()
	if (loading) {
		return <Spinner></Spinner>
	}
	console.log(user)

	if (!user) {
		return (
			<Navigate
				to={"/login"}
				state={{ from: location }}
				replace
			></Navigate>
		)
	}
	if (!user?.emailVerified) {
		return <VerifyEmail></VerifyEmail>
	} else {
		return children
	}
}

export default RequireAuth
