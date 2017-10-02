import * as types from '../constants/actionTypes';
import * as API from '../apis/getNewFeedApi';
import axios from 'axios'
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

export function getNewFeed() {
    return (dispatch) => {
        dispatch(beginGetNewFeed());
        console.log("BEGIN GET NEW FEED");
        API.getNewFeedApi()
            .then(function (response) {
                dispatch(getNewFeedSuccess(response));
                console.log("SUCCESS");
                console.log(response);
            })
            .catch(function(error) {
                dispatch(getNewFeedError(error));
                console.log("ERROR");
                console.log(error);
            })

    }
}