import React from "react";
import { Link, Route } from "react-router-dom";

import "./skills.css";

export default function Skills({ match }) {
	return (
		<div>
			<div className="skills-header">
				<Link to={`${match.url}/front-end`}>
					Front End Languages and Frameworks
				</Link>
				<Link to="/back-end">Back-end Languages and Frameworks</Link>
				<Route path={`${match.url}/front-end`} component={FrontEnd} />
				{/* <Route path="/back-end">
					<ul>
						<li>Node</li>
						<li>Firebase</li>
					</ul>
				</Route> */}
			</div>
		</div>
	);
}
function FrontEnd() {
	console.log("frontend");
	return (
		<div>
			<ul>
				<li>HTML</li>
				<li>CSS & SCSS</li>
				<li>JavaScript</li>
				<li>React, Redux</li>
			</ul>
		</div>
	);
}
