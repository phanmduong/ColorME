import * as types from '../constants/actionTypes';
import * as inforAboutPostApi from '../apis/InfoAboutPostApi';

export function beginGetFullInfoAboutOnePost() {
    return {
        type: types.BEGIN_GET_FULL_INFO_ABOUT_ONE_POST,
        isLoading: true,
        error: false,
        result: false,
    }
}

export function beginPostComment() {
    return {
        type: types.BEGIN_POST_COMMENT,
        statusPostComment: 2,
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
        comments: response.data.comments,
    }
}

export function postCommentSuccess() {
    return {
        type: types.POST_COMMENT_SUCCESS,
        statusPostComment: 1,

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

export function postCommentError() {
    return {
        type: types.POST_COMMENT_ERROR,
        statusPostComment: 0,

    }
}

export function getFullInfoAboutOnePostOfUser(product_id) {
    return (dispatch) => {
        dispatch(beginGetFullInfoAboutOnePost());
        inforAboutPostApi.getFullInfoAboutOnePostApi(product_id)
            .then(function (response) {
                dispatch(getFullInfoAboutOnePostSuccess(response));
            })
            .catch(function (error) {
                dispatch(getFullInfoAboutOnePostError(error));
            })
    }
}

export function getCommentOnePost(product_id) {
    return (dispatch) => {
        dispatch(beginGetFullInfoAboutOnePost());
        inforAboutPostApi.getCommentOnePost(product_id)
            .then(function (response) {
                dispatch(getCommentOnePostSuccess(response));
            })
            .catch(function (error) {
                dispatch(getFullInfoAboutOnePostError(error));
            })

    }
}

export function postCommentOnePost(product_id, token, value) {
    return (dispatch) => {
        dispatch(beginPostComment());
        inforAboutPostApi.postCommentOnePostApi(product_id, token, value)
            .then(function (response) {
                dispatch(postCommentSuccess(response));
                console.log(response);
            })
            .catch(function (error) {
                dispatch(postCommentError(error));
            })

    }
}