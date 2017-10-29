import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';
import {Start} from '../navigators/appRouter'
import {NavigationActions} from 'react-native'
export default function loginReducer(state = initialState.login, action) {
    switch (action.type) {
        case types.BEGIN_LOGIN :
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    token: action.token,
                }
            };
        case types.LOGIN_SUCCESS :
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    token: action.token,
                    status: action.status,
                    user: action.user
                }
            };
        case types.LOGIN_ERROR :
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    token: action.token,
                    status: action.status
                }
            };
        case types.GOT_DATA_LOGIN :
            return {
                ...state,
                ...{
                    isGetLocalData: action.isGetLocalData,
                    login: action.login
                }
            };
        case types.UPDATE_DATA_LOGIN :
            return {
                ...state,
                ...{
                    login: action.login,
                    error: action.error
                }
            };
        case types.LOGOUT : {
            return {
                ...state,
                ...{
                    status: action.status,
                }
            }
        }
        default:
            return state;
    }
}
