import * as baseApi from '../apis/baseApi';
import * as types from '../constants/actionTypes';


export function getListBase() {
    return (dispatch) => {
        dispatch({
            type: types.BEGIN_GET_LIST_BASE,
            isLoading: true,
        });
        baseApi.getBasesApi()
            .then(function (res) {
                dispatch({
                    type: types.GET_LIST_BASE_SUCCESS,
                    bases: res.data.data.bases,
                    isLoading: false,
                    error: false,
                });
                console.log(res.data.data);
            })
            .catch(function (error) {
                dispatch({
                    type: types.GET_LIST_BASE_ERROR,
                    isLoading: false,
                    error: true,
                });
            });
    }
}
