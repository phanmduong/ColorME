import initialState from './initialState'
import * as types from '../constants/actionTypes'

export default function loginReducer(state = initialState.login, action) {
    switch (action.type) {
        case types.BEGIN_LOGIN :
            return{
                ...state,
                ...{
                    isLoading : action.isLoading,
                    error : action.error,
                }
            }
        case types.LOGIN_SUCCESS :
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error : action.error,
                    user : action.user,
                    token : action.token
                }
            }
        case types.LOGIN_ERROR :
            return {
                ...state,
                ...{
                    isLoading : action.isLoading,
                    error : action.error,
                    token : action.token,
                }
            }
        case types.GOT_DATA_LOGIN :
            return {
                ...state,
                ...{
                    isGetLocalData : action.isGetLocalData,
                    login : action.login
                }
            }
        default:
            return state;
    }

}