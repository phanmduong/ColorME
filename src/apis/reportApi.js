import axios from 'axios';
import * as env from '../constants/env';

export function reportPostApi(id) {
    let url = env.API_COLORME + id;
    return axios.post(url,{
    });
}