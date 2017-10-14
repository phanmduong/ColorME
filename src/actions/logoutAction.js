import {AsyncStorage} from 'react-native'
import * as types from '../constants/actionTypes'
export function logoutSuccess() {
    return {
        type: types.LOGOUT,
        status: 0,
    }
}
    export function logout() {
        return  async function () {
            try {
                await AsyncStorage.setItem('@ColorMe:email', '');
                await AsyncStorage.setItem('@ColorMe:password', '');
            }
            catch (error) {
            }
            ;
        }

}

