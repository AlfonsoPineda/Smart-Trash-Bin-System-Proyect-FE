import axios from "axios";

export default axios.create({
    baseURL: "http://192.168.1.89:8000",
    headers: {
        "Content-type": "application/json",
        "token": localStorage.getItem("token"),
        "user": localStorage.getItem("user")
    }
});
