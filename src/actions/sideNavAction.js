import * as types from '../constants/actionTypes';
import * as sideNavApi from '../apis/sideNavApi';

export function beginSideNav() {
    return{
        type: types.BEGIN_GET_SIDE_NAV,
        isLoading: true,
    }
}

export function sideNavSuccess(response) {
    return{
        type: types.GET_SIDE_NAV_SUCCESS,
        data: response.data,
        isLoading: false,
    }
}

export function sideNavError() {
    return{
        type: types.GET_SIDE_NAV_ERROR,
        isLoading: false,
    }
}

export function getSideNav(id) {
    return(dispatch) => {
        dispatch(beginSideNav());
        sideNavApi.sideNavApi(id)
            .then(function (response) {
                dispatch(sideNavSuccess(response));
            })
            .catch(function (error) {
                dispatch(sideNavError(error));
                console.log(error)
            })
    }
}
