import axios from 'axios'
import * as env from '../constants/env'
export function updateProfile(info,token){
    let url = env.API_URL + '/update-user-info' + '?token='+token
    return axios.post(url, {
        name : info.name,
        phone : info.phone,
        email : info.email,
        university : info.university,
        work : info.work,
        address : info.address,
        how_know : info.how_know,
        username : info.username,
        description : info.description,
        facebook : info.facebook,
        gender : info.gender,
        dob : info.dob
    })
}