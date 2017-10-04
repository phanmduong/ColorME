import * as types from '../constants/actionTypes';
import * as API from '../apis/searchApi';

export function beginSearch() {
    return{
        type: types.BEGIN_SEARCH,
        isLoading: true,
        error: false,
        result: false,
    }
}

export function searchSuccess(response) {
    return{
        type: types.SEARCH_SUCCESS,
        users: response.data.users,
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
        API.searchUserApi(term, limit, page)
            .then(function (response) {
                dispatch(searchSuccess(response));
                console.log("SEARCH_USERS SUCCESS");
                console.log(response.data.users)
            })
            .catch(function (error) {
                dispatch(searchError(error));
                console.log("SEARCH_USER_PROFILE_ERROR");
                console.log(error);
            })
    }
}
export function searchProducts(term, limit, page) {
    return(dispatch) => {
        dispatch(beginSearch());
        API.searchProducts(term, limit, page)
            .then(function (response) {
                dispatch(searchSuccess(response));
                console.log("SEARCH_PRODUCTS SUCCESS");
                console.log(response.data.products)
            })
            .catch(function (error) {
                dispatch(searchError(error));
                console.log("SEARCH_USER_PROFILE_ERROR");
                console.log(error);
            })
    }
}