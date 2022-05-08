import React from "react"
import SingleTestimonial from "./SingleTestimonial"
import useLoadTestimonials from "../Hooks/useLoadTestimonials"
import Spinner from "./Spinner"

const Testimonials = () => {
	const { testimonial } = useLoadTestimonials()
	if (!testimonial) {
		return <Spinner></Spinner>
	}
	return (
		<div id="testimonials">
			<div className="py-16 border-y-2 border-gray-400">
				<div className="container mx-auto px-4 flex flex-col-reverse lg:items-center justify-between lg:flex-row">
					<div className="mb-14 xl:mb-0">
						<h1 className="hidden lg:block text-2xl leading-tight md:text-4xl xl:text-5xl font-semibold text-gray-800 dark:text-gray-200 xl:w-2/3 pr-16 lg:pr-0">
							Our supplier love us
						</h1>
						<p className="mt-4 text-base leading-normal text-gray-600 dark:text-gray-400 md:w-2/3 lg:w-3/4 pr-16 lg:pr-0">
							Over 500 showroom stay with us.
						</p>
						<a
							href="#customer-review"
							className="md:block w-full sm:w-auto mt-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 flex items-start justify-center sm:justify-start px-8 py-4 bg-indigo-700 hover:bg-gray-400 rounded text-base font-medium leading-none text-center text-white"
						>
							Add your feedback here
						</a>
					</div>
					<div
						role="list"
						aria-label="Testimonials"
						className="xl:w-1/2 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 flex-wrap justify-center items-start"
					>
						{testimonial.map((t) => (
							<SingleTestimonial
								
								key={t._id}
								t={t}
							></SingleTestimonial>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Testimonials
