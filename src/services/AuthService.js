import axios from "axios";
import { API_URL } from "../config";

export const register = (data) => {
    return axios.post(API_URL + "user", data);
};
  
export const login = (data) => {
    return axios.post(API_URL + "authenticate", data)
};
  
export const logout = () => {
    localStorage.removeItem("user")
    return axios.post(API_URL + "logout")
};