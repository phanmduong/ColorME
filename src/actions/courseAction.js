import * as types from '../constants/actionTypes';
import * as courseApi from '../apis/courseApi';

export function beginGetCourse() {
    return {
        type: types.BEGIN_GET_COURSE,
        isLoading: true,
    }
}

export function getCourseSuccess(response) {
    return {
        type: types.GET_COURSE_SUCCESS,
        courses: response.data,
        isLoading: false,
    }
}

export function getCourseError() {
    return {
        type: types.GET_COURSE_ERROR,
        isLoading: false,
    }
}

export function beginGetCourseInformation() {
    return {
        type: types.BEGIN_GET_COURSE_INFORMATION,
        isLoadingCourseInformation: true,
    }
}

export function getCourseInformationSuccess(response) {
    return {
        type: types.GET_COURSE_INFORMATION_SUCCESS,
        courseInformation: response.data,
        isLoadingCourseInformation: false,
    }
}

export function getCourseInformationError() {
    return {
        type: types.GET_COURSE_INFORMATION_ERROR,
        isLoadingCourseInformation: false,
    }
}

export function getCourse(token) {
    return (dispatch) => {
        dispatch(beginGetCourse());
        courseApi.getCourseApi(token)
            .then(function (response) {
                dispatch(getCourseSuccess(response));

            })
            .catch(function (error) {
                dispatch(getCourseError(error));
            });
    }
}

export function getCourseInformation(linkId, token) {
    return (dispatch) => {
        dispatch(beginGetCourseInformation());
        courseApi.getCourseInformationApi(linkId, token)
            .then(function (response) {
                dispatch(getCourseInformationSuccess(response));
            })
            .catch(function (error) {
                dispatch(getCourseInformationError(error));
            });
    }
}

