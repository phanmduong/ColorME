import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function searchReducer(state = initialState.search, action) {
    switch (action.type){
        case types.BEGIN_SEARCH:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    result: action.result,
                }
            }

        case types.SEARCH_SUCCESS:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    users: action.users,
                    products: action.products,
                }
            }

        case types.SEARCH_ERROR:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    result: action.result,
                }
            }

        default:
            return state;
    }
}