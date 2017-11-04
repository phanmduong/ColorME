import axios from 'axios';
import * as env from '../constants/env';

export function getCourseApi() {
    let url = env.API_DATA+ "/public/home-info";
    return axios.get(url);
}

export function getCourseInformationApi(linkId, token) {
    let url = env.API_COLORME + "//course/" + linkId + "/?token=" + token;
    return axios.get(url);
}

export function learnRegisterApi(class_id, token) {
    let url = env.API_COLORME + "//class/" + class_id + "/enroll?token=" + token;
    return axios.post(url);
}