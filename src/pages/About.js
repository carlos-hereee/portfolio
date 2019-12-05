import React from "react";

import Pic from "../assets/carlos-hernandez-picture.PNG";

import "./projectScss.scss";

export default function AboutMe() {
	return (
		<div className="about-container">
			<div className="about-me">
				<h1>About Me</h1>
				<img
					style={{
						width: "200px",
						margin: "1%",
					}}
					src={Pic}
					alt="img"
				/>
				<h4>My history/What brought me here?</h4>
				<h4>My current time in Lambda School/ Why I enjoy coding?</h4>
			</div>
			<div className="about-skills">
				<h1 className="title">Technical Skills</h1>
				<div className="skills-header">
					<h4>Front End Languages and Frameworks</h4>
					<ul className="list">
						<ol>HTML</ol>
						<ol>CSS & SCSS</ol>
						<ol>JavaScript</ol>
						<ol>React</ol>
						<ol>Redux</ol>
					</ul>
					<div className="button">
						<h4>Back-end Languages and Frameworks</h4>
						<ul className="list">
							<ol>Node.js</ol>
							<ol>Firebase</ol>
							<ol>MySQL</ol>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
