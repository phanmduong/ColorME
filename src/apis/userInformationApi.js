import axios from 'axios';
import * as env from '../constants/env';

export function getUserProfileApi(userName) {
    let url = env.API_URL + "/user/" + userName + "/profile";
    return axios.get(url);

}

export function getUserProductsApi(username, page_id, token) {
    let url = env.API_URL + "/products/" + username + "?page=" + page_id + "&token=" + token;
    return axios.get(url);
}

export function getUserProgressApi(username) {
    let url = env.API_URL + "/user/" + username + "/progress";
    return axios.get(url);
}
