import * as types from '../constants/actionTypes';
import * as newFeedApi from '../apis/newFeedApi';

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

export function getNewFeed(filter, page_id) {
    return (dispatch) => {
        dispatch(beginGetNewFeed());
        newFeedApi.getNewFeedApi(filter, page_id)
            .then(function (response) {
                dispatch(getNewFeedSuccess(response));
            })
            .catch(function (error) {
                dispatch(getNewFeedError(error));
            })
    }
}

export function beginRefreshNewFeed() {
    return {
        type: types.BEGIN_REFRESH_NEWFEED,
        isRefreshing: true,
    }
}

export function refreshNewFeedSuccess(response) {
    return {
        type: types.REFRESH_NEWFEED_SUCCESS,
        products: response.data.products,
        isRefreshing: false,
    }
}

export function refreshNewFeedError() {
    return {
        type: types.REFRESH_NEWFEED_ERROR,
        isRefreshing: false
    }
}

export function refreshNewFeed(filter, page_id) {
    return (dispatch) => {
        dispatch(beginRefreshNewFeed());
        newFeedApi.getNewFeedApi(filter, page_id)
            .then(function (response) {
                dispatch(refreshNewFeedSuccess(response));
            })
            .catch(function (error) {
                dispatch(refreshNewFeedError(error));
            })
    }
}

export function changeTheView() {
    return {
        type: types.CHANGE_THE_VIEW,
        products: [],
    }
}

