import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"
import RequireAuth from "./Components/RequireAuth"
import useDarkMode from "./Hooks/useDarkMode"
import AddProduct from "./Pages/AddProduct"
import Home from "./Pages/Home"
import Inventory from "./Pages/Inventory"
import Login from "./Pages/Login"
import Register from "./Pages/Register"
import ResetPassword from "./Pages/ResetPassword"
import ReviewCar from "./Pages/ReviewCar"
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
				</Routes>
			</div>
			<Toaster />
		</div>
	)
}

export default App
