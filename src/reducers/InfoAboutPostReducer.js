import * as types from '../constants/actionTypes';
import initialState from '../constants/initialState';

export default function getFullInfoAboutOnePostReducer(state = initialState.getFullInfoAboutOnePost, action) {
    switch (action.type) {
        case types.BEGIN_GET_FULL_INFO_ABOUT_ONE_POST:
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                }
            };
        case types.BEGIN_POST_COMMENT:
            return {
                ...state,
                ...{
                    statusPostComment: action.statusPostComment
                }
            };
        case types.GET_FULL_INFO_ABOUT_ONE_POST_SUCCESS:
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    post: action.post,
                    result: action.result,
                }
            };
        case types.GET_COMMENTS_POST_SUCCESS:
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    comments: action.comments,
                    result: action.result,
                }
            };
        case types.GET_POST_LIKER_SUCCESS:
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    likers: action.likers,
                    result: action.result,
                }
            };
        case types.POST_COMMENT_SUCCESS:
            return {
                ...state,
                ...{
                    statusPostComment: action.statusPostComment,
                    idComment : action.idComment,
                }
            };
        case types.GET_FULL_INFO_ABOUT_ONE_POST_ERROR:
            return {
                ...state,
                ...{
                    isLoading: action.isLoading,
                    error: action.error,
                    result: action.result
                }
            };
        case types.POST_COMMENT_ERROR:
            return {
                ...state,
                ...{
                    statusPostComment: action.statusPostComment
                }
            };
        default:
            return state;
    }
}