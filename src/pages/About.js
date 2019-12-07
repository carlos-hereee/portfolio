import React from "react";

import Pic from "../assets/carlos-hernandez-picture.PNG";

import "./projectScss.scss";

export default function AboutMe() {
	return (
		<div className="about-container">
			<div className="about-me-wrapper">
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
					<p>
						When I was in the 5th grade. I had never seen a computer
						before in my life and I had the computer lab as part of
						my one of my objectives. The first we had to do in the
						class were typing lessons. I remember it was the coolest
						thing ever. I pressed a key in the keyboard and I
						remember I geeked out so bad. Other students were making
						fun of me but I did not care. I continued to geek out.
					</p>
					<h4>
						My current time in Lambda School/ Why I enjoy coding?
					</h4>
					<p>
						To this day I do not regret sign up to be a Lambda
						School. I learned everything from a vanilla HTML to
						building functional and deploying websites. Working in a
						team of developers and collaborating with Data Scientist
						and UX Designers. We were able to tackle tough projects
						with effective communication.
					</p>
				</div>
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
