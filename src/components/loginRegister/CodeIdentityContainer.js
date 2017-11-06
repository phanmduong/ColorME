import React, {Component} from 'react'
import {KeyboardAvoidingView, Text, TouchableOpacity, View, StatusBar} from 'react-native'
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Input, Item, Left, Header} from 'native-base';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import BackButton from '../../commons/BackButton';

import * as size from '../../styles/size';

export default class CodeIdentityContainer extends Component {
    constructor() {
        super();
        this.state = {
            code: ''
        }
    }
    render() {
        const {goBack} = this.props.navigation;
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
                                       returnKeyType={'next'}
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
                                    onPress={() => this.sendCode()}
                                >
                                    <Text style={styles.textButton}>Tao mật khẩu mới </Text>

                                </TouchableOpacity>
                            </Item>
                        </View>
                        <View style={styles.wrapperRegister}>
                            <Text style={styles.textAccept}
                                  onPress={() => this.props.navigation.navigate('RegisterContainer')}>ĐĂNG KÍ TÀI
                                KHOẢN </Text>
                        </View>
                    </Container>
                </Container>
                <Text style={styles.textBottom}/>
                <View style={part.iconInDrawer}>
                    <Left>
                        <BackButton goBack={goBack}/>
                    </Left>
                </View>

            </KeyboardAvoidingView>

        )
    }
}