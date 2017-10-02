import axios from 'axios';
import * as env from '../constants/env';

export function getUserProfileApi() {
    let url = env.API_COLORME + "/user/mson.ng/profile";
    return axios.get(url);

}