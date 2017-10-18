import * as types from '../constants/actionTypes'
import initialState from '../constants/initialState'

export default function updateProfileReducer(state = initialState.updateProfile, action) {
    switch (action.type){
        case types.BEGIN_UPDATE_PROFILE :
            return {
                ...state,
                ...{
                    isLoading : action.isLoading
                }
            }
        case types.UPDATE_PROFILE_SUCCESS :
            return {
                ...state,
                ...{
                    status : action.status,
                    isLoading: action.isLoading,
                    error : action.error
                }
            }
        case types.UPDATE_PROFILE_ERROR :
            return {
                ...state,
                ...{
                    status : action.status,
                    isLoading : false,
                    error: action.error
                }
            }
        default :
            return state
    }

}