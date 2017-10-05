import * as env from '../constants/env';
import axios from 'axios';

export function loginApi(login) {
    let url = env.API_COLORME + '/login';
    return axios.post(url,{
        email: login.email,
         password: login.password,
    });
}