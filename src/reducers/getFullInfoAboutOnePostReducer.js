
import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function getFullInfoAboutOnePostReducer(state = initialState.getFullInfoAboutOnePost, action) {
    switch (action.type) {
        case types.BEGIN_GET_FULL_INFO_ABOUT_ONE_POST:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                }
            }


        case types.GET_FULL_INFO_ABOUT_ONE_POST_SUCCESS:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    post: action.post,
                    result: action.result,
                }
            }

        case types.GET_FULL_INFO_ABOUT_ONE_POST_ERROR:{
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    result : action.result
                }
            }
        }

        default:
            return state;
    }
}