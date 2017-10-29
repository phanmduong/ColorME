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
