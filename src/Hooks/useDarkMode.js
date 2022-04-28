import { useEffect, useState } from "react"

const useDarkMode = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)
	useEffect(() => {
		const previousDarkMode = JSON.parse(
			window.localStorage.getItem("darkMode")
		)
		setIsDarkMode(previousDarkMode)
	}, [])
	const handleDarkMode = () => {
		setIsDarkMode(!isDarkMode)
		window.localStorage.setItem("darkMode", JSON.stringify(isDarkMode))
	}

	return { isDarkMode, handleDarkMode }
}

export default useDarkMode
