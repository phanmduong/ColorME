import * as types from '../constants/actionTypes';
import * as userInformationApi from '../apis/userInformationApi';

export function beginGetUserProfile() {
    return{
        type: types.BEGIN_GET_MYACCOUNT_PROFILE,
        isLoadingUserProfile: true,
        errorUserProfile: false,
    }
}
export function beginGetUserProgress() {
    return{
        type: types.BEGIN_GET_MYACCOUNT_PROGRESS,
        isLoadingUserProgress: true,
        errorUserProgress: false,
    }
}
export function beginGetUserProducts() {
    return{
        type: types.BEGIN_GET_MYACCOUNT_PRODUCTS,
        isLoadingUserProducts: true,
        errorUserProducts: false,
    }
}

export function getUserProfileSuccess(response) {
    return{
        type: types.GET_MYACCOUNT_PROFILE_SUCCESS,
        user: response.data.user,
        isLoadingUserProfile: false,
        errorUserProfile: false,

    }
}
export function getUserProductsSuccess(response) {
    return{
        type: types.GET_MYACCOUNT_PRODUCTS_SUCCESS,
        products: response.data.products,
        isLoadingUserProducts: false,
        errorUserProducts: false,

    }
}
export function getUserProgressSuccess(response) {
    return{
        type: types.GET_MYACCOUNT_PROGRESS_SUCCESS,
        progress: response.data,
        isLoadingUserProgress: false,
        errorUserProgress: false,
    }
}

export function getUserProfileError() {
    return{
        type: types.GET_MYACCOUNT_PROFILE_ERROR,
        isLoadingUserProfile: false,
        errorUserProfile: true,
    }
}

export function getUserProgressError() {
    return{
        type: types.GET_MYACCOUNT_PROGRESS_ERROR,
        isLoadingUserProgress: false,
        errorUserProgress: true,
    }
}

export function getUserProductsError() {
    return{
        type: types.GET_MYACCOUNT_PRODUCTS_ERROR,
        isLoadingUserProducts: false,
        errorUserProducts: true,
    }
}

export function getUserProfile(userName) {
    return(dispatch) => {
        dispatch(beginGetUserProfile());
        userInformationApi.getUserProfileApi(userName)
            .then(function (response) {
                dispatch(getUserProfileSuccess(response));
            })
            .catch(function () {
                dispatch(getUserProfileError());
            })
    }
}

export function getUserProgress(username) {
    return(dispatch) => {
        dispatch(beginGetUserProgress());
        userInformationApi.getUserProgressApi(username)
            .then(function (response) {
                dispatch(getUserProgressSuccess(response));
            })
            .catch(function () {
                dispatch(getUserProgressError());
            })
    }
}

export function getUserProducts(username, page_id, token) {
    return(dispatch) => {
        dispatch(beginGetUserProducts());
        userInformationApi.getUserProductsApi(username, page_id, token)
            .then(function (response) {
                dispatch(getUserProductsSuccess(response));
            })
            .catch(function () {
                dispatch(getUserProductsError());
            })
    }
}