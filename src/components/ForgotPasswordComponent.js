import React, {Component} from 'react';
import {
    View, Image, Text, TouchableOpacity, KeyboardAvoidingView, StatusBar,
} from 'react-native';
import styles from '../styles/loginregisterstyle';
import {Madoka} from 'react-native-textinput-effects';


export default class ForgotPasswordComponent extends Component {
    constructor() {
        super();
        this.background = require('../img/bg2.png');

    }

    render() {
        return (
            <Image source={this.background} style={styles.wrapperContainer}>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView behavior="padding">
                    <View style={styles.containerTopForgotPassword}>

                        {/*ROUTER*/}
                        <View style={styles.contentRouterLeft}>
                            <TouchableOpacity style={styles.buttonRouter}
                                              onPress={() => this.props.navigation.navigate('LoginScreen')}>
                                <Text style={styles.textRouterLeft}>
                                    Forgot password
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {/*LOGO*/}
                        <View style={styles.containerForgetPassword}>
                            <Text style={styles.forgetPasswordTitle}>Forgot password?</Text>
                            <Text style={styles.forgetPasswordContent}>We just need your registered Email id to sent you
                                password reset instructions.</Text>
                        </View>
                    </View>

                    {/*FORM*/}
                    <View style={styles.contentForm}>
                        <View style={styles.contentInput}>

                            {/*EMAIL*/}
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

                            {/*RESET PASSWORD BUTTON*/}
                            <TouchableOpacity style={styles.buttonLogin}>
                                <Text style={styles.textButtonLogin}>Reset Password</Text>
                            </TouchableOpacity>

                            {/*BACK BUTTON*/}

                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Image>
        );
    }
}