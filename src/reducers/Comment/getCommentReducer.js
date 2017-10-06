import * as types from '../../constants/actionTypes'
import initialState from '../../constants/initialState'

export default function getCommentReducer(state = initialState.getComment, action){
    switch (action.type){
        case types.BEGIN_GET_COMMENT :
            return {
                isLoading : action.isLoading
            }
        case types.GET_COMMENT_SUCCESS :
            return {
                isLoading: action.isLoading,
                comments : action.comments
            }
        default :
            return state
    }
}