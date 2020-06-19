import React, { useEffect, useState } from "react";
import { client } from "../utils/axios";

import { Icon, Loader } from "semantic-ui-react";

import "../stylesheets/pages.scss";

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
	// https://deploy-preview-127--labs17-school-calendar.netlify.app/
	return (
		<div className="project-container">
			<h1>MY PROJECTS</h1>
			{projects && projects ? (
				projects.map((data) => (
					<div key={data.id} className="project-header">
						<div className="project-name">
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
