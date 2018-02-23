import axios from 'axios';
import * as env from '../constants/env';

export function getCourseApi() {
    let url = env.API_DATA+ "/public/home-info";
    return axios.get(url);
}

export function getCourseApi2() {
    let url = env.API_COLORME+ "/v2/course/get-all"
    return axios.get(url);
}

export function getCourseInformationApi(linkId) {
    let url = env.API_COLORME+ "/v2/course/get-detailed/"+ linkId;
    return axios.get(url);
}

export function learnRegisterApi(class_id, token) {
    let url = env.API_COLORME + "//class/" + class_id + "/enroll?token=" + token;
    return axios.post(url);
}