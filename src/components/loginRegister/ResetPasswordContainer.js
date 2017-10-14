import React, {Component} from 'react'
import {View} from 'react-native'
import {KeyboardAvoidingView, TouchableOpacity, StatusBar,ActivityIndicator, Alert, Text} from 'react-native';
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import * as size from '../../styles/size';
 export default class ResetPasswordComponent extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            confirm_password : ''
        }
    }
    render() {
        return (
            <KeyboardAvoidingView behavior="position" style={styles.wrapperContainer}>
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
                        <Item>
                            <Input style={part.inputTheme02}
                                   color={color.gray}
                                   secureTextEntry={true}
                                   onChangeText={(password) => {
                                       this.setState( {password});
                                   }}
                            />
                        </Item>
                        <Text style={styles.textTitleInput}>NHẬP LẠI PASSWORD</Text>
                        <Item>
                            <Input style={part.inputTheme02}
                                   color={color.gray}
                                   secureTextEntry={true}
                                   onChangeText={(confirm_password) => {
                                       this.setState( {confirm_password})
                                   }}
                            />
                        </Item>
                        <Item style ={{marginLeft: 37}}>
                            <TouchableOpacity
                                block
                                rounded
                                style={styles.buttonRegister}
                                onPress={() => this.props.navigation.navigate('LoginComponent')}
                            >
                                    <Text style = {styles.textButton}>Xác nhận và đăng nhập </Text>

                            </TouchableOpacity>
                        </Item>
                        <Text style={styles.textAccept}>ĐĂNG KÍ TÀI KHOẢN </Text>
                    </Container>
                </Container>
                <Text style={styles.textBottom}/>
            </KeyboardAvoidingView>
        )
    }
}