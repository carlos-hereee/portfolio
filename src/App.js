import React from "react";
import { Route } from "react-router-dom";

//adding components
import Navigation from "./pages/Navigation";
import ContactMe from "./pages/ContactMe";
import Projects from "./pages/Projects";
import Footer from "./pages/Footer";
import AboutMe from "./pages/About";

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
