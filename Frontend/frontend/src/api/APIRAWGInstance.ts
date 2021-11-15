import axios from "axios";

const instance = axios.create({
    baseURL: "api.rawg.io/api/"
});

export default instance;
