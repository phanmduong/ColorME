import * as types from '../constants/actionTypes';
import * as topicApi from '../apis/topicApi';

export function getTopic(id, token) {
    return(dispatch) => {
        dispatch({
            type: types.BEGIN_GET_TOPIC,
        });
        topicApi.getTopicApi(id, token)
            .then(function (response) {
                dispatch({
                    type: types.GET_TOPIC_SUCCESS,
                    topic: response.data,
                });
            })
            .catch(function (error) {
                throw (error)
            })
    }
}

export function getProductsInTopic(id, page ,token) {
    return(dispatch) => {
        dispatch({
            type: types.BEGIN_GET_PRODUCTS_IN_TOPIC,
        });
        topicApi.getProductsInTopic(id, page ,token)
            .then(function (response) {
                dispatch({
                    type: types.GET_PRODUCTS_IN_TOPIC_SUCCESS,
                    products: response.data.products,
                });
            })
            .catch(function (error) {
                throw (error)
            })
    }
}