import axios from 'axios';
import * as env from '../constants/env';

export function getUserProfileApi(userName) {
    let url = env.API_COLORME + "/user/" + userName + "/profile";
    return axios.get(url);

}