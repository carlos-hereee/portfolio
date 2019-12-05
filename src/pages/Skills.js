import React from "react";

import { Card } from "semantic-ui-react";
import "./skills.scss";

export default function Skills() {
	return (
		<div className="skills-container">
			<h1 className="title">Skills</h1>
			<div className="skills-header">
				<div className="button">Front End Languages and Frameworks</div>
				<div className="button">Back-end Languages and Frameworks</div>
			</div>
			<div
				className="skills-body"
				style={{
					display: "flex",
					justifyContent: "space-around",
					marginTop: "20px",
				}}
			>
				<FrontEnd />
				<BackEnd />
			</div>
		</div>
	);
}
function FrontEnd() {
	return (
		<div className="frontend" style={{ width: "40%" }}>
			<Card.Group>
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
		</div>
	);
}
function BackEnd() {
	return (
		<div className="backend" style={{ marginTop: "none", width: "40%" }}>
			<Card.Group style={{ textAlign: "right" }}>
				<Card
					style={{ height: "47.16px" }}
					fluid
					color="yellow"
					header="Node"
				/>
				<Card
					style={{ height: "47.16px" }}
					fluid
					color="yellow"
					header="Firebase"
				/>
				<Card
					style={{ height: "47.16px" }}
					fluid
					color="yellow"
					header="MySQL"
				/>
			</Card.Group>
		</div>
	);
}
