import React from "react";
import { Route } from "react-router-dom";

//adding components
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import About from "./pages/About";

import "./index.css";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact-me" component={ContactMe} />
			<Footer />
		</div>
	);
}

export default App;
