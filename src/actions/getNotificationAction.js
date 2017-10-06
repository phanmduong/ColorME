import * as types from '../constants/actionTypes';
import * as API from '../apis/getNotificationApi';

export function beginGetNotification() {
    return{
        type: types.BEGIN_GET_NOTIFICATION,
        notification: [],
    }
}

export function getNotificationSuccess(response) {
    return{
        type: types.GET_NOTIFICATION_SUCCESS,
        notification: response.data.notifications,
    }
}

export function getNotificationError() {
    return{
        type: types.GET_NOTIFICATION_ERROR,
        notification: [],
    }
}

export function getNotification(page_id, token) {
    return(dispatch) => {
        dispatch(beginGetNotification());
        API.getNotificationApi(page_id, token)
            .then(function (response) {
                dispatch(getNotificationSuccess(response));
            })
            .catch(function (error) {
                dispatch(getNotificationError(error));
            })
    }
}
