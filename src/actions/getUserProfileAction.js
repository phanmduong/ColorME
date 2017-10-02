import * as types from '../constants/actionTypes';
import * as API from '../apis/getUserProfileApi';

export function beginGetUserProfile() {
    return{
        type: types.BEGIN_GET_USER_PROFILE,
        profile: null,
    }
}

export function getUserProfileSuccess(response) {
    return{
        types: types.GET_USER_PROFILE_SUCCESS,
        profile: response.data.user,
    }
}

export function getUserProfileError() {
    return{
        types: types.GET_USER_PROFILE_ERROR,
        profile: null,
    }
}

export function getUserProfile() {
    return(dispatch) => {
        dispatch(beginGetUserProfile());
        API.getUserProfileApi()
            .then(function (response) {
                dispatch(getUserProfileSuccess(response));
                console("SUCCESS");
                console(response);
            })
            .catch(function (error) {
                dispatch(getUserProfileError(error));
                console("ERROR");
                console(error);
            })
    }
}