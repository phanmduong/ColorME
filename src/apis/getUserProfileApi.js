import axios from 'axios';
import * as env from '../constants/env';

export function getUserProfileApi(userName) {
    let url = env.API_COLORME + "/user/" + userName + "/profile";
    return axios.get(url);

}

export function getProductsOfUser(username, page_id, token) {
    let url = env.API_COLORME + "/products/" + username + "?page=" + page_id + "&" + token;
    return axios.get(url);
}


