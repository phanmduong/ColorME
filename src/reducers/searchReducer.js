import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function searchReducer(state = initialState.search, action) {
    switch (action.type) {
        case types.BEGIN_SEARCH:
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    result: action.result,
                }
            }

        case types.SEARCH_USER_SUCCESS:
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    users: [...state.users, ...action.users]
                }
            }
        case types.SEARCH_PRODUCT_SUCCESS:
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    products: [...state.products, ...action.products]
                }
            }

        case types.SEARCH_ERROR:
            return {
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