import axios from "axios";

const instance = axios.create({
	baseURL: "https://test-react-app-sabana-ae0aa.firebaseio.com/",
});

export default instance;