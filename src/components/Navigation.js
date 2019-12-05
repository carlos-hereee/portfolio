import React from "react";
import { Link } from "react-router-dom";

import "../pages/projectScss.scss";

export default function Navigation() {
	return (
		<div className="navigation">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Link to="/projects/front-end-projects">Projects</Link>
			<Link to="/contact-me">Contact</Link>
		</div>
	);
}
