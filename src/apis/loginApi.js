import * as env from '../constants/env';
import axios from 'axios';

export function login(login) {
    let url = env.API_URL + '/login';
    return axios.post(url,{
        email: login.email,
         password: login.password,
    });
}