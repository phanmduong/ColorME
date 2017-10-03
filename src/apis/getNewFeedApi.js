import axios from 'axios';
import * as env from '../constants/env';

export function getNewFeedApi(filter, user_id) {
    let url = env.API_COLORME + "/products?filter=" + filter + "&user_id=" + user_id;
    return axios.get(url);
}