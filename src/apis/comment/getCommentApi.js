import axios from'axios'
import * as env from '../../constants/env'

export function getCommentApi(product_id){
    let url = env.API_DATA + '/products/' + product_id + '/comments';
    return axios.get(url)
}