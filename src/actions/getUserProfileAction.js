import * as types from '../constants/actionTypes';
import * as API from '../apis/getUserProfileApi';

export function beginGetUserProfile() {
    return{
        type: types.BEGIN_GET_USER_PROFILE,
        user: {},
    }
}

export function getUserProfileSuccess(response) {
    return{
        type: types.GET_USER_PROFILE_SUCCESS,
        user: response.data.user,
    }
}
export function getProductsSuccess(response) {
    return{
        type: types.GET_USER_PRODUCTS_SUCCESS,
        products: response.data.products,
    }
}
export function getProgressSuccess(response) {
    return{
        type: types.GET_USER_PROGRESS_SUCCESS,
        progress: response.data,
    }
}

export function getUserProfileError() {
    return{
        type: types.GET_USER_PROFILE_ERROR,
        user: {},
    }
}

export function getUserProfile(userName) {
    return(dispatch) => {
        dispatch(beginGetUserProfile());
        API.getUserProfileApi(userName)
            .then(function (response) {
                dispatch(getUserProfileSuccess(response));
            })
            .catch(function (error) {
                dispatch(getUserProfileError(error));
            })
    }
}

export function getProgress(username) {
    return(dispatch) => {
        dispatch(beginGetUserProfile());
        API.getProgressApi(username)
            .then(function (response) {
                dispatch(getProgressSuccess(response));
            })
            .catch(function (error) {
                dispatch(getUserProfileError(error));
            })
    }
}

export function getProductsOfUser(username, page_id, token) {
    return(dispatch) => {
        dispatch(beginGetUserProfile());
        API.getProductsOfUserApi(username, page_id, token)
            .then(function (response) {
                dispatch(getProductsSuccess(response));
            })
            .catch(function (error) {
                dispatch(getUserProfileError(error));
            })
    }
}