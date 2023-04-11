import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/pages/Home'
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import SighUp from "./components/pages/SighUp";
import './App.css';


function App() {
	return (
		<Router>
			<Navbar/>
			<Routes>
				<Route path='/' exact element={<Home />} />
				<Route path="/services" element={<Services />} />
				<Route path="/products" element={<Products />} />
				<Route path="/sign-up" element={<SighUp />} />
			</Routes>
		</Router>
	);
}

export default App;