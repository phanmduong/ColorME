import React, {Component} from 'react'
import {KeyboardAvoidingView, Text, TouchableOpacity, StatusBar, View} from 'react-native'
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Input, Item} from 'native-base';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';

export default class CodeIdentityComponent extends Component {
    constructor() {
        super();
        this.state = {
            code: ''
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
                        <Text style={styles.text}>Vui lòng nhập mã xác nhận bạn đã nhận được từ email. Chúng tôi sẽ cho
                            phép bạn thiết lập lại mật khẩu
                        </Text>
                        <Text style={[styles.textTitleInput, {marginTop: 0}]}>MÃ XÁC NHẬN </Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       color={color.darkGray}
                                       autoCorrect={false}
                                       onChangeText={(code) => {
                                           this.setState({code});
                                       }}
                                />
                            </Item>
                        </View>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemButtonLogin}>
                                <TouchableOpacity
                                    disabled={this.props.isLoading}
                                    block
                                    rounded
                                    style={styles.buttonRegister}
                                    onPress={() => this.props.navigation.navigate('ResetPasswordComponent')}
                                >
                                    <Text style={styles.textButton}>Tao mật khẩu mới </Text>

                                </TouchableOpacity>
                            </Item>
                        </View>
                        <View style={styles.wrapperRegister}>
                            <Text style={styles.textAccept}
                                  onPress={() => this.props.navigation.navigate('RegisterComponent')}>ĐĂNG KÍ TÀI
                                KHOẢN </Text>
                        </View>
                    </Container>
                </Container>
                <Text style={styles.textBottom}/>
            </KeyboardAvoidingView>

        )
    }
}