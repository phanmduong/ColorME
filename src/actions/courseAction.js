import * as types from '../constants/actionTypes';
import * as courseApi from '../apis/courseApi';
import {AsyncStorage, Alert} from 'react-native'

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

export function beginLearnRegister() {
    return {
        type: types.BEGIN_LEARN_REGISTER,
        isLoadingLearnRegister: true,
    }
}

export function learnRegisterSuccess(response) {
    return {
        type: types.LEARN_REGISTER_SUCCESS,
        message: response.data.message,
        isLoadingLearnRegister: false,
    }
}

export function learnRegisterError() {
    return {
        type: types.LEARN_REGISTER_ERROR,
        isLoadingLearnRegister: false,
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
        courseApi.getCourseApi2(token)
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

export function learnRegister(class_id, token) {
    return (dispatch) => {
        dispatch(beginLearnRegister());
        courseApi.learnRegisterApi(class_id, token)
            .then(function (response) {
                dispatch(learnRegisterSuccess(response));
                Alert.alert(
                    'Đăng ký thành công',
                    response.data.message,
                    [
                        {text: 'Xong'},
                    ],
                )
            })
            .catch(function (error) {
                dispatch(learnRegisterError(error));
                Alert.alert(
                    'Đăng ký thất bại',
                    [
                        {text: 'Xác nhận'},
                    ],
                )
            });
    }
}

