import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function baseReducer(state = initialState.base, action) {
    switch (action.type) {
        // case types.BEGIN_GET_DETAIL_BASE:
        //     return {
        //         ...state,
        //         ...{
        //             isLoadingDetail: true,
        //         }
        //     };
        // case types.GET_DETAIL_BASE_SUCCESS:
        //     return {
        //         ...state,
        //         ...{
        //             detailbase: action.detailBASE,
        //             isLoadingDetail: false,
        //         }
        //     };


        case types.BEGIN_GET_LIST_BASE:
            return {
                ...state,
                ...{
                    isLoading: true,
                    error: false,
                }
            };
        case types.GET_LIST_BASE_SUCCESS:
            return {
                ...state,
                ...{
                    bases: action.bases,
                    isLoading: false,
                    error:false,
                }
            };
        case types.GET_LIST_BASE_ERROR:
            return {
                ...state,
                ...{
                    isLoading: false,
                    error: true,
                }
            };
        case types.BEGIN_GET_MORE_LIST_BASE:
            return {
                ...state,
                ...{
                    isLoadingMore: true,
                }
            };
        case types.GET_MORE_LIST_BASE_SUCCESS:
            return {
                ...state,
                ...{
                    bases: [...state.bases, ...action.bases],
                    isLoadingMore: false,
                }
            };
        case types.BEGIN_REFRESH_LIST_BASE:
            return {
                ...state,
                ...{
                    isLoadingRefresh: true,
                }
            };

        case types.GET_REFRESH_BASE_SUCCESS:
            return {
                ...state,
                ...{
                    bases: action.bases,
                    isLoadingRefresh: false,
                }
            };

        case types.BEGIN_GET_ALL_LIST_BASE:
            return {
                ...state,
                ...{
                    isLoading: true,
                }
            };

        case types.GET_ALL_LIST_BASE_SUCCESS:
            return {
                ...state,
                ...{
                    bases: action.bases,
                    isLoading: false,

                }
            };

        default:
            return state
    }
}
