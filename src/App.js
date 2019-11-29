import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Header from "./pages/Header";
import Navigation from "./components/Navigation";
import AboutMe from "./pages/AboutMe";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<Navigation />
			<Route exact path="/" component={AboutMe} />
			<Route path="/about-me" component={AboutMe} />
			<Route path="/skills" component={Skills} />
			<Route path="/projects" component={Projects} />
			<Route path="/contact-me" component={ContactMe} />

			<Footer />
		</div>
	);
}

export default App;
