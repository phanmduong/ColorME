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
            }


        case types.GET_NEW_FEED_SUCCESS:
            return{
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    products: [...state.products, ...action.products],
                    result: action.result,
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

        default:
            return state;
    }
}