import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function getNewFeedReducer(state = initialState.getNewFeed, action) {
    switch (action.type) {
        case types.BEGIN_GET_NEW_FEED:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                }
            };
        case types.BEGIN_REFRESH_NEWFEED :
            return {
                ...state,
                ...{
                    isRefreshing : action.isRefreshing
                }
            };
        case types.GET_NEW_FEED_SUCCESS:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    products: [...state.products, ...action.products],
                    result: action.result,
                }
            };
        case types.REFRESH_NEWFEED_SUCCESS: {
            let array1 = state.products.slice(0, 21);
            let array2 = action.products;
            let array3 = [];
            for (let i = 0; i < 21; i++) {
                if (array2[i].id !== array1[i].id) {
                    array3.push(array2[i])
                }
            }
            return {
                ...state,
                ...{
                    isRefreshing: action.isRefreshing,
                    products: [array3, ...state.products]
                }
            }
        }
        case types.GET_NEW_FEED_ERROR:{
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                }
            }
        }
        case types.REFRESH_NEWFEED_ERROR:{
            return {
                ...state,
                ...{
                    isRefreshing : action.isRefreshing
                }
            }
        }
        default:
            return state;
    }
}