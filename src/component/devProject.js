import React from "react";
import Projects from "../pages/Projects";

const dev = process.env.REACT_APP_DEV;

export default function Project() {
	return (
		<div>
			<Projects />
			{dev ? (
				<>
					<button>AddProject</button>
				</>
			) : (
				""
			)}
		</div>
	);
}
