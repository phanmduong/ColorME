import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function getCourseReducer(state = initialState.curriculum, action) {
    switch (action.type) {
        case types.BEGIN_GET_CURRICULUM:
            return {
                ...state,
                ...{
                    isLoadingCurriculum: true,
                }
            };
        case types.GET_CURRICULUM_SUCCESS:
            return {
                ...state,
                ...{
                    data: action.data,
                    isLoadingCurriculum: false,
                }
            };
        default:
            return state
    }
}