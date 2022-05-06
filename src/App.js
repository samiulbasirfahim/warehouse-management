import AnimatedCursor from "react-animated-cursor"
import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import RequireAuth from "./Components/RequireAuth"
import useDarkMode from "./Hooks/useDarkMode"
import AddProduct from "./Pages/AddProduct"
import EditCarInfo from "./Pages/EditCarInfo"
import Home from "./Pages/Home"
import Inventory from "./Pages/Inventory"
import Login from "./Pages/Login"
import MyCars from "./Pages/MyCars"
import Register from "./Pages/Register"
import ResetPassword from "./Pages/ResetPassword"
import Feedback from "./Pages/Feedback"
import ReviewCar from "./Pages/ReviewCar"
import Footer from "./Shared/Footer"
import Header from "./Shared/Header"

function App() {
	const { darkMode, handleDarkMode } = useDarkMode()
	console.log(darkMode)
	return (
		<div className={`${darkMode && "dark"}`}>
			<AnimatedCursor />
			<div className="min-h-[100vh] dark:bg-gray-700">
				<Header
					darkMode={darkMode}
					handleDarkMode={handleDarkMode}
				></Header>
				{/* 
    React router routes setup
    */}
				<Routes>
					<Route path="/" element={<Home></Home>}></Route>
					<Route path="/login" element={<Login></Login>}></Route>
					<Route
						path="/register"
						element={<Register></Register>}
					></Route>

					<Route
						path="/reset-password"
						element={<ResetPassword></ResetPassword>}
					></Route>
					<Route
						path="/review/:carId"
						element={
							<RequireAuth>
								<ReviewCar></ReviewCar>
							</RequireAuth>
						}
					></Route>
					<Route
						path="/feedback"
						element={<Feedback></Feedback>}
					></Route>
					<Route
						path="/inventory"
						element={
							<RequireAuth>
								<Inventory></Inventory>
							</RequireAuth>
						}
					></Route>
					<Route
						path="/add-car"
						element={
							<RequireAuth>
								<AddProduct />
							</RequireAuth>
						}
					></Route>
					<Route
						path="/my-cars"
						element={
							<RequireAuth>
								<MyCars></MyCars>
							</RequireAuth>
						}
					></Route>
					<Route
						path="/edit-car/:id"
						element={
							<RequireAuth>
								<EditCarInfo />
							</RequireAuth>
						}
					></Route>
				</Routes>
				<Footer></Footer>
			</div>
			<Toaster />
		</div>
	)
}

export default App
