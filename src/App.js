import Home from "./components/Home";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
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
