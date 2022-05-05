import { useEffect, useState } from "react"

const useLoadTestimonials = () => {
	const [testimonial, setTestimonial] = useState([])
	useEffect(() => {
		fetch("https://quiet-mesa-05314.herokuapp.com/review")
			.then((response) => response.json())
			.then((data) => setTestimonial(data))
	}, [])
	return { testimonial, setTestimonial }
}

export default useLoadTestimonials
