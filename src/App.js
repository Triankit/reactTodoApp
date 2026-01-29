import Home from "./components/layout/Home";
import { SignUp } from "./components/auth/SignUp";
import { SignIn } from "./components/auth/SignIn";
import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { initializeUserStorage } from "./utils/userData";

initializeUserStorage();

function App() {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<SignIn />} />
				<Route path='/SignIn' element={<SignIn />} />
				<Route path='/SignUp' element={<SignUp />} />
				<Route path='/Home' element={<Home />} />
				<Route path='*' element={<Navigate to='/' replace />} />
			</Routes>
		</Router>
	);
}

export default App;
