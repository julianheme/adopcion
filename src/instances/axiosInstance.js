import axios from "axios";

const instance = axios.create({
	baseURL: "https://api.npoint.io/0f9ca95d1058038e320a",
});

export default instance;
