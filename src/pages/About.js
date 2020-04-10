import React from "react";

import Pic from "../assets/carlos-hernandez-picture.PNG";

import "./pages.scss";

export default function AboutMe() {
	return (
		<div className="about-me">
			<div className="img">
				<img src={Pic} alt="img" />
			</div>
			<div className="about-me-content">
				<h1 style={{ textAlign: "center" }}>ABOUT ME</h1>
				<h2>
					I am Carlos Hernandez, full stack web developer from Houston, Texas
				</h2>
				<h3>
					I'm currently sharpening my skills and learning lots of new
					technologies on a Lambda School's team
				</h3>
				<h3>What brought me here?</h3>
				<p>
					When I was in the 5th grade. I had never seen a computer before in my
					life and I had the computer lab as part of my one of my objectives.
					The first we had to do in the class were typing lessons. I remember it
					was the coolest thing ever. I pressed a key in the keyboard and I
					remember I geeked out so bad. Other students were making fun of me but
					I did not care. I continued to geek out.
				</p>
				<h3>My current time in Lambda School/ Why I enjoy coding?</h3>
				<p>
					To this day I do not regret sign up to be a Lambda School. I learned
					everything from a vanilla HTML to building functional and deploying
					websites. Working in a team of developers and collaborating with Data
					Scientist and UX Designers. We were able to tackle tough projects with
					effective communication.
				</p>
				<h1 style={{ textAlign: "center" }}>MY TECH SKILLS</h1>
				<ul className="list">
					<ol>HTML</ol>
					<ol>CSS & SCSS</ol>
					<ol>JavaScript</ol>
					<ol>React</ol>
					<ol>Redux</ol>

					<ol>Firebase</ol>
					<ol>Node.js</ol>
					<ol>MySQL</ol>
				</ul>
			</div>
		</div>
	);
}
