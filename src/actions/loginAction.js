import * as types from '../constants/actionTypes';
import * as API from '../apis/loginApi';
import {AsyncStorage} from 'react-native'
import axios from 'axios';

export function beginLogin() {
    return{
        type: types.BEGIN_LOGIN,
        isLoading: true,
        error : false,
        token: undefined,
    }
}

export function loginSuccess(response) {
    return{
        type: types.LOGIN_SUCCESS,
        isLoading: false,
        error: false,
        token: response.data.token,
        status : 1,
        userID: response.data.user.userID,
        user: response.data.user,
    }
}

export function loginError() {
    return{
        type: types.LOGIN_ERROR,
        isLoading: false,
        error: true,
        token: undefined,
    }
}

export function loginUser(login) {
    return function (dispatch) {
        dispatch(beginLogin());
        API.loginApi(login)
            .then(function (response) {
                dispatch(loginSuccess(response));
                console.log("LOGIN SUCCESS");
                console.log(response);
            })
            .catch(function (error) {
                dispatch(loginError());
                console.log("LOGIN ERROR");
                console.log(error.response);
            })
    }


}

export function updateDataLogin(login) {
    return{
        type: types.UPDATE_DATA_LOGIN,
        login: {...login},
    }
}

export function gotDataLogin(email, password) {
    return{
        type: types.GOT_DATA_LOGIN,
        login:{
            email: email,
            password: password,
            isGetLocalData: true,
        }

    }
}

export function getDataLogin() {
    return async function (dispatch) {
        try {
            const email = await AsyncStorage.getItem('@Login:email');
            const password = await AsyncStorage.getItem('@Login:password');
            dispatch(gotDataLogin(email, password))
        }
        catch (error){}
    }
}

export function setDataLogin(login) {
    return async function () {
        try {
            await AsyncStorage.setItem('@Login:email', login.email);
            await AsyncStorage.setItem('@Login:password', login.password);
        }
        catch (error){}
    }
}