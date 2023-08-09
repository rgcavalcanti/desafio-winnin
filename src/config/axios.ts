import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD ? "https://www.reddit.com/r/reactjs/" : "",
})