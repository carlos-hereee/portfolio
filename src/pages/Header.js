import React from "react";
import Pic from "../assets/carlos-hernandez-picture.PNG";

import "./Header.scss";

export default function Header() {
	return (
		<div className="Header">
			<div className="mission">
				<img
					style={{
						width: "200px",
						margin: "1%",
					}}
					src={Pic}
				/>
				<h4> Mission Statement </h4>
				<p>
					Have an insatible passion for learning new technologies and
					improving my skill.
				</p>
			</div>
			<div className="bio">
				<h2>Hello, I'm Carlos Hernandez.</h2>
				<h2>I'm a full-stack web developer.</h2>
				<p>This is a showcase of my projects and my abilities</p>
			</div>
		</div>
	);
}
