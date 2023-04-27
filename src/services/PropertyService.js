import axios from "axios";
import { API_URL } from "../config";


export const property = (filter) => {
    return axios.get(API_URL + "property" , filter);
};

export const addProperty = (data) => {
    return axios.post(API_URL + "property", data , {
        headers:{
            "Content-Type":'multipart/form-data'
        }
    });
}

export const getMyProperties = (user_id , jwt) => {
    return axios.get(API_URL+ "dashboard/ownerproperties" , {
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    })
}