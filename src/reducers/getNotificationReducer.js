import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function getNotificationReducer(state = initialState.getNotification, action) {
    switch (action.type){
        case types.BEGIN_GET_NOTIFICATION:
            return{
                ...state
            }

        case types.GET_NOTIFICATION_SUCCESS:
            return{
                ...state,
                ...{
                    notification: action.notification,
                }
            }
        case types.GET_NOTIFICATION_ERROR:
            return{
                ...state,
            }
        default:
            return state
    }
}