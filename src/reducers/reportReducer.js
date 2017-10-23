import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function reportReducer(state = initialState.report, action) {
    switch (action.type) {
        case types.BEGIN_REPORT_POST:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                }
            }

        case types.REPORT_POST_SUCCESS :
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    reportPostResult: action.reportPostResult
                }
            }
        case types.REPORT_POST_ERROR:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    reportPostResult: action.reportPostResult
                }
            }
        default:
            return state;
    }
}