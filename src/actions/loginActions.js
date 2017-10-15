import * as types from '../constants/actionTypes';
import {AsyncStorage} from 'react-native'
import * as loginApi from '../apis/loginApi';
import axios from 'axios';
export function beginLogin() {
    return {
        type: types.BEGIN_LOGIN,
        isLoading: true,
        error: false,
        token : undefined,
    }
}
export function loginUser(login) {
    return function (dispatch) {
        dispatch(beginLogin());
        loginApi.login(login)
            .then(function (response) {
                dispatch(loginSuccess(response));
                const token = response.data.token;
                setAuthorizationToken(token);
                // dispatch(setCurrentUser(jwt.decode(token)))
            })
            .catch(error => {
                dispatch(loginError(error));
                throw (error);
            })
    }
}

export function updateDataLogin(login) { // ham nay de update vao bo nho cac gia tri nhap vao de login
    return {
        type: types.UPDATE_DATA_LOGIN,
        login: {...login},
        error: false,
    }
}


export function loginSuccess(response) {
    let token = response.data.token
    return {
        type: types.LOGIN_SUCCESS,
        isLoading: false,
        error: false,
        token : token,
        status :response.status,
        user : response.data.user
    }
}

export function loginError(response) {
    return {
        type: types.LOGIN_ERROR,
        isLoading: false,
        error: true,
        status: response.status,
    }
}

export function getDataLogin() {
    return async function (dispatch) {
        try {
            const email = await AsyncStorage.getItem('@ColorMe:email'); // lấy data đang tồn
            const password = await AsyncStorage.getItem('@ColorMe:password');
            dispatch(gotDataLogin(email, password));
        }
        catch (error) {
        }
        ;
    }
}

export function gotDataLogin(email, password) { // dữ liệu từ local thành
    return {
        type: types.GOT_DATA_LOGIN,
        login: {
            email: email,
            password: password,
        },
        isGetLocalData: true,

    }
}

export function setDataLogin(login) { // save data
    return async function () {
        try {
            await AsyncStorage.setItem('@ColorMe:email', login.email);
            await AsyncStorage.setItem('@ColorMe:password', login.password);
        }
        catch (error) {
        }
        ;
    }
}

export function setAuthorizationToken(token){
    if(token){
        axios.defaults.headers.common['auth'] = `Bearer ${token}`;
    }else{
        delete axios.defaults.headers.common['auth']
    }
}

 // export function setCurrentUser (user) {
 //    return {
 //        type : types.SET_CURRENT_USER,
 //        user : user,
 //    }
// }
