import React, {Component} from 'react'
import {KeyboardAvoidingView, Text, TouchableOpacity, View, Alert, StatusBar, Platform} from 'react-native'
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Input, Item, Left, Header, Button} from 'native-base';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import BackButtonLight from '../../commons/BackButtonLight';
export default class EmailIdentityContainer extends Component {
    constructor() {
        super();
        this.state = {
            email: ''
        }
    }

    sendEmail() {
        if (this.state.email === '') {
            Alert.alert('Có lỗi xảy ra', 'Bạn chưa nhập địa chỉ email.');
        } else {
            this.props.navigation.navigate('CodeIdentityContainer')
        }
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'position' : undefined}
                keyboardVerticalOffset={Platform.OS === 'ios' ? undefined : 200}
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
                        <Text style={styles.text}>Vui lòng nhập lại email mà bạn đã đăng kí với ColorMe. Chúng tôi gửi
                            mã xác
                            nhận vào email của
                            bạn</Text>
                        <Text style={[styles.textTitleInput, {marginTop: 0}]}>EMAIL</Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       underlineColorAndroid={color.none}
                                       keyboardType={'email-address'}
                                       returnKeyType={'send'}
                                       autoCorrect={false}
                                       onChangeText={(email) => {
                                           this.setState({email});
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
                                    onPress={() => this.sendEmail()}
                                >
                                    <Text style={styles.textButton}>Gửi mã xác nhận </Text>
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
                        <BackButtonLight goBack={goBack}/>
                    </Left>
                </View>

            </KeyboardAvoidingView>

        )
    }
}