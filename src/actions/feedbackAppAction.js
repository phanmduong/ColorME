import * as  feedbackAppApi from '../apis/feedbackAppApi';
import {Alert} from 'react-native'
export function feedbackApp(value){
    return function (){
        feedbackAppApi.feedbackAppApi(value)
            .then(function (){
                Alert.alert(
                    'Cảm ơn những ý kiến đóng góp của bạn',
                     'Chúng tôi sẽ cố gắng sớm khắc phục !'
                )
            })
    }
}