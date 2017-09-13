/**
 * Created by phanmduong on 9/10/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Text,View,TouchableOpacity} from 'react-native';
import {bindActionCreators} from 'redux';
import RegisterComponent from "../components/RegisterComponent";
import styles from '../styles/loginregisterstyle'

class RegisterContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <RegisterComponent/>

        );
    }
}

