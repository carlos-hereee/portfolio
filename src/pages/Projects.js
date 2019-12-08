import React from "react";

import { Icon } from "semantic-ui-react";

import mesofunny from "../assets/mesofunny.PNG";
import bnb from "../assets/bnb.PNG";
import school from "../assets/school.PNG";
import "./projectScss.scss";

export default function Projects() {
	return (
		<div className="project-container">
			<h1>MY PROJECTS</h1>
			<div className="project-header">
				<FrontEndProject />
				<BackEndProject />
			</div>
		</div>
	);
}
function FrontEndProject() {
	return (
		<div className="frontEnd">
			<h2>FRONTEND</h2>
			<div className="img">
				<a href="https://mesofunny2019.netlify.com/">
					<img
						src={mesofunny}
						alt="mesofunny"
						style={{ width: "150px" }}
					/>
				</a>
			</div>
			<div className="cards">
				<div className="card">
					<div className="body">
						<h3>DAD JOKES</h3>
						<h5>Front end project using React and Redux</h5>

						<p>
							You're a funny guy, but you keep losing your list of
							jokes and forgetting which ones had the best
							reactions! Well worry no more- Dad (or bad??) jokes
							app to the rescue.
						</p>
						<div className="project-btn">
							<a href="https://mesofunny2019.netlify.com/">
								View Site
							</a>
							<a
								href="https://github.com/mesofunny/front-end"
								style={{ color: "black" }}
							>
								<Icon name="github" size="large" />
							</a>
						</div>
					</div>
				</div>
				<div className="cards">
					<div className="img">
						<a href="https://nervous-leakey-68fd24.netlify.com/">
							<img
								src={school}
								alt="mesofunny"
								style={{ width: "150px", height: "150px" }}
							/>
						</a>
					</div>
					<div className="card">
						<div className="body">
							<h3>SCHOOL CALENDAR</h3>
							<h5>Frontend project using React</h5>
							<p>
								Help School teacher and coaches coordinate with
								their students
							</p>
							<div className="project-btn">
								<a href="https://nervous-leakey-68fd24.netlify.com/">
									View Site
								</a>
								<a
									href="https://github.com/Lambda-School-Labs/school-calendar-fe"
									style={{ color: "black" }}
								>
									<Icon name="github" size="large" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
function BackEndProject() {
	return (
		<div className="backend">
			<h2>BACKEND</h2>
			<div className="img">
				<a href="https://frontend-git-master.surfsol.now.sh/dashboard">
					<img src={bnb} alt="mesofunny" style={{ width: "150px" }} />
				</a>
			</div>
			<div className="cards">
				<div className="card">
					<div className="body">
						<h3>AIR BNB</h3>
						<h5>Node.js, MySQL</h5>

						<p>
							An app that uses past AirBnB datasets to determine
							the optimal pricing of an AirBnB unit based upon
							features such as geographic location, size,
							bedrooms, etc.
						</p>
						<div className="project-btn">
							<a href="https://frontend-git-master.surfsol.now.sh/dashboard">
								View Site
							</a>
							<a
								href="https://github.com/AirBNBOptimalPrice/bnb-web-backend"
								style={{ color: "black" }}
							>
								<Icon name="github" size="large" />
							</a>
						</div>
					</div>
				</div>
				<div className="cards">
					<div className="img">
						<a href="https://nervous-leakey-68fd24.netlify.com/">
							<img
								src={school}
								alt="mesofunny"
								style={{ width: "150px", height: "150px" }}
							/>
						</a>
					</div>
					<div className="card">
						<div className="body">
							<h3>SCHOOL CALENDAR</h3>

							<h5>React</h5>
							<p>
								Help School teacher and coaches coordinate with
								their students
							</p>
							<div className="project-btn">
								<a href="https://nervous-leakey-68fd24.netlify.com/">
									View Site
								</a>
								<a
									href="https://github.com/Lambda-School-Labs/school-calendar-be"
									style={{ color: "black" }}
								>
									<Icon name="github" size="large" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
