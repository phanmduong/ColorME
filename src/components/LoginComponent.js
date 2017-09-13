import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StatusBar, Text, TouchableOpacity, View,ActivityIndicator} from 'react-native';
import styles from '../styles/loginregisterstyle';
import {Madoka} from 'react-native-textinput-effects';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as loginAction from '../actions/loginAction'


class LoginComponent extends Component {
    constructor() {
        super();
        this.background = require('../img/bg2.png');
        this.login = this.login.bind(this);
        this.updateData = this.updateData.bind(this);
        this.saveData = this.saveData.bind(this);
    }

    componentWillMount() {
        this.props.loginAction.getDataLogin(this.props.login)
    }

    saveData() {
        this.props.loginAction.setDataLogin(this.props.login)
    }

    login() {

        if (this.props.login.email && this.props.login.password) {
            this.props.loginAction.loginUser(this.props.login);
            this.saveData();
        } else {
            alert('Mời bạn kiểm tra lại thông tin tài khoản');
        }
    }

    updateData(name, value) {
        let login = this.props.login;
        login[name] = value;
        this.props.loginAction.updateDataLogin(login);
    }


    render() {

        return (
            <Image source={this.background} style={styles.wrapperContainer}>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView behavior="position">
                    <View style={styles.containerTopLogin}>

                        {/*ROUTER*/}
                        <View style={styles.contentRouterRight}>
                            <TouchableOpacity style={styles.buttonRouter}
                                              onPress={() => this.props.navigation.navigate('RegisterScreen')}>
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
                                            animated= {true}
                                            color ='white'
                                            style = {{flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height : 40,
                                            }}
                                            size= 'small'
                                        />
                                    </View>
                                ) : (
                                    alert('Mời bạn kiểm tra lại thông tin tài khoản'),
                                        <Text style={styles.textButtonLogin}>Login</Text>
                                )
                                }
                            </TouchableOpacity>

                            {/*REGISTER*/}
                            <Text style={styles.textRegister}>Don't have an account?
                                <Text style={styles.textRegisterChild}
                                      onPress={() => this.props.navigation.navigate('RegisterScreen')}
                                >
                                    &nbsp;&nbsp;Register
                                </Text>
                            </Text>


                        </View>
                    </View>
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


