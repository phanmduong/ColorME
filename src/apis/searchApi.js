import axios from 'axios';
import * as env from '../constants/env';

export function searchUserApi(term, limit, page){
    let url = env.API_COLORME + '/search-users?term=' + term +'&limit=' + limit + '&page=' + page;
    return axios.get(url);
}

export function searchProducts(term, limit, page){
    let url = env.API_COLORME + '/search-products?term=' + term + '&limit=' + limit + '&page=' + page;
    return axios.get(url);
}