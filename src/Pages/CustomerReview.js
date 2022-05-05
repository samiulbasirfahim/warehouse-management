import React from "react"
import { useAuthState } from "react-firebase-hooks/auth"
import toast from "react-hot-toast"
import { Link, useLocation } from "react-router-dom"
import auth from "../firebase.init"

const CustomerReview = () => {
	const [user] = useAuthState(auth)
	const location = useLocation()
	const jwtToken = JSON.parse(
		window.localStorage.getItem("authorization-token")
	)

	const handleReview = (event) => {
		event.preventDefault()
		const subject = event.target.subject.value
		const feedback = event.target.feedback.value
		const email = user.email
		const name = user.displayName
		fetch("https://quiet-mesa-05314.herokuapp.com/add-review", {
			method: "POST",
			headers: {
				"content-type": "application/json",
				authorization: "Bearer " + jwtToken,
				email: user?.email,
			},
			body: JSON.stringify({
				subject,
				feedback,
				email,
				name,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.insertedId) {
					toast.success("Review added successfully")
				}
			})
	}
	return (
		<div className="lg:px-8 xl:px-26 2xl:px-36 ">
			<p className="text-4xl py-2 mt-6 text-center font-bold font-mono">
				Add a review
			</p>
			<div className="text-black py-20">
				<div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
					<div className="flex flex-col w-full lg:w-1/3 p-8">
						<p className="ml-6 text-yellow-300 text-lg uppercase tracking-loose">
							REVIEW
						</p>
						<p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
							Leave us a feedback!
						</p>
						<p className="text-sm md:text-base leading-snug text-gray-600 text-opacity-100">
							Latest 3 review are show in testimonial page .
						</p>
					</div>
					<div className="flex flex-col w-full lg:w-2/3 justify-center">
						<div className="container w-full px-4">
							<div className="flex flex-wrap justify-center">
								<div className="w-full lg:w-6/12 px-4">
									<div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
										<div className="flex-auto p-5 lg:p-10">
											<h4 className="text-2xl mb-4 text-black font-semibold">
												Have a suggestion?
											</h4>
											<form
												id="feedbackForm"
												onSubmit={handleReview}
											>
												<div className="relative w-full mb-3">
													<label
														className="block uppercase text-gray-700 text-xs font-bold mb-2"
														htmlFor="subject"
													>
														Subject
													</label>
													<input
														type="text"
														name="subject"
														id="subject"
														className="border-0 px-3 py-3 rounded text-sm shadow w-full
                    bg-gray-300 placeholder-black text-gray-800 outline-none focus:bg-gray-400"
														placeholder=" "
														style={{
															transition:
																" all 0.15s ease 0s",
														}}
														required
													/>
												</div>
												<div className="relative w-full mb-3">
													<label
														className="block uppercase text-gray-700 text-xs font-bold mb-2"
														htmlFor="message"
													>
														Message
													</label>
													<textarea
														maxLength="300"
														name="feedback"
														id="feedback"
														rows="4"
														cols="80"
														className="border-0 px-3 py-3 bg-gray-300 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
														placeholder=""
														required
													></textarea>
												</div>
												<div className="text-center mt-6">
													{!user ? (
														<div>
															<p className="text-red-600 py-6">
																Your must login
																first for give
																us feedback
															</p>
															<Link
																to={"/login"}
																state={{
																	from: location,
																}}
																className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1"
															>
																Go login page
															</Link>
														</div>
													) : (
														<button
															id="feedbackBtn"
															className="bg-yellow-300 text-black text-center mx-auto active:bg-yellow-400 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
															type="submit"
															style={{
																transition:
																	" all 0.15s ease 0s",
															}}
														>
															Submit
														</button>
													)}
												</div>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CustomerReview
