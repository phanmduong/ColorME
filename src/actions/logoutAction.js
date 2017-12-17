import * as types from '../constants/actionTypes'
import {AsyncStorage} from 'react-native'
import OneSignal from "react-native-onesignal";

export function logoutSuccess() {
    return {
        type: types.LOGOUT,
        status: 1
    }
}

export function logout() {
    return async function (dispatch) {
        OneSignal.deleteTag("user_id");
        try {
            await AsyncStorage.removeItem('@ColorMe:save')
            dispatch(logoutSuccess())
        }
        catch (error) {
        }
        ;
    }
}



