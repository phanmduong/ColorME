import axios from 'axios';
import * as env from '../constants/env';

export function getNotificationApi(page_id, token) {
    let url = env.API_URL + "/notifications?page=" + page_id + "&token=" + token;
    return axios.get(url);

}