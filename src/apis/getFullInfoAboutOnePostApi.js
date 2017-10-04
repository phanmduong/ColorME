import axios from 'axios';
import * as env from '../constants/env';

export function getFullInfoAboutOnePostApi(product_id) {
    let url = env.API_DATA + "/products/" + product_id + "/content";
    return axios.get(url);

}

