import React, {Component} from 'react'
import {KeyboardAvoidingView, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Item, Input,} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import * as size from '../../styles/size';

export default class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }

    componentWillMount() {
        this.props.getData()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status == 200) {
            this.props.navigation.navigate('Home');
        }
        if (nextProps.error == true) {
            Alert.alert('Mời bạn kiểm tra thông tin tài khoản')
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.wrapperContainer}>
                <Container style={styles.midContainerLogin}>
                    <Container style={styles.textInputGroup}>
                        <Item style={styles.inputGroup}>
                            <Icon name='envelope-o' size={size.icon} style={styles.icon}/>
                            <Input style={part.inputTheme02}
                                   placeholder="Email"
                                   placeholderTextColor={color.gray}
                                   color={color.navTitle}
                                   onChangeText={(email) => {
                                       this.props.updateData('email', email)
                                   }}
                                   value={this.props.login.email}
                            />

                        </Item>
                        <Item style={styles.inputGroup}>
                            <Icon name='key' size={size.icon} style={styles.icon}/>
                            <Input style={part.inputTheme02}
                                   placeholder='Password'
                                   placeholderTextColor={color.gray}
                                   color={color.navTitle}
                                   secureTextEntry={true}
                                   onChangeText={(password) => {
                                       this.props.updateData('password', password)
                                   }} value={this.props.login.password}
                            />
                        </Item>

                        <TouchableOpacity
                            disabled={this.props.isLoading}
                            block
                            rounded
                            style={styles.buttonRegister}
                            onPress={() => this.props.signIn()}

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
                    </Container>
                </Container>
            </KeyboardAvoidingView>

        )
    }
}
