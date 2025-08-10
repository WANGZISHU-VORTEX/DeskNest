import axios from "axios";

const API_URL = "http://localhost:3000/api";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export const AuthService = {
  async login(username: string, password: string) {
    const response = await api.post("/auth/login", { username, password });
    if (response.data.access_token) {
      localStorage.setItem("token", response.data.access_token);
    }
    return response.data;
  },

  async register(username: string, password: string) {
    return api.post("/auth/register", { username, password });
  },

  async getProfile() {
    const response = await api.get('/auth/profile');
    this.user = response.data; 
    return this.user
  },

  logout() {
    localStorage.removeItem("token");
  },
};
