import React from "react"

const SingleTestimonial = ({ t: { subject, feedback, email, name } }) => {
	return (
		<div
			data-aos="zoom-in-down"
			role="listitem"
			className="shadow dark:bg-gray-800 bg-white  rounded p-4 xl:p-8 lg:rounded-br-3xl"
		>
			<img
				src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
				aria-hidden="true"
				alt=""
			/>
			<div className="pl-4 pt-4 flex items-start justify-between">
				<div className="mr-6">
					<p className="xl:text-xl xl:leading-loose text-gray-600 dark:text-gray-100">
						{feedback}
					</p>
					<p className="text-gray-500">{subject}</p>
					<p className="mt-4 text-base font-semibold leading-none text-gray-800 dark:text-gray-100">
						{name}
					</p>
					<p className="text-gray-500">{email}</p>
				</div>
				<img
					className="w-24 rounded-full hidden lg:block"
					src="https://i.ibb.co/LtSrBZh/Parker96.webp"
					alt=""
				/>
			</div>
		</div>
	)
}

export default SingleTestimonial
