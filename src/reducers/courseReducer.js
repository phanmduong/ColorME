import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function getUserProfileReducer(state = initialState.getCourse, action) {
    switch (action.type){
        case types.BEGIN_GET_COURSE:
            return{
                ...state
            }

        case types.GET_COURSE_SUCCESS:
            return{
                ...state,
                ...{
                    courses: action.courses,
                }
            }

        case types.GET_COURSE_ERROR:
            return{
                ...state
            }

        default:
            return state
    }
}