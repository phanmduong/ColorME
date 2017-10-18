import axios from 'axios';
import * as env from '../constants/env';

export function getNewFeedApi(filter, page_id) {
    let url = env.API_DATA + "/products?filter=" + filter + "&page=" + page_id;
    return axios.get(url);
}

