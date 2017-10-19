import React, {Component} from 'react'
import {ActivityIndicator, Alert, KeyboardAvoidingView, Text, StatusBar, TouchableOpacity, View} from 'react-native'
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Input, Item, Left} from 'native-base';
import Icon from '../../commons/Icon';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import * as size from '../../styles/size';
import * as registerAction from '../../actions/registerAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'

class RegisterComponent extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            username: '',
            password: ''
        }
    }

    register(value) {
        this.props.registerAction.registerUser(value);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.status === 200) {
            this.props.navigation.navigate('LoginComponent');
        }
        if (nextProps.error) {
            Alert.alert('Mời bạn kiểm tra lại các trường thông tin')
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
                    <Container style={[styles.contentForm, {height: 370}]}>
                        <Text style={styles.textTitleInput}>EMAIL</Text>
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
                        <Text style={styles.textTitleInput}>NAME</Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       color={color.darkGray}
                                       onChangeText={(name) => {
                                           this.setState({name})
                                       }}
                                />
                            </Item>
                        </View>
                        <Text style={styles.textTitleInput}>USERNAME</Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       color={color.darkGray}
                                       onChangeText={(username) => {
                                           this.setState({username})
                                       }}
                                />
                            </Item>
                        </View>
                        <Text style={styles.textTitleInput}>PASSWORD</Text>
                        <View style={[styles.wrapperRegister, {marginBottom: 5}]}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       color={color.darkGray}
                                       secureTextEntry={true}
                                       onChangeText={(password) => {
                                           this.setState({password})
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

export default connect(mapStateToProps, mapDispatchToProps)(RegisterComponent)