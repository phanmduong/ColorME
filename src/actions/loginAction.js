import * as types from '../constants/actionTypes';
import {AsyncStorage} from 'react-native'
import axios from 'axios';


export function beginLogin() {
    return {
        type: types.BEGIN_LOGIN,
        isLoading: true,
        error: false,
    }
}

export function loginUser(login) {
    return function (dispatch) {
        dispatch(beginLogin());
        axios.post('http://api.colorme.vn/login', {
            email: login.email,
            password: login.password,

        })
            .then(function (res) {
                dispatch(loginSuccess(res));
            })
            .catch(error => {
                dispatch(loginError());
                throw (error);
            })
    }
}

export function updateDataLogin(login) { // ham nay de update vao bo nho cac gia tri nhap vao de login
    return {
        type: types.UPDATE_DATA,
        login: {...login},
    }
}

export function loginSuccess(res) {
    return {
        type: types.LOGIN_SUCCESS,
        isLoading: false,
        error: false,
        token: res.data.token,
        user: res.data.user,

    }
}

export function loginError() {
    return {
        type: types.LOGIN_ERROR,
        isLoading: false,
        error: true,
    }
}

export function getDataLogin() {
    return async function (dispatch) {
        try {
            const email = await AsyncStorage.getItem('@ColorMevn:email'); // lấy data đang tồn
            const password = await AsyncStorage.getItem('@ColorMevn:password');
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
            await AsyncStorage.setItem('@ColorMevn:email', login.email);
            await AsyncStorage.setItem('@ColorMevn:password', login.password);
        }
        catch (error) {
        }
        ;
    }
}


