import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import { Navigate, useLocation } from "react-router-dom"
import { PropagateLoader } from "react-spinners"
import auth from "../firebase.init"

const RequireAuth = ({ children }) => {
	const [user, loading] = useAuthState(auth)
	const location = useLocation()
	if (loading) {
		return (
			<div className="h-screen w-screen flex items-center justify-center">
				<PropagateLoader speedMultiplier={8}></PropagateLoader>
			</div>
		)
	}

	if (user) {
		return children
	} else {
		return (
			<Navigate
				to={"/login"}
				state={{ from: location  }}
				replace
			></Navigate>
		)
	}
}

export default RequireAuth
