import React, {Component} from 'react';
import {
    View, Image, Text, TouchableOpacity, KeyboardAvoidingView, StatusBar, Button
} from 'react-native';
import styles from '../styles/loginregisterstyle';
import {Madoka} from 'react-native-textinput-effects';


export default class LoginComponent extends Component {
    constructor() {
        super();
        background = require('../img/bg2.png');
    }


    render() {

        return (
                <Image source={background} style={styles.wrapperContainer}>
                    <StatusBar barStyle="light-content"/>
                    <KeyboardAvoidingView behavior="position">
                        <View style={styles.containerTopLogin}>

                            {/*ROUTER*/}
                            <View style={styles.contentRouterRight}>
                                <TouchableOpacity  style={styles.buttonRouter} onPress={() => this.props.navigation.navigate('RegisterScreen')}>
                                    <Text style={styles.textRouterRight}>
                                        Login
                                    </Text>
                                </TouchableOpacity>

                            </View>


                            {/*LOGO*/}
                            <View style={styles.containerColorME}>
                                <View style={styles.contentColorME}>
                                    <Text style={styles.textColor}>color</Text>
                                    <Text style={styles.textME}>ME</Text>
                                </View>
                            </View>
                        </View>

                        {/*FORM*/}
                        <View style={styles.contentForm}>
                            <View style={styles.contentInput}>

                                {/*USERNAME*/}
                                <Madoka
                                    label={'Username'}
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    returnKeyType="next"
                                    borderColor={'rgba(239, 239, 239, 0.8)'}
                                    labelStyle={{color: 'rgba(239, 239, 239, 0.8)', fontWeight: '300'}}
                                    inputStyle={{color: '#FFFFFF', fontWeight: '500'}}
                                />

                                {/*PASSWORD*/}
                                <Madoka
                                    label={'Password'}
                                    secureTextEntry={true}
                                    returnKeyType="go"
                                    borderColor={'rgba(239, 239, 239, 0.8)'}
                                    labelStyle={{color: 'rgba(239, 239, 239, 0.8)', fontWeight: '300'}}
                                    inputStyle={{color: '#FFFFFF', fontWeight: '500'}}
                                />

                                {/*FORGOT PASSWORD*/}
                                <Text style={styles.textForgotPassword}
                                      onPress={() => {this.props.navigation.navigate('ForgotPasswordScreen')}}
                                >
                                    Forgot your password?
                                </Text>

                                {/*LOGIN BUTTOM*/}
                                <TouchableOpacity style={styles.buttonLogin}>
                                    <Text style={styles.textButtonLogin}>Login</Text>
                                </TouchableOpacity>

                                {/*REGISTER*/}
                                <Text style={styles.textRegister}>Don't have an account?
                                    <Text style={styles.textRegisterChild}
                                          onPress={() => this.props.navigation.navigate('RegisterScreen')}
                                    >
                                        Register
                                    </Text>
                                </Text>


                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </Image>
        );
    }
}

