import React from "react";

import Skills from "./Skills";
import Header from "./Header";

import "./AboutMe.css";

export default function AboutMe() {
	return (
		<div>
			<div className="about-me-content">
				<Header />
			</div>
			<Skills />
		</div>
	);
}
