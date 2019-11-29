import React from "react";
import { Link, Route } from "react-router-dom";

import { Card } from "semantic-ui-react";
import "./skills.scss";

export default function Skills({ match }) {
	return (
		<div className="skills-container">
			<div className="skills-header">
				<Link to={`${match.url}/front-end`}>
					<div className="button">
						Front End Languages and Frameworks
					</div>
				</Link>
				<Link to={`${match.url}/back-end`}>
					<div className="button">
						Back-end Languages and Frameworks
					</div>
				</Link>
			</div>
			<div className="skills-body">
				<Route path={`${match.url}/front-end`} component={FrontEnd} />
				<Route path={`${match.url}/back-end`} component={BackEnd} />
			</div>
		</div>
	);
}
function FrontEnd() {
	return (
		<>
			<Card.Group
				style={{
					marginTop: "10px",
					width: "220px",
					marginLeft: "40px",
				}}
			>
				<Card fluid color="yellow" header="HTML" />
				<Card fluid color="yellow" header="CSS & SCSS" />
				<Card fluid color="yellow" header="JavaScript" />
				<Card
					fluid
					color="yellow"
					header="React, Redux"
					style={{ marginBottom: "40px" }}
				/>
			</Card.Group>
		</>
	);
}
function BackEnd() {
	return (
		<>
			<Card.Group
				style={{
					marginTop: "10px",
					width: "220px",
					marginLeft: "500px",
					textAlign: "right",
				}}
			>
				<Card fluid color="yellow" header="Node" />
				<Card fluid color="yellow" header="Firebase" />
				<Card fluid color="yellow" header="MySQL" />
			</Card.Group>
		</>
	);
}
