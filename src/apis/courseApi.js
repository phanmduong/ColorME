import axios from 'axios';
import * as env from '../constants/env';

export function getCourseApi(token) {
    let url = env.API_COLORME + "/paid-courses?token=" + token;
    return axios.get(url);
}
