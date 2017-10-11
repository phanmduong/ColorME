import * as API from '../apis/likePostApi';

export function likePost(product_id, token){
    return function(){
        API.likePostApi(product_id, token)
    }
}
export function unlikePost(product_id, token){
    return function () {
        API.unlikePostApi(product_id, token)
    }
}