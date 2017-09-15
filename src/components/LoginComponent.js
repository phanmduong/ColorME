import React, {Component} from 'react';
import {
    Image, KeyboardAvoidingView, StatusBar, Text, TouchableOpacity, View, ActivityIndicator, Animated, Easing
} from 'react-native';
import styles from '../styles/loginregisterstyle';
import {Madoka} from 'react-native-textinput-effects';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginAction from '../actions/loginAction'
import _ from 'lodash';

class LoginComponent extends Component {
    constructor() {
        super();
        this.background = require('../img/bg2.png');
        this.login = this.login.bind(this);
        this.updateData = this.updateData.bind(this);
        this.saveData = this.saveData.bind(this);
        this.state = {
            fadeForm: new Animated.Value(0),
            marginLogo : new Animated.Value(250),
        }
    }


    componentWillMount() {
        this.props.loginAction.getDataLogin(this.props.login);
        const opacity = Animated.timing(
            this.state.fadeForm,{
                toValue: 1,
                duration: 1000,
                delay: 2500
            }
        );
        const marginTop = Animated.timing(
            this.state.marginLogo,{
                toValue: 0,
                duration: 1500,
                delay: 2000,
                easing: Easing.bounce
            }
        );
        Animated.parallel([opacity, marginTop]).start();
    }

    saveData() {
        this.props.loginAction.setDataLogin(this.props.login)
    }

    login() {

        if (this.props.login.email && this.props.login.password) {
            this.props.loginAction.loginUser(this.props.login);
            this.saveData();
        }
        else {
            alert ('Mời bạn kiểm tra lại thông tin tài khoản')
        }

    }

    componentWillReceiveProps(nextProps) {
        if (!_.isUndefined(nextProps.token) && nextProps.token.trim().length > 0) { // để kiểm tra trên serve}
            if (!nextProps.isLoading && !nextProps.error) {
                if (nextProps.user.role <= 0) {
                    alert('Mời bạn kiểm tra lại thông tin tài khoản')
                }
            }
        }

        if (nextProps.error) {
            alert('Mời bạn kiểm tra lại thông tin tài khoản')
        }

    }

    updateData(name, value) {
        let login = this.props.login;
        login[name] = value;
        this.props.loginAction.updateDataLogin(login);
    }

    render() {
        const opacity = this.state.fadeForm;
        const marginTop = this.state.marginLogo;

        return (
            <Image source={this.background} style={styles.wrapperContainer}>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.containerTopLogin }>

                        {/*ROUTER*/}
                        <Animated.View style={{
                            opacity,
                            marginTop: 30,
                            flex: 1,
                            justifyContent : 'center',
                            borderRightWidth: 1,
                            alignItems: 'flex-end',
                            borderColor: 'rgb(239, 239, 239)',
                            width: 300,
                        }}>
                            <TouchableOpacity style={styles.buttonRouter}
                                              onPress={() => this.props.navigation.navigate('RegisterScreen')}>
                                <Text style={styles.textRouterRight}>
                                    Login
                                </Text>
                            </TouchableOpacity>

                        </Animated.View>


                        {/*LOGO*/}
                        <View style={styles.containerColorME}>
                            <Animated.View style={{
                                marginTop,
                                alignItems: 'flex-end',
                            }}>
                                <Text style={styles.textColor}>color</Text>
                                <Text style={styles.textME}>ME</Text>
                            </Animated.View>
                        </View>
                    </View>

                    {/*FORM*/}
                    <Animated.View style={{
                        opacity,
                        flex: 1,
                    }}>
                        <View style={styles.contentInput}>

                            {/*USERNAME*/}
                            <Madoka
                                label={'Email'}
                                autoCapitalize="none"
                                autoCorrect={false}
                                onChangeText={(email) => this.updateData('email', email)}
                                value={this.props.login.email}
                                returnKeyType="next"
                                borderColor={'rgba(239, 239, 239, 0.8)'}
                                labelStyle={{color: 'rgba(239, 239, 239, 0.8)', fontWeight: '300'}}
                                inputStyle={{color: '#FFFFFF', fontWeight: '500'}}
                            />

                            {/*PASSWORD*/}
                            <Madoka
                                label={'Password'}
                                secureTextEntry={true} // dang mat khau
                                onChangeText={(password) => this.updateData('password', password)}
                                value={this.props.login.password}
                                returnKeyType="go"
                                borderColor={'rgba(239, 239, 239, 0.8)'}
                                labelStyle={{color: 'rgba(239, 239, 239, 0.8)', fontWeight: '300'}}
                                inputStyle={{color: '#FFFFFF', fontWeight: '500'}}
                                onSubmitEditing={() => this.login()}

                            />

                            {/*FORGOT PASSWORD*/}
                            <Text style={styles.textForgotPassword}
                                  onPress={() => {
                                      this.props.navigation.navigate('ForgotPasswordScreen')
                                  }}
                            >
                                Forgot your password?
                            </Text>

                            {/*LOGIN BUTTON*/}
                            <TouchableOpacity
                                disabled={this.props.isLoading}
                                block
                                rounded
                                style={styles.buttonLogin}
                                onPress={() => this.login()}
                            >
                                {(this.props.isLoading) ? (
                                    <View style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <ActivityIndicator
                                            animated={true}
                                            color='white'
                                            style={{
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: 40,
                                            }}
                                            size='small'
                                        />
                                    </View>
                                ) : (
                                    
                                    <Text style={styles.textButtonLogin}>Login</Text>
                                )
                                }
                            </TouchableOpacity>

                            {/*REGISTER*/}
                            <Text style={styles.textRegister}>Don't have an account?
                                <Text style={styles.textRegisterChild}
                                      onPress={() => this.props.navigation.navigate('RegisterScreen')}>
                                    &nbsp;&nbsp;Register
                                </Text>
                            </Text>
                        </View>
                    </Animated.View>
                </KeyboardAvoidingView>
            </Image>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);


