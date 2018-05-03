import * as env from '../constants/env';
import axios from 'axios';


export async function getBasesApi(page, token) {
    let url = env.API_COLORME + '/v2/base';
    console.log(url);
    return axios.get(url);
}
