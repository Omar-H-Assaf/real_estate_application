import axios from "axios";
import { API_URL } from "../config";


export const getOffers = (jwt) => {
    return axios.get(API_URL + 'offers/user' , {
        headers:{
            Authorization: `Bearer ${jwt}`
        }
    })
}