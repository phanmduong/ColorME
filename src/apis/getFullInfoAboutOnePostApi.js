import axios from 'axios';
import * as env from '../constants/env';

export function getFullInfoAboutOnePost(product_id, user_id) {
    let url = env.API_DATA + "/products/" + product_id + "/content?user_id=" + user_id;
    return axios.get(url);

}