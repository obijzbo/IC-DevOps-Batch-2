import axios from "axios";

const apiRequest = axios.create({
  baseURL: "http://backend-app:8800/api",
  withCredentials: true,
});

export default apiRequest;