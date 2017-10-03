import * as registerTypes from '../constants/registerTypes';
import axios from 'axios';

export function beginRegister (){
    return{
        type : registerTypes.BEGIN_REGISTER,
        isLoading : true,
        error : false,
    }
}

export function registerSuccess (response){
    return {
        type : registerTypes.REGISTER_SUCCESS,
        isLoading : false,
        error : false,
        status : response.status,
    }
}
export function registerError (error){
    return {
        type : registerTypes.REGISTER_ERROR,
        isLoading: false,
        error: true,
        status : error.response.status,
    }
}

export function registerUser(register){
    return (dispatch) => {
        dispatch(beginRegister());
        axios.post('http://api.colorme.vn/user',{
            name : register.name,
            email : register.email,
            username : register.userName,
            password : register.password,

        })
            .then(function(response) {
                dispatch(registerSuccess(response))
            })
            .catch(function (error) {
                dispatch(registerError(error))
            })
    }
}