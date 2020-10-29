import axios from "axios";

export const client = () => {
  return axios.create({
    headers: {
      contentType: "application/json; charset=utf-8",
    },
    baseURL: process.env.REACT_APP_BASE_URL,
  });
};
