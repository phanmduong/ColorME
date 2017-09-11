import React, {Component} from 'react-native';
import {StackNavigator} from 'react-navigation';
import LoginComponent from '../components/LoginComponent'
import RegisterComponent from '../components/RegisterComponent';
import ForgotPasswordComponent from '../components/ForgotPasswordComponent';

export const HomeStack = StackNavigator({
    LoginScreen:{
        screen: LoginComponent,
    },
    RegisterScreen:{
        screen: RegisterComponent,
    },
    ForgotPasswordComponent:{
        screen: ForgotPasswordComponent,
    },
})
