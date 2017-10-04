import * as types from '../constants/actionTypes';
import * as API from '../apis/getNewFeedApi';
export function beginGetNewFeed() {
    return {
        type: types.BEGIN_GET_NEW_FEED,
        isLoading: true,
        error: false,
        result: false,
    }
}

export function getNewFeedSuccess(response) {
    return {
        type: types.GET_NEW_FEED_SUCCESS,
        isLoading: false,
        error: false,
        result: true,
        products: response.data.products,
    }
}

export function getNewFeedError() {
    return {
        type: types.GET_NEW_FEED_ERROR,
        isLoading: false,
        error: true,
        result: false,
    }
}

export function getNewFeed(filter, user_id) {
    return (dispatch) => {
        dispatch(beginGetNewFeed());
        API.getNewFeedApi(filter, user_id)
            .then(function (response) {
                dispatch(getNewFeedSuccess(response));
            })
            .catch(function(error) {
                dispatch(getNewFeedError(error));
            })

    }
}