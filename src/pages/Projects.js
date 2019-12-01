import React from "react";
import { Link, Route } from "react-router-dom";

import { Button, Card } from "semantic-ui-react";
import "./projects.scss";

/* Projects
	Links to at least 2 projects, with code easily accessible + deployed link
	Best to use projects from Build Weeks, capstone project, and personal side projects
	NO sprint challenges or projects with Lambda in the title  
*/
export default function Projects({ match }) {
	return (
		<div className="project-container">
			<h1 className="title">Projects</h1>
			<div className="project-header">
				<Link to={`${match.url}/front-end-projects`}>
					<div className="button">Front End Projects</div>
				</Link>
				<Link to={`${match.url}/back-end-projects`}>
					<div className="button">Back-end Projects</div>
				</Link>
				<Link to={`${match.url}/full-stack-projects`}>
					<div className="button">Full Stack Projects</div>
				</Link>
			</div>
			<div className="project-body">
				<Route
					path={`${match.url}/front-end-projects`}
					component={FrontEndProject}
				/>
				<Route
					path={`${match.url}/back-end-projects`}
					component={BackEndProject}
				/>
				<Route
					path={`${match.url}/fullstack-projects`}
					component={FullStackProject}
				/>
			</div>
		</div>
	);
}
function FrontEndProject() {
	return (
		<div>
			<Card.Group
				style={{
					margin: "20px 40px",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Card>
					<Card.Content>
						<Card.Header>Life GPA</Card.Header>
						<Card.Meta>React and Redux</Card.Meta>
						<Card.Description>
							Users create an account, log in, and tell the app a
							list of habits they want to track. There are both
							prompts to add habits to your list, and spots to
							write your own. The app evaluates the daily habits
							and rather than calculating streaks on a calendar,
							it calculates a percentage of times a certain habit
							has been done int he past 30, 60, or 90 days. Then,
							it averages out all the habits' averages into one
							overall average. All you do is tell the app which
							habits you performed each day.
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<div className="ui two buttons">
							<Button
								inverted
								color="green"
								href="https://github.com/bw-lifegpa/Frontend"
							>
								GitHub
							</Button>
							<Button
								inverted
								color="blue"
								href="https://lifegpaproject.netlify.com"
							>
								Deployed Cite
							</Button>
						</div>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Dad Jokes</Card.Header>
						<Card.Meta>React and Redux</Card.Meta>
						<Card.Description>
							You're a funny guy, but you keep losing your list of
							jokes and forgetting which ones had the best
							reactions! Well worry no more- Dad (or bad??) jokes
							app to the rescue.
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<div className="ui two buttons">
							<Button
								inverted
								color="green"
								href="https://github.com/mesofunny/front-end"
							>
								GitHub
							</Button>
							<Button
								inverted
								color="blue"
								href="https://mesofunny2019.netlify.com/"
							>
								Deployed Cite
							</Button>
						</div>
					</Card.Content>
				</Card>
			</Card.Group>
		</div>
	);
}
function BackEndProject() {
	return (
		<div>
			<Card.Group
				style={{
					margin: "30px 40px",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Card>
					<Card.Content>
						<Card.Header>Steve Sanders</Card.Header>
						<Card.Meta>Friends of Elliot</Card.Meta>
						<Card.Description>
							Steve wants to add you to the group{" "}
							<strong>best friends</strong>
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<div className="ui two buttons">
							<Button inverted color="green">
								Approve
							</Button>
							<Button inverted color="blue">
								Decline
							</Button>
						</div>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Molly Thomas</Card.Header>
						<Card.Meta>New User</Card.Meta>
						<Card.Description>
							Molly wants to add you to the group{" "}
							<strong>musicians</strong>
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<div className="ui two buttons">
							<Button inverted color="green">
								Approve
							</Button>
							<Button inverted color="blue">
								Decline
							</Button>
						</div>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Jenny Lawrence</Card.Header>
						<Card.Meta>New User</Card.Meta>
						<Card.Description>
							Jenny requested permission to view your contact
							details
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<div className="ui two buttons">
							<Button inverted color="green">
								Approve
							</Button>
							<Button inverted color="blue">
								Decline
							</Button>
						</div>
					</Card.Content>
				</Card>
			</Card.Group>
		</div>
	);
}
function FullStackProject() {
	return (
		<div>
			<Card.Group
				style={{
					margin: "30px 40px",
					display: "flex",
					justifyContent: "center",
				}}
			>
				<Card>
					<Card.Content>
						<Card.Header>Steve Sanders</Card.Header>
						<Card.Meta>Friends of Elliot</Card.Meta>
						<Card.Description>
							Steve wants to add you to the group{" "}
							<strong>best friends</strong>
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<div className="ui two buttons">
							<Button inverted color="green">
								Approve
							</Button>
							<Button inverted color="blue">
								Decline
							</Button>
						</div>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Molly Thomas</Card.Header>
						<Card.Meta>New User</Card.Meta>
						<Card.Description>
							Molly wants to add you to the group{" "}
							<strong>musicians</strong>
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<div className="ui two buttons">
							<Button inverted color="green">
								Approve
							</Button>
							<Button inverted color="blue">
								Decline
							</Button>
						</div>
					</Card.Content>
				</Card>
				<Card>
					<Card.Content>
						<Card.Header>Jenny Lawrence</Card.Header>
						<Card.Meta>New User</Card.Meta>
						<Card.Description>
							Jenny requested permission to view your contact
							details
						</Card.Description>
					</Card.Content>
					<Card.Content extra>
						<div className="ui two buttons">
							<Button inverted color="green">
								Approve
							</Button>
							<Button inverted color="blue">
								Decline
							</Button>
						</div>
					</Card.Content>
				</Card>
			</Card.Group>
		</div>
	);
}
