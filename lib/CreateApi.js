import axios from "axios";
export const API = axios.create({
  baseURL: "https://center-kitchen-server.vercel.app/",
  // baseURL: "http://localhost:2000/",
  withCredentials: true,
});
