import axios from "axios";

const API = axios.create({
  baseURL: "https://rt69tz-5000.csb.app/api", // Replace with your API base URL
});
// Add interceptors for handling requests and responses
API.interceptors.request.use(
  (config) => {
    // Add headers or tokens if needed
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle API errors globally
    console.error("API Error:", error.response || error.message);
    return Promise.reject(error);
  }
);

export default API;
