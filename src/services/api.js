import axios from "axios";

// Create Axios instance
const api = axios.create({
  baseURL: "https://lms-backend-qp3p.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

// API function
export const loginUser = (data) => {
  return api.post("/api/auth/login", data);
};

export default api;
