import React, {Component} from 'react'
import {View} from 'react-native'
import {KeyboardAvoidingView, TouchableOpacity, Alert, Text, StatusBar, Platform} from 'react-native';
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Item, Input, Header, Button, Left} from 'native-base';
import BackButtonLight from '../../commons/BackButtonLight';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
export default class ResetPasswordContainer extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            confirm_password: ''
        }
    }

    sendNewPassword() {
        if (this.state.password === '') {
            Alert.alert('Có lỗi xảy ra', 'Bạn chưa nhập mật khẩu mới.');
        }
        else if (this.state.confirm_password === '') {
            Alert.alert('Có lỗi xảy ra', 'Bạn chưa nhập mật khẩu xác nhận.');
        }
        else if (this.state.password !== this.state.confirm_password) {
            Alert.alert('Có lỗi xảy ra', 'Mật khẩu xác nhận chưa đúng.');
        }
        else {
            this.props.navigation.navigate('Login')
        }
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'position' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? undefined : '200'}
                style={styles.wrapperContainer}>
                <StatusBar
                    barStyle="light-content"
                />
                <View style={styles.wrapperColorME}>
                    <Text style={styles.textColor}>Color</Text>
                    <Text style={styles.textME}>ME</Text>
                </View>
                <Container style={styles.midContainerLogin}>
                    <Container style={styles.contentForm}>
                        <Text style={styles.textTitleInput}>PASSWORD MỚI</Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       underlineColorAndroid={color.none}

                                       returnKeyType={'next'}
                                       secureTextEntry={true}
                                       onChangeText={(password) => {
                                           this.setState({password});
                                       }}
                                />
                            </Item>
                        </View>
                        <Text style={styles.textTitleInput}>NHẬP LẠI PASSWORD</Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       underlineColorAndroid={color.none}

                                       secureTextEntry={true}
                                       returnKeyType={'go'}
                                       onChangeText={(confirm_password) => {
                                           this.setState({confirm_password})
                                       }}
                                />
                            </Item>
                        </View>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemButtonLogin}>
                                <TouchableOpacity
                                    block
                                    rounded
                                    style={styles.buttonRegister}
                                    onPress={() => this.sendNewPassword()}
                                >
                                    <Text style={styles.textButton}>Xác nhận</Text>
                                </TouchableOpacity>
                            </Item>
                        </View>
                        <View style={styles.wrapperRegister}>
                            <Text style={styles.textAccept}
                                  onPress={() => this.props.navigation.navigate('ResetPasswordContainer')}
                            >ĐĂNG KÍ TÀI KHOẢN </Text>
                        </View>
                    </Container>
                </Container>
                <Text style={styles.textBottom}/>
                <View style={part.iconInDrawer}>
                    <Left>
                        <BackButtonLight goBack={goBack}/>
                    </Left>
                </View>
            </KeyboardAvoidingView>
        )
    }
}