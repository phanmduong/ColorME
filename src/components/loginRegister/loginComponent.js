import React, {Component} from 'react'
import {ActivityIndicator, Alert, KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native'
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Input, Item} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import * as size from '../../styles/size';
import * as loginAction from '../../actions/loginActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class LoginComponent extends Component {
    constructor() {
        super();
    }

    //
    componentWillMount() {
        this.props.loginAction.getDataLogin(this.props.login);
    }

    saveData() {
        this.props.loginAction.setDataLogin(this.props.login)
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

    componentWillReceiveProps(nextProps) {
        if (nextProps.status === 200) {
            this.props.navigation.navigate('Main');
        }
        if (nextProps.error) {
            Alert.alert('Mời bạn kiểm tra lại thông tin tài khoản ')
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="position" style={styles.wrapperContainer}>
                <View style={styles.wrapperColorME}>
                    <Text style={styles.textColor}>Color</Text>
                    <Text style={styles.textME}>ME</Text>
                </View>
                <Container style={styles.midContainerLogin}>
                    <Container style={styles.contentForm}>
                        <Text style={styles.textTitleInput}>EMAIL</Text>
                        <Item>
                            <Input style={part.inputTheme02}
                                   color={color.gray}
                                   autoCorrect={false}
                                   onChangeText={(email) => {
                                       this.updateData('email', email);
                                   }}
                                   value={this.props.login.email}
                            />
                        </Item>
                        <Text style={styles.textTitleInput}>PASSWORD</Text>
                        <Item>
                            <Input style={part.inputTheme02}
                                   color={color.gray}
                                   secureTextEntry={true}
                                   onChangeText={(password) => {
                                       this.updateData('password', password)
                                   }}
                                   value={this.props.login.password}
                            />
                        </Item>
                        <Item style={{marginLeft: 37}}>
                            <TouchableOpacity
                                disabled={this.props.isLoading}
                                block
                                rounded
                                style={styles.buttonRegister}
                                onPress={() => this.signIn()}

                            >
                                {(this.props.isLoading) ? (
                                    <Container style={{
                                        padding: 10,
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center'
                                    }}>
                                        <ActivityIndicator
                                            animated={true}
                                            color={color.navTitle}
                                            style={{
                                                flex: 1,
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                height: 40,
                                            }}
                                            size='small'
                                        />
                                    </Container>
                                ) : (
                                    <Icon name="sign-in" color={color.navTitle} size={size.icon}/>
                                )
                                }
                            </TouchableOpacity>
                        </Item>
                        <Text style={styles.textAccept}
                              onPress={() => this.props.navigation.navigate('RegisterComponent')}>ĐĂNG KÍ TÀI
                            KHOẢN </Text>
                    </Container>
                </Container>
                <Text style={styles.textBottom} onPress={() => this.props.navigation.navigate('EmailIdentityComponent')}>QUÊN
                    MẬT KHẨU ?</Text>
            </KeyboardAvoidingView>

        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.login.login,
        isLoading: state.login.isLoading,
        status: state.login.status,
        error: state.login.error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent)