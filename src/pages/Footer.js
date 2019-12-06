import React from "react";

import { Icon } from "semantic-ui-react";

import "./projectScss.scss";

export default function Navigation() {
	return (
		<div className="footer">
			<a href="https://www.linkedin.com/in/carlos-hernandez-066729179/">
				<Icon name="linkedin" size="big" />
			</a>
			<a href="https://www.github.com/ch04937">
				<Icon name="github" size="big" />
			</a>
		</div>
	);
}
