import axios from "axios";
import { API_URL } from "../config";

export const property = (filter) => {
    return axios.get(API_URL + "property" , filter);
};
  