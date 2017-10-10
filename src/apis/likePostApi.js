import axios from 'axios';
import * as env from '../constants/env';

export function likePostApi(product_id, token){
    let url = env.API_URL + '/product/' + product_id + '/like?token='+token
    return axios.post(url)
}
export function unlikePostApi(product_id, token){
    let url =  env.API_URL + '/product/' + product_id + '/unlike?token='+token
    return axios.post(url)
}
