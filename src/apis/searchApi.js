import axios from 'axios';
import * as env from '../constants/env';

export function searchUserApi(page, limit = 10){
    let url = env.API_COLORME + '/search-users?term=afs&limit=' + limit + '&page=' + page;
    return axios.get(url);
}

export function searchProductApi(page, limit = 10){
    let url = env.API_COLORME + '/search-products?term=afs&limit=' + limit + '&page=' + page;
    return axios.get(url);
}