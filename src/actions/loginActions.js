import * as types from '../constants/actionTypes';
import {AsyncStorage} from 'react-native'
import * as loginApi from '../apis/loginApi'
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
                console.log(response.status)
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
        user : response.data.user,
        status :response.status
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
            const email = await AsyncStorage.getItem('@Project:email'); // lấy data đang tồn
            const password = await AsyncStorage.getItem('@Project:password');
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
            await AsyncStorage.setItem('@Project:email', login.email);
            await AsyncStorage.setItem('@Project:password', login.password);
        }
        catch (error) {
        }
        ;
    }
}
