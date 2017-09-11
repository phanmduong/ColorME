import React, {Component} from 'react';
import {
    View, Image, Text, TouchableOpacity, KeyboardAvoidingView, StatusBar
} from 'react-native';
import styles from '../styles/loginregisterstyle';
import {Madoka} from 'react-native-textinput-effects';

let that;
export default class ForgotPasswordComponent extends Component {
    constructor() {
        super();
        background = require('../img/bg2.png');
        that = this;
    }

    render() {
        return (
            <Image source={background} style={styles.wrapperContainer}>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView behavior="padding">
                    {/*LOGO*/}
                    <View style={styles.containerForgetPassword}>
                        <Text style={styles.forgetPasswordTitle}>Forgot password?</Text>
                        <Text style={styles.forgetPasswordContent}>We just need your registered Email id to sent you password reset instructions.</Text>
                    </View>

                    {/*FORM*/}
                    <View style={styles.contentForm}>
                        <View style={styles.contentInput}>
                            <Madoka
                                label={'Email'}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="send"
                                keyboardType="email-address"
                                borderColor={'rgba(239, 239, 239, 0.8)'}
                                labelStyle={{color: 'rgba(239, 239, 239, 0.8)', fontWeight: '300'}}
                                inputStyle={{color: '#FFFFFF', fontWeight: '500'}}
                            />
                            <TouchableOpacity style={styles.buttonLogin}>
                                <Text style={styles.textButtonLogin}>Reset Password</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Image>
        );
    }
}