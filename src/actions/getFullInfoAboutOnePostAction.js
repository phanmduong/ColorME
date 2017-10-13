import * as types from '../constants/actionTypes';
import * as API from '../apis/getFullInfoAboutOnePostApi';
export function beginGetFullInfoAboutOnePost() {
    return {
        type: types.BEGIN_GET_FULL_INFO_ABOUT_ONE_POST,
        isLoading: true,
        error: false,
        result: false,
    }
}

export function getFullInfoAboutOnePostSuccess(response) {
    return {
        type: types.GET_FULL_INFO_ABOUT_ONE_POST_SUCCESS,
        isLoading: false,
        error: false,
        result: true,
        post: response.data,
    }
}


export function getCommentOnePostSuccess(response) {
    return {
        type: types.GET_COMMENTS_POST_SUCCESS,
        isLoading: false,
        error: false,
        result: true,
        comments : response.data.comments,
    }
}

export function getFullInfoAboutOnePostError() {
    return {
        type: types.GET_FULL_INFO_ABOUT_ONE_POST_ERROR,
        isLoading: false,
        error: true,
        result: false,
    }
}

export function getFullInfoAboutOnePostOfUser(product_id) {
    return (dispatch) => {
        dispatch(beginGetFullInfoAboutOnePost());
        API.getFullInfoAboutOnePostApi(product_id)
            .then(function (response) {
                dispatch(getFullInfoAboutOnePostSuccess(response));
            })
            .catch(function(error) {
                dispatch(getFullInfoAboutOnePostError(error));
            })

    }
}

export function getCommentOnePost(product_id) {
    return (dispatch) => {
        dispatch(beginGetFullInfoAboutOnePost());
        API.getCommentOnePost(product_id)
            .then(function (response) {
                dispatch(getCommentOnePostSuccess(response));
            })
            .catch(function(error) {
                dispatch(getFullInfoAboutOnePostError(error));
            })

    }
}