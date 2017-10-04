import axios from 'axios';
import * as env from '../constants/env';

export function register(register) {
    let url = env.API_COLORME + '/user';
    return axios.post(url,{
        name: register.name,
        username: register.username,
        email: register.email,
        password: register.password,
    });
}