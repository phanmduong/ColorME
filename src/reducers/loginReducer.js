import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function loginReducer(state = initialState.login, action) {
    switch (action.type){
        case types.BEGIN_LOGIN:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                }
            }

        case types.LOGIN_SUCCESS:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    token: action.token,
                    status: action.state,
                    userID: action.userID,
                    user: action.user,
                }
            }

        case types.LOGIN_ERROR:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error
                }
            }

        case types.GOT_DATA_LOGIN:
            return{
                ...state,
                ...{
                    login: action.login,
                    isGetLocalData: action.isGetLocalData,
                }
            }

        case types.UPDATE_DATA_LOGIN:
            return{
                ...state,
                ...{
                    login: action.login
                }
            }

        default:
            return state;
    }
}