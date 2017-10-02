import axios from 'axios';
import * as env from '../constants/env';

export function searchUserApi(page){
    let url = 'http://api.colorme.vn/search-users?term=afs&limit=10&page=' + page;
    return axios.get(url);
}

export function searchProductApi(page){
    let url = 'http://api.colorme.vn/search-products?term=afs&limit=10&page=' + page;
    return axios.get(url);
}