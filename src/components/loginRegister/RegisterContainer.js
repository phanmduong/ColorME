import React, {Component} from 'react'
import {ActivityIndicator, Alert, KeyboardAvoidingView, Text, StatusBar, TouchableOpacity, View} from 'react-native'
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Input, Item, Left, CheckBox, Body} from 'native-base';
import Icon from '../../commons/Icon';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import * as size from '../../styles/size';
import * as registerAction from '../../actions/registerAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class RegisterContainer extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            username: '',
            password: '',
            checkRules: true,
        }
    }

    // componentWillReceiveProps(nextProps) {
    // if(nextProps.status == 200) {
    //     this.props.navigation.navigate('Main')
    // }
    // }

    register(value) {
        if (this.state.email === '' || this.state.name === '' || this.state.username === '' || this.state.password === '') {
            Alert.alert('Có lỗi xảy ra', 'Bạn chưa nhập đủ thông tin.');
        }
        else if (!this.state.checkRules){
            Alert.alert('Có lỗi xảy ra', 'Bạn chưa đồng ý với điều khoản sử dụng.');
        }
        else {
            this.props.registerAction.registerUser(value);
        }
    }

    render() {
        const {navigate} = this.props.navigation;
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
                    <Container style={[styles.contentForm]}>
                        <Text style={[styles.textTitleInput, {marginTop: 15,}]}>EMAIL</Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       keyboardType={'email-address'}
                                       returnKeyType={'next'}
                                       color={color.darkGray}
                                       autoCorrect={false}
                                       onChangeText={(email) => {
                                           this.setState({email: email});
                                       }}
                                />
                            </Item>
                        </View>
                        <Text style={[styles.textTitleInput, {marginTop: 15}]}>NAME</Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       returnKeyType={'next'}
                                       autoCorrect={false}
                                       color={color.darkGray}
                                       onChangeText={(name) => {
                                           this.setState({name: name})
                                       }}
                                />
                            </Item>
                        </View>
                        <Text style={[styles.textTitleInput, {marginTop: 15}]}>USERNAME</Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       color={color.darkGray}
                                       returnKeyType={'next'}
                                       autoCorrect={false}
                                       onChangeText={(username) => {
                                           this.setState({username: username})
                                       }}
                                />
                            </Item>
                        </View>
                        <Text style={[styles.textTitleInput, {marginTop: 15}]}>PASSWORD</Text>
                        <View style={[styles.wrapperRegister, {marginBottom: 10}]}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       color={color.darkGray}
                                       returnKeyType={'send'}
                                       secureTextEntry={true}
                                       onChangeText={(password) => {
                                           this.setState({password: password})
                                       }}
                                />
                            </Item>
                        </View>
                        <View style={[styles.wrapperRegister, {marginBottom: 10}]}>
                            <Item style={[part.noBorder]}>
                                <CheckBox
                                    style={part.margin5}
                                    color={color.main}
                                    checked={this.state.checkRules}
                                    onPress={() => {
                                        let checkRules = this.state.checkRules
                                        this.setState({checkRules: !checkRules})
                                    }}

                                />
                                <Left>
                                    <TouchableOpacity
                                        onPress={() => navigate('RulesContainer')}
                                    >
                                        <Text style={[part.titleGrayRules, part.paddingLeft]}>Tôi đồng ý với điều khoản sử dụng</Text>
                                    </TouchableOpacity>
                                </Left>
                            </Item>
                        </View>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemButtonLogin}>
                                <TouchableOpacity
                                    disabled={this.props.isLoading}
                                    block
                                    rounded
                                    style={[styles.buttonRegister, part.marginTop]}
                                    onPress={() => this.register(this.state)}
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
                                        <Text style={styles.textButton}>Đăng kí tài khoản</Text>
                                    )
                                    }
                                </TouchableOpacity>
                            </Item>
                        </View>
                    </Container>
                </Container>
                <View style={part.iconInDrawer}>
                    <Left>
                        <TouchableOpacity
                            style={[part.padding, part.wrapperBackButton]}
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

function mapStateToProps(state) {
    return {
        isLoading: state.register.isLoading,
        status: state.register.status,
        error: state.register.error,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        registerAction: bindActionCreators(registerAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer)