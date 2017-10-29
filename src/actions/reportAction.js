import * as types from '../constants/actionTypes';
import * as reportApi from '../apis/reportApi';
import {AsyncStorage, Alert} from 'react-native'

function beginReportPost() {
    return{
        type: types.BEGIN_REPORT_POST,
        isLoading: true,
    }
}

function reportPostSuccess(response) {
    return{
        type: types.REPORT_POST_SUCCESS,
        isLoading: false,
        reportPostResult: response.data
    }
}

function reportPostError() {
    return{
        type: types.REPORT_POST_ERROR,
        isLoading: false,
        reportPostStatus: 0,
    }
}

export function reportPost(id, token) {
    return(dispatch) => {
        dispatch(beginReportPost());
        reportApi.reportPostApi(id, token)
            .then(function (response) {
                dispatch(reportPostSuccess(response));
                Alert.alert(
                    'Gửi báo cáo thành công.',
                    response.data.data.message,
                    [
                        {text: 'Xong'},
                    ],
                )
            })
            .catch(function (error) {
                dispatch(reportPostError(error));
                Alert.alert(
                    'Gửi báo cáo thất bại.',
                    'Có lỗi xảy ra trong quá trình xử lý yêu cầu của bạn. Hãy thử lại sau',
                    [
                        {text: 'Xác nhận'},
                    ],
                )
            })
    }
}