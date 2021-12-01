import axios from "axios";

export default axios.create({
    baseURL: "https://91f3b056f40d.ngrok.io",
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-type": "application/json",
        "token": localStorage.getItem("token"),
        "user": localStorage.getItem("user")
    }
});
