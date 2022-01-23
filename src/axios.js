import axios from "axios";

const instance = axios.create({

  baseURL: "http://localhost:9900",
});

export default instance;
