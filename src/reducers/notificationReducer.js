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
                    notification: [...state.notification, ...action.notification],
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
        case types.BEGIN_REFRESH_NOTIFICATION:
            return {
                ...state,
                ...{
                    isLoadingRef: true,
                }
            };
        case types.REFRESH_NOTIFICATION_SUCCESS:
            let array1 = state.notification.slice(0, 21);
            let array2 = action.notification;
            let array3 = [];
            for (let i = 0; i < 21; i++) {
                if (array2[i].id !== array1[i].id) {
                    array3.push(array2[i])
                }
            }
            return {
                ...state,
                ...{
                    isLoadingRef: action.isLoadingRef,
                    notification: [array3, ...state.notification]
                }
            }
        case types.REFRESH_NOTIFICATION_ERROR:
            return {
                ...state,
                ...{
                    isLoadingRef: false,
                }
            };
        default:
            return state
    }
}