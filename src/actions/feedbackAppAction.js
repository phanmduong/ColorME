import * as  feedbackAppApi from '../apis/feedbackAppApi';
import {Alert} from 'react-native'
import * as types from '../constants/actionTypes';
export function beginFeedback(){
    return {
        type : types.BEGIN_FEEDBACK,
        isLoadingFeedback : true,
    }
}
export function feedbackSuccess(){
    return {
        type : types.FEEDBACK_SUCCESS,
        isLoadingFeedback: false
    }
}
export function feedbackApp(value){
    return (dispatch) => {
        dispatch(beginFeedback());
        feedbackAppApi.feedbackAppApi(value)
            .then(function (){
                dispatch(feedbackSuccess());
                Alert.alert(
                    'Cảm ơn những ý kiến đóng góp của bạn',
                     'Chúng tôi sẽ cố gắng sớm khắc phục !'
                )
            })
    }
}