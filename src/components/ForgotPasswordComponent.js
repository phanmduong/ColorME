import React, {Component} from 'react';
import {
    View, Image, Text, TouchableOpacity, KeyboardAvoidingView
} from 'react-native';
import styles from '../styles/loginregisterstyle';
import {Madoka} from 'react-native-textinput-effects';

export default class ForgotPasswordComponent extends Component {
    constructor() {
        super();
        background = require('../img/bg.png');
        logo = require('../img/lock.png');
    }

    render() {
        return (
            <Image source={background} style={styles.wrapperContainer}>
                <KeyboardAvoidingView behavior="position">
                    {/*LOGO*/}
                    <View style={styles.containerForgetPassword}>
                        <Text style={styles.forgetPasswordTitle}>Forgot password?</Text>
                        <Text style={styles.forgetPasswordContent}>We just need your registered Email id to sent you password reset instructions.</Text>

                    </View>
                    {/*FORM*/}
                    <View style={styles.contentForm}>
                        <View style={styles.contentInput}>
                            <Madoka
                                label={'Username'}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                borderColor={'rgba(239, 239, 239, 0.8)'}
                                labelStyle={{color: 'rgba(239, 239, 239, 0.8)', fontWeight: '300'}}
                                inputStyle={{color: '#FFFFFF', fontWeight: '500'}}
                            />
                            <Madoka
                                label={'Password'}
                                secureTextEntry={true}
                                returnKeyType="go"
                                borderColor={'rgba(239, 239, 239, 0.8)'}
                                labelStyle={{color: 'rgba(239, 239, 239, 0.8)', fontWeight: '300'}}
                                inputStyle={{color: '#FFFFFF', fontWeight: '500'}}

                            />
                            <Text style={styles.textForgotPassword}>Forgot your password?</Text>
                            <TouchableOpacity style={styles.buttonLogin}>
                                <Text style={styles.textButtonLogin}>Login</Text>
                            </TouchableOpacity>
                            <Text style={styles.textRegister}>Don't have an account?
                                <Text style={styles.textRegisterChild}
                                      onPress={() => this.props.navigation.navigate('LoginScreen')}
                                > Register</Text>
                            </Text>

                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Image>
        );
    }
}