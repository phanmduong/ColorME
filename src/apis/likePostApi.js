import axios from 'axios';
import * as env from '../constants/env';

export function likePostApi(product_id, token){
    let url = env.API_COLORME + '/product/' + product_id + '/like?token='+token;
    return axios.post(url);
}
export function unlikePostApi(product_id, token){
    let url =  env.API_COLORME + '/product/' + product_id + '/unlike?token='+token;
    return axios.post(url);
}
export function likeComment(comment_id, user_id) {
     let url = env.API_DATA + '/comment/' + comment_id + '/like?user_id=' + user_id;
     return axios.post(url);
}