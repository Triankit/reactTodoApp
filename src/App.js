import Home from "./components/layout/Home";
import { SignUp } from "./components/auth/SignUp";
import { SignIn } from "./components/auth/SignIn";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<SignIn />} />
				<Route path='Home' element={<Home />} />
				<Route path='SignIn' element={<SignIn />} />
				<Route path='SignUp' element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
