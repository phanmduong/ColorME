import React, {Component} from 'react';
import {
    TouchableOpacity, Button
} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Text } from 'native-base';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as loginAction from '../actions/loginAction';

class loginComponent extends Component{
    constructor(){
        super();
        this.saveData = this.saveData.bind(this);
        this.login = this.login.bind(this);
        this.updateFormData = this.updateFormData.bind(this);
    }

    componentWillMount(){
        this.props.loginAction.getDataLogin(this.props.login);
    }

    saveData(){
        this.props.loginAction.setDataLogin(this.props.login);
    }

    login(){
        this.props.loginAction.loginUser(this.props.login);
        this.saveData();
        this.props.navigation.navigate('Home');
    }

    updateFormData(name, value){
        let login = this.props.login;
        login[name] = value;
        this.props.loginAction.updateDataLogin(login);
    }


    render() {
        return (
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item>
                            <Input placeholder="Email"
                                   onChangeText={(data) => this.updateFormData('email', data)}

                            />
                        </Item>
                        <Item last>
                            <Input placeholder="Password"
                                   onChangeText={(data) => this.updateFormData('password', data)}

                            />
                        </Item>
                        <Button title={"Login"} onPress={() => this.login()} />
                        <Button title={"Go Main"} onPress={() => this.props.navigation.navigate('Home')}/>
                    </Form>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        login: state.login.login,
        error: state.login.error,
        isLoading: state.login.isLoading,
        token: state.login.token,
        isGetDataLocal: state.login.isGetDataLocal,
        status: state.login.status,
        user: state.login.user,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(loginComponent);