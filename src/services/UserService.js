import axios from "axios";
import { API_URL } from "../config";

export const SendOffer = (data, jwt) => {
    return axios.post(API_URL + "api/v1/offers/", data, {
        headers: {
            Authorization: `Bearer ${jwt}`,
        }
    });
}