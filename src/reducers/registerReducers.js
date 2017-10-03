import * as registerTypes from '../constants/registerTypes';
import initialState from '../reducers/initiaState';

export default function registerReducer (state = initialState.register, action) {
    switch (action.type) {
        case registerTypes.BEGIN_REGISTER :
            return {
                ...state,
                ...{
                    isLoading : action.isLoading,
                    error : action.error,
                }
            }
        case registerTypes.REGISTER_SUCCESS :
            return {
                ...state,
                ...{
                    isLoading : action.isLoading,
                    error : action.error,
                    status : action.status
                }
            }
        case registerTypes.REGISTER_ERROR :
            return {
                ...state,
                ...{
                    isLoading : action.isLoading,
                    error : action.error,
                    status: action.status,
                }
            }
        default :
            return state

    }
}