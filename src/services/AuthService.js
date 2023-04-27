import axios from "axios";
import { API_URL } from "../config";

export const register = (data) => {
    return axios.post(API_URL + "authenticate/user", data);
};

export const login = (data) => {
    return axios.post(API_URL + "authenticate", data)
};
