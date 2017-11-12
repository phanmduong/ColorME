import axios from 'axios';
import * as env from '../constants/env';

export function getTopicApi(id, token) {
    let url = env.API_COLORME + "/topic/" + id + '?token=' + token ;
    return axios.get(url);
}

export function getProductsInTopic(id, page, token) {
    let url = env.API_COLORME + "/topic/" + id + '/products?page=' + page +'?token=' + token ;
    return axios.get(url);
}

