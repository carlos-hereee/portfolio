import React from "react";
import { Link } from "react-router-dom";

import "./navigation.css";

export default function Navigation() {
	return (
		<div className="navigation">
			<Link to="/">Home</Link>
			<Link to="/projects/front-end-projects">Projects</Link>
			<Link to="/contact-me">Contact</Link>
		</div>
	);
}
