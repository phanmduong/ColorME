/**
 * Created by phanmduong on 9/10/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginAction from '../actions/loginAction'
import LoginComponent from '../components/LoginComponent';
import {View, TouchableOpacity,Text} from'react-native'
import styles from '../styles/loginregisterstyle' ;

class LoginContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.saveData = this.saveData.bind(this);
        this.updateData = this.updateData.bind(this);
        this.login = this.login.bind(this);
    }



    render() {
        return (

            <LoginComponent></LoginComponent>




        );
    }
}

function mapStateToProps(state) {
    return {
        login: state.login.login,
        error: state.login.error,
        isLoading: state.login.isLoading,
        user: state.login.user,
        token: state.login.token,
        isGetDataLocalSuccessful: state.login.isGetDataLocalSuccessful,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginAction: bindActionCreators(loginAction, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
