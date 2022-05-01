import React from "react"

const Product = () => {
	const imageLink =
		"https://i.ibb.co/HdHRC61/pexels-alex-andrews-821651-1.jpg"
	return (
		<div
			className="bg-white rounded w-4/5 mx-auto grid lg:grid-cols-2"
			data-aos="fade-left"
		>
            <img data-aos="flip-left" src={imageLink} alt="" />
			<p
				className="text-4xl py-12 text-center font-bold font-mono"
				data-aos="fade-up"
				data-aos-duration="1000"
			>
				Hot products
			</p>
		</div>
	)
}

export default Product
