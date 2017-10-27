import axios from 'axios';
import * as env from '../constants/env';

export function sideNavApi(id){
    let url = env.API_COLORME + '/user/' + id + '/side-nav';
    return axios.get(url);
}

