import axios from 'axios';
import * as env from '../constants/env';

export function register(register) {
    let url = env.API_URL + '/user';
    return axios.post(url,{
        name : register.name,
        email : register.email,
        username : register.userName,
        password : register.password,
    });
}