import axios from 'axios';
import * as env from '../constants/env'
export function curriculumApi(value, token) {
    let url = env.API_COLORME + '/lesson/' + value + '?token=' + token;
    return axios.get(url);
}

export function resourcesApi(class_name, token) {
    let url = env.API_COLORME + '/links/' + class_name + '?token=' + token;
    return axios.get(url);

}