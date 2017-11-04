import * as types from '../constants/actionTypes';
import * as notificationApi from '../apis/notificationApi';

export function beginGetNotification() {
    return{
        type: types.BEGIN_GET_NOTIFICATION,
        isLoading: true,
    }
}

export function getNotificationSuccess(response) {
    return{
        type: types.GET_NOTIFICATION_SUCCESS,
        notification: response.data.notifications,
        isLoading: false,

    }
}

export function getNotificationError() {
    return{
        type: types.GET_NOTIFICATION_ERROR,
        isLoading: false,
    }
}
export function beginRefNotification() {
    return{
        type: types.BEGIN_REFRESH_NOTIFICATION,
        isLoadingRef: true,
    }
}

export function refNotificationSuccess(response) {
    return{
        type: types.REFRESH_NOTIFICATION_SUCCESS,
        notification: response.data.notifications,
        isLoadingRef: false,

    }
}

export function refNotificationError() {
    return{
        type: types.REFRESH_NOTIFICATION_ERROR,
        isLoadingRef: false,
    }
}

export function getNotification(page_id, token) {
    return(dispatch) => {
        dispatch(beginGetNotification());
        notificationApi.getNotificationApi(page_id, token)
            .then(function (response) {
                dispatch(getNotificationSuccess(response));
            })
            .catch(function (error) {
                dispatch(getNotificationError(error));
            })
    }
}
export function refNotification(page_id, token) {
    return(dispatch) => {
        dispatch(beginRefNotification());
        notificationApi.getNotificationApi(page_id, token)
            .then(function (response) {
                dispatch(refNotificationSuccess(response));
            })
            .catch(function (error) {
                dispatch(refNotificationError(error));
            })
    }
}
