import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar.js";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";
import Footer from "./components/Footer";
import ScrollTop from "./components/ScrollTop";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/services" component={Services} />
					<Route path="/products" component={Products} />
					<Route path="/sign-up" component={SignUp} />
				</Switch>
				<ScrollTop />
			</Router>
		</>
	);
}

export default App;
