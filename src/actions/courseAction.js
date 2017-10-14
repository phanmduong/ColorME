import * as types from '../constants/actionTypes';
import * as courseApi from '../apis/courseApi';

export function beginGetCourse() {
    return {
        type: types.BEGIN_GET_COURSE,
    }
}

export function getCourseSuccess(response) {
    return {
        type: types.GET_COURSE_SUCCESS,
        courses: response.data,

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
        courseApi.getCourseApi(token)
            .then(function (response) {
                dispatch(getCourseSuccess(response));
                console.log(response)
            })
            .catch(function (error) {
                dispatch(getCourseError(error));
            });
    }
}
