import React, { useEffect, useState } from "react";
import { client } from "../utils/axios";

import { Icon, Loader } from "semantic-ui-react";

import mesofunny from "../assets/mesofunny.PNG";
import bnb from "../assets/bnb.PNG";
import school from "../assets/school.PNG";
import "./pages.scss";

export default function Projects() {
	const [projects, setProjects] = useState([]);
	useEffect(() => {
		async function getProjects() {
			const get = await client().get("/projects");
			const { projects } = get.data;
			setProjects(projects);
		}
		getProjects();
	}, []);
	console.log("projects", projects);
	return (
		<div className="project-container">
			<h1>MY PROJECTS</h1>
			{projects && projects ? (
				projects.map((data) => (
					<div key={data.id} className="project-header">
						<div className="project-name">
							<div className="project-img">
								<a href={data.website}>
									<img
										src={mesofunny}
										alt="mesofunny"
										style={{ width: "150px" }}
									/>
								</a>
							</div>
							<div className="body">
								<h3>{data.title}</h3>
								<h5>{data.subtitle}</h5>
								<p>{data.description}</p>
								<div className="btn">
									<a href={data.website}>View Site</a>
									<a
										href={data.github}
										style={{ color: "black" }}
									>
										<Icon name="github" size="large" />
									</a>
								</div>
							</div>
						</div>
					</div>
				))
			) : (
				<Loader indeterminate>Loading</Loader>
			)}
		</div>
	);
}
{
	/**

				<div className="school-calendar">
					<div className="body">
						<h3>SCHOOL CALENDAR</h3>
						<h5>Backend project using Node.js and MySQL</h5>
						<h5>Frontend project using React</h5>
						<p>
							Help School teacher and coaches coordinate with
							their students
						</p>
						<div className="btn">
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
					<div className="school-calendar-img">
						<a href="https://nervous-leakey-68fd24.netlify.com/">
							<img
								src={school}
								alt="school calendar"
								style={{ width: "150px", height: "150px" }}
							/>
						</a>
					</div>
				</div>
				<div className="air-bnb">
					<div className="air-bnb-img">
						<a href="https://frontend.surfsol.now.sh/">
							<img
								src={bnb}
								alt="bnb"
								style={{ width: "150px" }}
							/>
						</a>
					</div>
					<div className="body">
						<h3>AIR BNB</h3>
						<h5>Node.js, MySQL</h5>

						<p>
							An app that uses past AirBnB datasets to determine
							the optimal pricing of an AirBnB unit based upon
							features such as geographic location, size,
							bedrooms, etc.
						</p>
						<div className="btn">
							<a href="https://frontend.surfsol.now.sh/">
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
			</div>

	 */
}
