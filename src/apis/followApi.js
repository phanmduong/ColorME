import axios from 'axios';
import * as env from '../constants/env';
export function getFollowersApi (userid, token){
   let url = env.API_KEETOOL + '/followers/'+ userid + '?token=' + token
    return axios.get(url)
}

export function getFollowingsApi (userid, token){
    let url = env.API_KEETOOL + '/followings/' + userid + '?token=' + token
    return axios.get(url)
}
export function FollowOrUnfollowApi(userid, token){
    let url = env.API.KEETOOL + '/follow/' + userid + '?token=' + token
    return axios.post(url)
}

export function getFollowingPostApi(userid, token) {
    let url = env.API_KEETOOL + '/followings-products/' + userid + '?token=' +token
    return axios.get(url)
}