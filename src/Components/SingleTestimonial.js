import React from "react"

const SingleTestimonial = ({ t: { subject, feedback, email, name } }) => {
	return (
		<div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
			<img
				src="https://cdn.tuk.dev/assets/components/26May-update/quote.png"
				aria-hidden="true"
				alt=""
			/>
			<div className="pl-4 pt-4 flex items-start justify-between">
				<div className="mr-6">
					<p className="xl:text-xl xl:leading-loose text-gray-600">
						{feedback}
					</p>
					<p className="text-gray-500">{subject}</p>
					<p className="mt-4 text-base font-semibold leading-none text-gray-800">
						{name}
					</p>
					<p className="text-gray-500">{email}</p>
				</div>
				<img
					className="w-24 rounded-full"
					src="https://i.ibb.co/LtSrBZh/Parker96.webp"
					alt=""
				/>
			</div>
		</div>
	)
}

export default SingleTestimonial
