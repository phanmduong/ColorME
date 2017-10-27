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
        default:
            return state
    }
}