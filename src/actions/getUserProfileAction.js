import * as types from '../constants/actionTypes';
import * as API from '../apis/getUserProfileApi';

export function beginGetUserProfile() {
    return {
        type: types.BEGIN_GET_USER_PROFILE,
        user: {},
    }
}

export function getUserProfileSuccess(response) {
    return {
        type: types.GET_USER_PROFILE_SUCCESS,
        user: response.data.user,
        productsUser: response.data.products,
        progress: response.data.products,
    }
}

export function getUserProfileError() {
    return {
        type: types.GET_USER_PROFILE_ERROR,
        user: {},
    }
}

export function getUserProfile(userName) {
    return (dispatch) => {
        dispatch(beginGetUserProfile());
        API.getUserProfileApi(userName)
            .then(function (response) {
                dispatch(getUserProfileSuccess(response));
                console.log('getUserProfile');
                console.log(response);

            })
            .catch(function (error) {
                dispatch(getUserProfileError(error));
                console.log('getUserProfile error');
            });
    }
}

export function getProgress(userName) {
    return (dispatch) => {
        dispatch(beginGetUserProfile());
        API.getProgressApi(userName)
            .then(function (response) {
                dispatch(getUserProfileSuccess(response));
                console.log('getProgress');
                console.log(response);
            })
            .catch(function (error) {
                dispatch(getUserProfileError(error));
                console.log('getProgress error');

            });
    }
}

export function getProductsOfUser(username, page_id, token) {
    return (dispatch) => {
        dispatch(beginGetUserProfile());
        API.getProductsOfUserApi(username, page_id, token)
            .then(function (response) {
                dispatch(getUserProfileSuccess(response));
            })
            .catch(function (error) {
                dispatch(getUserProfileError(error));
            })
    }
}