import axios from 'axios';
import {APIS} from "../../constants/env";
import DeviceInfo from 'react-native-device-info';

export function loginApi(login) {
    let url = APIS.COLOR_ME + "/login"
    let email = login.email.charAt(0).toLowerCase() + login.email.substr(1);
    return axios.post(url, {
        email: email.trim(),
        password: login.password,
    })
};
// export function loadCheckDevice(device, token) {
//     let url = "http://manageapi.colorme.vn" + "/checkincheckout/check-device?token=" + token;
//     return axios.post(url, {
//         device_id : device.getUniqueID(),
//         device_name : device.getDeviceName(),
//         device_os : device.getSystemName(),
//     });
// }

