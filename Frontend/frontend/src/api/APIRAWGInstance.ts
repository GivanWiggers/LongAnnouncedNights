import axios from "axios";

const RAWGinstance = axios.create({
    baseURL: "https://api.rawg.io/api/"
});

export default RAWGinstance;
