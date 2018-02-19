import axios from 'axios';
import * as env from '../constants/env';

export function getNotificationApi(page_id, token) {
    let url = env.API_COLORME + "/notifications?page=" + page_id + "&token=" + token;
    return axios.get(url);

}
export function getInfoNotification(notification_id, token){
            let url = env.API_COLORME + "/notification/" + notification_id + "?token="+token;
            return axios.get(url);
        }
