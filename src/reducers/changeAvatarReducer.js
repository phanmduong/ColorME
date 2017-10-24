import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';
export default function changAvatarReducer(state = initialState.changeAvatar, action) {
    switch (action.type){
        case types.BEGIN_CHANGE_AVATAR :
            return {
                ...state,
                ...{
                    isLoading : action.isLoading
                }
            };
        default :
            return state
    }
}