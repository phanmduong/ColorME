import * as types from '../constants/actionTypes';
import * as API from '../apis/updateProfileApi';

export function beginUpdateProfile(){
   return {
       type : types.BEGIN_UPDATE_PROFILE,
       isLoading : true,
   }
}
export function updateProfileSuccess(response) {
    return {
        type : types.UPDATE_PROFILE_SUCCESS,
        status : response.status,
        error : false,
        isLoading: false,
    }
}
export function updateProfileError(){
    return {
        type : types.UPDATE_PROFILE_ERROR,
        status : 0,
        error : true,
        isLoading : false
    }
}
export function updateProfile(info, token){
    return (dispatch) =>{
        dispatch(beginUpdateProfile())
        API.updateProfile(info, token)
            .then(function(response){
                dispatch(updateProfileSuccess(response))
            })
            .catch(function(){
                dispatch(updateProfileError())
            })
    }
}