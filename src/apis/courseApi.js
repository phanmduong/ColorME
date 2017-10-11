import axios from 'axios';
import * as env from '../constants/env';

export function getCourseApi(token) {
    let url = env.API_URL + "/paid-courses?token=" + token;
    return axios.get(url);
}

export function groupApi(token) {
    let url = env.API_URL + "/group/colorme?token=" + token;
    return axios.get(url);
}

