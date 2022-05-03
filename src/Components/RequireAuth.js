import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import { PropagateLoader } from "react-spinners"
import auth from "../firebase.init"
import VerifyEmail from "../Pages/VerifyEmail"

const RequireAuth = ({ children }) => {
	const [user, loading] = useAuthState(auth)
	const location = useLocation()
	if (loading) {
		return (
			<div className="h-screen bg-indigo-50  w-screen flex items-center justify-center">
				<PropagateLoader speedMultiplier={6}></PropagateLoader>
			</div>
		)
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
