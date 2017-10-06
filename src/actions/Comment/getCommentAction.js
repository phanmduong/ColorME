import * as types from '../../constants/actionTypes'
import * as API from '../../apis/comment/getCommentApi'

export function beginGetComment(){
    return {
        type : types.BEGIN_GET_COMMENT,
        isLoading : true,
    }
}
export function getCommentSuccess(response){
    return {
        type : types.GET_COMMENT_SUCCESS,
        isLoading: false,
        comments : response.data.comments
    }
}

export function getComment(product_id){
    return (dispatch) =>{
        dispatch(beginGetComment())
        API.getCommentApi(product_id)
            .then(function(response){
                dispatch(getCommentSuccess(response))
                console.log(response.data.comments)
            })
            .catch(function (error){
                console.log(error)
            })
    }
}
