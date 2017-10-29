import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function getNotificationReducer(state = initialState.getNotification, action) {
    switch (action.type) {
        case types.BEGIN_GET_NOTIFICATION:
            return {
                ...state,
                ...{
                    isLoading: true,
                }
            };
        case types.GET_NOTIFICATION_SUCCESS:
            return {
                ...state,
                ...{
                    notification: state.notification.concat(action.notification),
                    isLoading: false,
                }
            };
        case types.GET_NOTIFICATION_ERROR:
            return {
                ...state,
                ...{
                    isLoading: false,

                }
            };
        default:
            return state
    }
}