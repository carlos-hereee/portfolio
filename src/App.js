import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

function App() {
	return (
		<div className="App">
			<Navigation />
			<Route exact path="/" component={AboutMe} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact-me" component={ContactMe} />
			<Footer />
		</div>
	);
}

export default App;
