import axios from 'axios';
import * as env from '../constants/env';

export function getNewFeedApi() {
    let url = env.API_COLORME + "/products?filter=1&user_id=6823";
    return axios.get(url);
}