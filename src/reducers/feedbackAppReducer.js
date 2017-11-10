import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';
export default function feedbackAppReducer(state = initialState.feedback, action ) {
    switch (action.type) {
        case types.BEGIN_FEEDBACK :
            return {
                ...state,
                ...{isLoadingFeedback : action.isLoadingFeedback}
            }
        case types.FEEDBACK_SUCCESS :
            return {
                ...state,
                ...{isLoadingFeedback: action.isLoadingFeedback}
            }
        default:
            return state;
    }
}