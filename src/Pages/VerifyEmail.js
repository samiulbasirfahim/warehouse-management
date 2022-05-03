import { sendEmailVerification } from "firebase/auth"
import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import ReactHelmet from "../Components/ReactHelmet"
import auth from "../firebase.init"

const VerifyEmail = () => {
    const [user] = useAuthState(auth)
	const handleEmailVerification = () => {
		sendEmailVerification(auth.currentUser)
			.then(() => {
				toast("Check your email for verification mail")
			})
			.catch((err) => toast.error("Try again letters "))
	}
	return (
		<div className="bg-indigo-50  flex justify-center items-center  min-h-screen min-w-screen">
			<ReactHelmet>Verify email</ReactHelmet>
			<div className="bg-white lg:w-1/3 w-10/12 rounded shadow-2xl p-6">
				<div className="border-t-0 border-l-0 border-r-0 border-b-[#90ba14] border-2 pt-14 mb-8 pb-4">
					<p className="font-bold text-2xl text-center">
						Verify your email address
					</p>
					<p className="font-mono text-xs text-center text-gray-600">
						welcome to Rapid world
					</p>
				</div>

				<div className="mt-10 grid grid-cols-1 justify-items-center">
					<p className="text-center text-yellow-800 font-semibold">
						Your email isn't verified. Please verify it first
					</p>
                    <p className='text-sm text-slate-400'>
                        Email : {user?.email}
                    </p>
					<button
						onClick={handleEmailVerification}
						className="text-center py-2 mt-8 bg-[#90ba14] rounded-xl px-4 lg:px-8"
					>
						Send verification mail again
					</button>
					<p className='text-xs text-center my-4 text-gray-600'>if you cant find verification email check spam or junk folder</p>
				</div>
			</div>
		</div>
	)
}

export default VerifyEmail
