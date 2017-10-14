import React, {Component} from 'react'
import {
    Title, Container, Header, Content, Card, CardItem,
    Thumbnail, Text, Button, Left, Body, Right
} from 'native-base';
import {View, StatusBar} from 'react-native';
import styles from '../../styles/loginRegisterStyle'
import part from '../../styles/partStyle';
import LoginComponent from './LoginContainer'
import RegisterComponent from './RegisterContainer'
import * as loginAction from '../../actions/loginActions';
import * as registerAction from '../../actions/registerAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import ScrollableTabView from 'react-native-scrollable-tab-view'
import * as color from '../../styles/color';


export class TabLoginAndRegister extends Component {
    constructor() {
        super();
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
            <Container style={styles.wrapperContainer}>
                <StatusBar
                    barStyle="light-content"
                />
                <Container>
                    <Body style={styles.topContainerLogin}>
                    <View style={styles.wrapperColorME}>
                        <Text style={styles.textColor}>Color</Text>
                        <Text style={styles.textME}>ME</Text>
                    </View>
                    <View/>
                    <View style={styles.wrapperForm}>
                        <ScrollableTabView
                            tabBarInactiveTextColor={color.gray}
                            tabBarUnderlineStyle={{backgroundColor: color.main}}
                            style={part.formLoginRegister}
                            tabBarActiveTextColor={color.main}
                        >
                            <LoginComponent
                                tabLabel="Đăng nhập"
                                signIn={this.signIn}
                                updateData={this.updateData}
                                isLoading={this.props.isLoadingLogin}
                                status={this.props.statusLogin}
                                login={this.props.login}
                                error={this.props.errorLogin}
                                getData={this.getData}
                                navigation={this.props.navigation}
                                email={this.props.login.email}
                                password={this.props.login.password}
                                initialLogin={this.initialLogin}
                            />
                            <Content tabLabel="Đăng ký">
                                <RegisterComponent
                                    {...this.props}
                                    register={this.register}
                                />
                            </Content>
                        </ScrollableTabView>
                    </View>
                    </Body>
                </Container>
            </Container>
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
