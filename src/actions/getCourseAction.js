import * as types from '../constants/actionTypes';
import * as API from '../apis/getCourseApi';

export function beginGetCourse() {
    return {
        type: types.BEGIN_GET_COURSE,
    }
}

export function getCourseSuccess(response) {
    return {
        type: types.GET_COURSE_SUCCESS,
        course: response.data,

    }
}

export function getCourseError() {
    return {
        type: types.GET_COURSE_ERROR,
    }
}

export function getCourse(token) {
    return (dispatch) => {
        dispatch(beginGetCourse());
        API.getCourseApi(token)
            .then(function (response) {
                dispatch(getCourseSuccess(response));
                console.log(response)
            })
            .catch(function (error) {
                dispatch(getCourseError(error));
            });
    }
}

