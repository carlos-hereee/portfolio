import axios from "axios";

const developmentBaseUrl = "http://localhost:4000";
const productionBaseUrl = "https://lab17-makata.herokuapp.com";

export const client = () => {
	return axios.create({
		headers: {
			contentType: "application/json; charset=utf-8",
		},
		baseURL:
			process.env.NODE_ENV === "production"
				? productionBaseUrl
				: developmentBaseUrl,
	});
};
