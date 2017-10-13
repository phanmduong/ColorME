import axios from 'axios';
import * as env from '../constants/env';

export function groupApi(group_link, token) {
    let url = env.API_COLORME + group_link + "?token=" + token;
    return axios.get(url);
}

