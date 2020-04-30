import axios from "axios";

const cite = "http://localhost:4000";

export const client = () => {
	return axios.create({
		headers: {
			contentType: "application/json; charset=utf-8",
		},
		baseURL: cite,
	});
};
