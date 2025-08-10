import axios from "axios";

const API_URL = "/api/auth/";

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
    const response = await api.post("/login", { username, password });
    if (response.data.access_token) {
      localStorage.setItem("token", response.data.access_token);
    }
    return response.data;
  },

  async register(username: string, password: string) {
    return api.post("/register", { username, password });
  },

  async getProfile() {
    return api.get("/profile");
  },

  logout() {
    localStorage.removeItem("token");
  },
};
