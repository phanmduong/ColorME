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
                    class_id : action.class_id,
                    isLoadingLearnRegister: action.isLoadingLearnRegister,
                    statusRegister : 0
                }
            };
        case types.LEARN_REGISTER_SUCCESS:
            // let classes = state.courseInformation.classes;
            // classes[classes.findIndex(item => item.id == action.id)].status = 1;
            // classes[classes.findIndex(item => item.id == action.id)].isEnrolled = true
            return {
                ...state,
                ...{
                    class_id : action.class_id,
                    message: action.message,
                    isLoadingLearnRegister: false,
                    statusRegister : 200
                }
            };
        case types.LEARN_REGISTER_ERROR:
            return {
                ...state,
                ...{
                    class_id : action.class_id,
                    isLoadingLearnRegister: action.isLoadingLearnRegister,
                    statusRegister : 0
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