import axios from 'axios';
import * as env from '../constants/env';

export function getFullInfoAboutOnePostApi(product_id) {
    let url = env.API_DATA + "/products/" + product_id + "/content";
    return axios.get(url);
}

export function getCommentOnePost(product_id) {
    let url = env.API_DATA + "/products/" + product_id + "/comments";
    return axios.get(url);
}

export function postCommentOnePostApi(product_id, token, value){
    let url = env.API_COLORME + "/product/" + product_id + "/comment?token=" + token;
    return axios.post(url,{
        parent_id: value.parent_id,
        comment_content: value.comment_content,
    });
}