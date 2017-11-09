import axios from 'axios';
import * as env from '../constants/env'
export function feedbackAppApi(value) {
    let url = env.API_KEETOOL + '/report-by-email';
    return axios.post(url, {
        name : value.name,
        email : value.email,
        message : value.message,
    })
}