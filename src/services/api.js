import axios from "axios";


const api = axios.create({
  baseURL: "https://lms-backend-qp3q.onrender.com",
  headers: { "Content-Type": "application/json" },
});

// Remove localStorage dependency
export const setAuthToken = (token) => {
  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
  else delete api.defaults.headers.Authorization;
};

// API functions
export const loginUser = (data) => api.post("/api/auth/login", data);
export const studentSignup = (data) => api.post("/api/auth/student-signup", data);
export const staffSignup = (data) => api.post("/api/auth/staff-signup", data);

// Protected routes
export const getAllBooks = () => api.get("/api/book");
export const searchBooks = (query) => api.get(`/api/book/search?query=${query}`);
export const createBook = (bookData) => api.post("/api/book", bookData);
export const deleteBook = (bookId) => api.delete(`/api/book/${bookId}`);
export const getBookDetails = (bookId) => api.get(`/api/book/${bookId}`);

export default api;


