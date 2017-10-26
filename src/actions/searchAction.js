import * as types from '../constants/actionTypes';
import * as searchApi from '../apis/searchApi';

export function beginSearch() {
    return{
        type: types.BEGIN_SEARCH,
        isLoading: true,
        error: false,
        result: false,
    }
}

export function searchUserSuccess(response) {
    return{
        type: types.SEARCH_USER_SUCCESS,
        users: response.data.users,
        isLoading: false,
        error: false,
        result: true,
    }
}
export function searchProductSuccess(response) {
    return{
        type: types.SEARCH_PRODUCT_SUCCESS,
        products: response.data.products,
        isLoading: false,
        error: false,
        result: true,
    }
}
export function searchError() {
    return{
        type: types.SEARCH_ERROR,
        isLoading: false,
        error: true,
        result: true,
    }
}

export function searchUsers(term, limit, page) {
    return(dispatch) => {
        dispatch(beginSearch());
        searchApi.searchUserApi(term, limit, page)
            .then(function (response) {
                dispatch(searchUserSuccess(response));
            })
            .catch(function (error) {
                dispatch(searchError(error));
            })
    }
}
export function searchProducts(term, limit, page) {
    return(dispatch) => {
        dispatch(beginSearch());
        searchApi.searchProducts(term, limit, page)
            .then(function (response) {
                dispatch(searchProductSuccess(response));
            })
            .catch(function (error) {
                dispatch(searchError(error));
            })
    }
}
export function changeValueSearch(){
    return {
        type : types.CHANGE_VALUE_SEARCH,
        users : [],
        products : [],
    }
}