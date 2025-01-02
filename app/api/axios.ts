import axios from "axios";

export default axios.create({
  baseURL: process.env.API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});
