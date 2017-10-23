import * as types from '../constants/actionTypes';
import * as reportApi from '../apis/reportApi';

export function beginReportPost() {
    return{
        type: types.BEGIN_REPORT_POST,
        isLoading: true,
    }
}

export function reportPostSuccess(response) {
    return{
        type: types.REPORT_POST_SUCCESS,
        isLoading: false,
        reportPostStatus: 1,
    }
}

export function reportPostError() {
    return{
        type: types.REPORT_POST_ERROR,
        isLoading: false,
        reportPostStatus: 0,
    }
}

export function reportPost(id) {
    return(dispatch) => {
        dispatch(beginReportPost());
        reportApi.reportPostApi(id)
            .then(function (response) {
                dispatch(reportPostSuccess(response));
            })
            .catch(function (error) {
                dispatch(reportPostError(error));
            })
    }
}