import React from "react"
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { ImGithub, ImGoogle } from "react-icons/im"
import auth from "../firebase.init";

const SocialLogin = () => {
	const [signInWithGoogle] = useSignInWithGoogle(auth);
	return (
		<div>
			<button className="p-3 border justify-center rounded-lg border-gray-700 flex items-center w-full mt-10 hover:bg-gray-100">
				<ImGoogle />
				<p onClick={() => signInWithGoogle()} className="text-base font-medium ml-4 text-gray-700">
					Continue with Google
				</p>
			</button>
			<button className="p-3 border justify-center rounded-lg border-gray-700 flex items-center w-full mt-4 hover:bg-gray-100">
				<ImGithub />
				<p className="text-base font-medium ml-4 text-gray-700">
					Continue with GitHub
				</p>
			</button>
			<div className="w-full flex items-center justify-between py-5">
				<hr className="w-full bg-gray-400" />
				<p className="text-base font-medium leading-4 px-2.5 text-gray-500">
					OR
				</p>
				<hr className="w-full bg-gray-400" />
			</div>
		</div>
	)
}

export default SocialLogin
