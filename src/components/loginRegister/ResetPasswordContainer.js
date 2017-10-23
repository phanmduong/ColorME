import React, {Component} from 'react'
import {View} from 'react-native'
import {KeyboardAvoidingView, TouchableOpacity, StatusBar, ActivityIndicator, Alert, Text} from 'react-native';
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Item, Input, Header, Button, Left} from 'native-base';
import Icon from '../../commons/Icon';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import * as size from '../../styles/size';

export default class ResetPasswordContainer extends Component {
    constructor() {
        super();
        this.state = {
            password: '',
            confirm_password: ''
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
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       color={color.darkGray}
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
                                       color={color.darkGray}
                                       secureTextEntry={true}
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
                                    onPress={() => this.props.navigation.navigate('LoginComponent')}
                                >
                                    <Text style={styles.textButton}>Xác nhận</Text>
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
                <View style={part.iconInDrawer}>
                    <Left>
                        <TouchableOpacity style={part.padding}
                                          onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="entypo|chevron-thin-left"
                                  size={size.iconBig}
                                  color={color.navTitle}
                                  style={part.shadow}
                            />
                        </TouchableOpacity>

                    </Left>
                </View>
            </KeyboardAvoidingView>
        )
    }
}