import React, {Component} from 'react'
import {KeyboardAvoidingView, Text, TouchableOpacity, StatusBar, View} from 'react-native'
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Input, Item, Left, Header, Button} from 'native-base';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import part from '../../styles/partStyle';
import Icon from '../../commons/Icon';

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
                        <Text style={styles.text}>Vui lòng nhập lại mà bạn đã đăng kí với ColorMe. Chúng tôi gửi mã xác
                            nhận email của
                            bạn</Text>
                        <Text style={[styles.textTitleInput, {marginTop: 0}]}>EMAIL</Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       color={color.darkGray}
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
                                    onPress={() => this.props.navigation.navigate('CodeIdentityComponent')}
                                >
                                    <Text style={styles.textButton}>Gửi mã xác nhận </Text>
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