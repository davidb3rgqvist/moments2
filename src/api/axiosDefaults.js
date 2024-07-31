import axios from "axios";

axios.defaults.baseURL = "https://drf-app-2024-29cb82ccb5b6.herokuapp.com/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
axios.defaults.withCredentials = true;