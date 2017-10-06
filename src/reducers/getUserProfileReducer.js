import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function getUserProfileReducer(state = initialState.getUserProfile, action) {
    switch (action.type){
        case types.BEGIN_GET_USER_PROFILE:
            return{
                ...state
            }

        case types.GET_USER_PROFILE_SUCCESS:
            return{
                ...state,
                ...{
                    user: action.user,
                    productsUser: action.productsUser,
                }
            }

        case types.GET_USER_PROFILE_ERROR:
            return{
                ...state
            }

        default:
            return state
    }
}