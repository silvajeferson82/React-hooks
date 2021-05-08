import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/users/silvajeferson82/repos"
});

export default api;
