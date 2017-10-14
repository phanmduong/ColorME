import * as types from '../constants/actionTypes';
import * as API from '../apis/changeAvatarApi';
import {Alert} from 'react-native'
export function beginChangeAvatar(){
    return {
        type : types.BEGIN_CHANGE_AVATAR,
        isLoading : true,
    }
}
export function changeAvatar(info, token){
    return (dispatch) =>{
        dispatch(beginChangeAvatar())
        let photo = {
            uri: info.fileImage.uri,
            type: info.fileImage.type,
            name: 'avatar',
        };
        let formData = new FormData();
        formData.append('avatar', photo);
        let xhr = new XMLHttpRequest();
        xhr.open('POST', API.changeAvatarApi(token));
        xhr.setRequestHeader("Content-Type", 'image/jpeg/png/jpg');
        xhr.send(formData)
        // xhr.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //         Alert.alert('UpLoad Done')
        //         this.responseXML
            // }
        };
    }
