import React from "react";

import { Icon } from "semantic-ui-react";

import "./Footer.css";

export default function Navigation() {
	return (
		<div className="footer">
			<p> Feel free to check me out in my LinkIn, Github</p>
			<Icon name="linkedin" size="big" />
			<Icon name="github" size="big" />
		</div>
	);
}
