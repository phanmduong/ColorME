import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function sideNavReducer(state = initialState.sideNav, action) {
    switch (action.type) {
        case types.BEGIN_GET_SIDE_NAV:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                }
            };
        case types.GET_SIDE_NAV_SUCCESS :
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    data: action.data,
                }
            };
        case types.GET_SIDE_NAV_ERROR:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                }
            };
        default:
            return state;
    }
}