import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function getCourseReducer(state = initialState.getCourse, action) {
    switch (action.type){
        case types.BEGIN_GET_COURSE:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                }
            };
        case types.GET_COURSE_SUCCESS:
            console.log(action.courses)
            return{
                ...state,
                ...{
                    courses: action.courses,
                    isLoading: action.isLoading,
                }
            };
        case types.GET_COURSE_ERROR:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                }
            };
            case types.BEGIN_GET_COURSE_INFORMATION:
            return{
                ...state,
                ...{
                    isLoadingCourseInformation: action.isLoading,
                }
            };
        case types.GET_COURSE_INFORMATION_SUCCESS:
            return{
                ...state,
                ...{
                    courseInformation: action.courseInformation,
                    isLoadingCourseInformation: action.isLoading,
                }
            };
        case types.GET_COURSE_INFORMATION_ERROR:
            return{
                ...state,
                ...{
                    isLoadingCourseInformation: action.isLoading,
                }
            };
        default:
            return state
    }
}