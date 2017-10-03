import * as types from '../constants/loginTypes';
import initialState from '../reducers/initiaState';

export default function loginReducer(state = initialState.login, action) {
    switch (action.type) {
        case types.BEGIN_LOGIN :
            return{
                ...state,
                ...{
                    isLoading : action.isLoading,
                    error : action.error,
                    token : action.token,
                }
            }
        case types.LOGIN_SUCCESS :
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error : action.error,
                    token : action.token,
                   status : action.status,
                    userid : action.userid,
                    user : action.user
                }
            }
        case types.LOGIN_ERROR :
            return {
                ...state,
                ...{
                    isLoading : action.isLoading,
                    error : action.error,
                    token : action.token,
                    status : action.status
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
        case types.UPDATE_DATA :
            return {
                ...state,
                ...{
                    login : action.login
                }
            }
        default:
            return state;
    }

}
