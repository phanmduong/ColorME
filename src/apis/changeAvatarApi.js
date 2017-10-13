import * as env from '../constants/env';
export function changeAvatarApi(token) {
    let url = env.API_URL + '/change-avatar?token=' + token
    return url;
}