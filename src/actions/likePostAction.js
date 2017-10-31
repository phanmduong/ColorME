import * as likeApi from '../apis/likePostApi';
import * as types from '../constants/actionTypes'
export function likePostSuccess(response){
    return {
        type : types.LIKE_POST_SUCCESS,
        liked : response.data,
    }
}
export function unlikePostSuccess(response){
    return {
        type : types.UNLIKE_POST_SUCCESS,
        liked : response.data,
    }
}
export function likePost(product_id, token){
    return function(dispatch){
        likeApi.likePostApi(product_id, token)
            .then(function(response){
                dispatch(likePostSuccess(response))
            })
            .catch(function (error){
            })
    }
}
export function unlikePost(product_id, token){
    return function (dispatch) {
        likeApi.unlikePostApi(product_id, token)
            .then(function (response){
                dispatch(unlikePostSuccess(response))
            })
            .catch(function(error){
            })
    }
}
export function likeComment(comment_id, user_id) {
    return function (){
        likeApi.likeComment(comment_id, user_id)
    }
}