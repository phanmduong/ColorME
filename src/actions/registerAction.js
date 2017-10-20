import * as types from '../constants/actionTypes';
import * as registerApi from '../apis/registerApi'
export function beginRegister (){
    return{
        type : types.BEGIN_REGISTER,
        isLoading : true,
        error : false,
    }
}

export function registerSuccess (response){
    return {
        type : types.REGISTER_SUCCESS,
        isLoading : false,
        error : false,
        status : response.status,
    }
}
export function registerError (error){
    return {
        type : types.REGISTER_ERROR,
        isLoading: false,
        error: true,
        status : error.response.status,
    }
}

export function registerUser(register){
    return (dispatch) => {
        dispatch(beginRegister());
        registerApi.register(register)
            .then(function(response) {
                dispatch(registerSuccess(response))
                console.log(response)
            })
            .catch(function (error) {
                dispatch(registerError(error));
                console.log(error)
            })
    }
}