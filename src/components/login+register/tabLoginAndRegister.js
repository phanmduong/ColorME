import {Container, Form, Item, Tab, Tabs,Header} from 'native-base';
import React, {Component} from 'react'
import {KeyboardAvoidingView, Text,View} from 'react-native';
import styles from '../../styles/styles'
import LoginComponent from '../login+register/loginComponent'
import RegisterComponent from '../login+register/registerComponent'
import * as loginAction from '../../actions/loginActions';
import * as registerAction from '../../actions/registerAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'

export class TabLoginAndRegister extends Component {
    constructor() {
        super()
        this.register = this.register.bind(this);
        this.signIn = this.signIn.bind(this);
        this.updateData = this.updateData.bind(this);
        this.saveData = this.saveData.bind(this);
        this.getData = this.getData.bind(this);
    }

    register(value) {
        this.props.registerAction.registerUser(value)
    }

    saveData() {
        this.props.loginAction.setDataLogin(this.props.login)
    }

    getData() {
        this.props.loginAction.getDataLogin(this.props.login);
    }

    signIn() {
        this.props.loginAction.loginUser(this.props.login);
        this.saveData();
    }

    updateData(name, value) {
        let login = this.props.login;
        login[name] = value;
        this.props.loginAction.updateDataLogin(login);
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.wrapperContainer}>
                <View style={styles.topContainerLogin}>
                    <Text style={styles.textColor}>Color</Text>
                    <Text style={styles.textME}>ME</Text>
                </View>
                <ScrollableTabView>
                    <LoginComponent
                        tabLabel="Sign In"
                        signIn={this.signIn}
                        updateData={this.updateData}
                        isLoading={this.props.isLoadingLogin}
                        status={this.props.statusLogin}
                        login={this.props.login}
                        error={this.props.errorLogin}
                        getData={this.getData}
                        navigation={this.props.navigation}
                    />
                    <RegisterComponent
                        tabLabel="Sign Up"
                        {...this.props}
                        register={this.register}
                    />

                </ScrollableTabView>
            </KeyboardAvoidingView>


        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading: state.register.isLoading,
        error: state.register.error,
        status: state.register.status,
        login: state.login.login,
        errorLogin: state.login.error,
        isLoadingLogin: state.login.isLoading,
        statusLogin: state.login.status,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerAction: bindActionCreators(registerAction, dispatch),
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TabLoginAndRegister)
