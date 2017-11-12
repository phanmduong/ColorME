import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function topicReducer(state = initialState.topic, action) {
    switch (action.type) {
        case types.BEGIN_GET_TOPIC:
            return {
                ...state,
                ...{
                    isLoading: true,
                }
            };
        case types.GET_TOPIC_SUCCESS:
            return {
                ...state,
                ...{
                    topic: action.topic,
                    isLoading: false,
                }
            };
        case types.BEGIN_GET_PRODUCTS_IN_TOPIC:
            return {
                ...state,
                ...{
                    isLoadingProducts: true,
                }
            };
        case types.GET_PRODUCTS_IN_TOPIC_SUCCESS:
            return {
                ...state,
                ...{
                    products: action.products,
                    isLoadingProducts: false,
                }
            };
        default:
            return state
    }
}