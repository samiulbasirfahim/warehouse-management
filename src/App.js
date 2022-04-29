import { Route, Routes } from "react-router-dom"
import useDarkMode from "./Hooks/useDarkMode"
import Home from "./Pages/Home"
import Header from "./Shared/Header"

function App() {
	const { isDarkMode } = useDarkMode()
	return (
		<div className={`${isDarkMode && "dark"}`}>
			<div className="min-h-[100vh]">
				<Header></Header>
				{/* 
    React router routes setup
    */}
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
				</Routes>
			</div>
		</div>
	)
}

export default App
