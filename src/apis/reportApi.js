import axios from 'axios';
import * as env from '../constants/env';

export function reportPostApi(id, token) {
    // let url = env.API_COLORME + id;
    let url = "http://api.colorme.vn/product/" + id + "/report?token=" + token;
    return axios.post(url,{
        body:{message: "Báo cáo nội dung đồ trụy"}
    });
}

