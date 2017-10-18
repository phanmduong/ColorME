import * as likeApi from '../apis/likePostApi';

export function likePost(product_id, token){
    return function(){
        likeApi.likePostApi(product_id, token)
    }
}
export function unlikePost(product_id, token){
    return function () {
        likeApi.unlikePostApi(product_id, token)
    }
}