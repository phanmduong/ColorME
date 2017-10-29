import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function getCourseReducer(state = initialState.getCourse, action) {
    switch (action.type) {
        case types.BEGIN_GET_COURSE:
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                }
            };
        case types.GET_COURSE_SUCCESS:
            return {
                ...state,
                ...{
                    courses: action.courses,
                    isLoading: action.isLoading,
                }
            };
        case types.GET_COURSE_ERROR:
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                }
            };
        case types.BEGIN_LEARN_REGISTER:
            return {
                ...state,
                ...{
                    isLoadingLearnRegister: action.isLoadingLearnRegister,
                }
            };
        case types.LEARN_REGISTER_SUCCESS:
            return {
                ...state,
                ...{
                    message: action.message,
                    isLoadingLearnRegister: action.isLoadingLearnRegister,
                }
            };
        case types.LEARN_REGISTER_ERROR:
            return {
                ...state,
                ...{
                    isLoadingLearnRegister: action.isLoadingLearnRegister,
                }
            };
        case types.BEGIN_GET_COURSE_INFORMATION:
            return {
                ...state,
                ...{
                    isLoadingCourseInformation: action.isLoadingCourseInformation,
                }
            };
        case types.GET_COURSE_INFORMATION_SUCCESS:
            return {
                ...state,
                ...{
                    courseInformation: action.courseInformation,
                    isLoadingCourseInformation: action.isLoadingCourseInformation,
                }
            };
        case types.GET_COURSE_INFORMATION_ERROR:
            return {
                ...state,
                ...{
                    isLoadingCourseInformation: action.isLoadingCourseInformation,
                }
            };
        default:
            return state
    }
}