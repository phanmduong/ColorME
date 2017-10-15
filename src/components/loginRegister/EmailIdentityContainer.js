import React, {Component} from 'react'
import {KeyboardAvoidingView, Text, TouchableOpacity, StatusBar,View} from 'react-native'
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Input, Item} from 'native-base';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';

export default class EmailIdentityComponent extends Component {
    constructor() {
        super();
        this.state = {
            email: ''
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="position" style={styles.wrapperContainer}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="rgb(247, 248, 249)"
                />
                <View style={styles.wrapperColorME}>
                    <Text style={styles.textColor}>Color</Text>
                    <Text style={styles.textME}>ME</Text>
                </View>
                <Container style={styles.midContainerLogin}>
                    <Container style={styles.contentForm}>
                        <Text style = {styles.text} >Vui lòng nhập lại mà bạn đã đăng kí với ColorMe. Chúng tôi gửi mã xác nhận email của
                            bạn</Text>
                        <Text style={styles.textTitleInput}>EMAIL</Text>
                        <Item style = {styles.itemInput}>
                            <Input style={part.inputTheme02}
                                   color={color.gray}
                                   autoCorrect={false}
                                   onChangeText={(email) => {
                                       this.setState({email});
                                   }}
                            />
                        </Item>
                        <Item style={styles.itemButtonLogin}>
                            <TouchableOpacity
                                block
                                rounded
                            style={styles.buttonRegister}
                                onPress = {() => this.props.navigation.navigate('CodeIdentityComponent')}
                            >
                                <Text style={styles.textButton} >Gửi mã xác nhận </Text>

                            </TouchableOpacity>
                        </Item>
                        <Text style={styles.textAccept}
                              onPress={() => this.props.navigation.navigate('RegisterComponent')}>ĐĂNG KÍ TÀI
                            KHOẢN </Text>
                    </Container>
                </Container>
                <Text style={styles.textBottom}/>
            </KeyboardAvoidingView>

        )
    }
}