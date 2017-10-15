import React, {Component} from 'react'
import {ActivityIndicator, Alert, KeyboardAvoidingView, Text, TouchableOpacity, View} from 'react-native'
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Input, Item, StatusBar, Left} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
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
            email :'',
            name : '',
            username : '',
            password : ''
        }
    }

    //
    register(value) {
        this.props.registerAction.registerUser(value)
    }
    componentWillReceiveProps(nextProps) {
        // if (nextProps.status === 200) {
        //     this.props.navigation.navigate('LoginComponent');
        // }
        // if (nextProps.error) {
        //     Alert.alert('Mời bạn kiểm tra lại thông tin tài khoản ')
        // }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="position" style={styles.wrapperContainer}>
                <StatusBar
                    barStyle="light-content"
                />
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
                <View style={styles.wrapperColorME}>
                    <Text style={styles.textColor}>Color</Text>
                    <Text style={styles.textME}>ME</Text>
                </View>
                <Container style={styles.midContainerLogin}>
                    <Container style={styles.contentFormRegister}>
                        <Text style={styles.textTitleInput}>EMAIL</Text>
                        <Item>
                            <Input style={part.inputTheme02}
                                   color={color.gray}
                                   autoCorrect={false}
                                   onChangeText={(email) => {
                                       this.setState({ email});
                                   }}
                            />
                        </Item>
                        <Text style={styles.textTitleInput}>NAME</Text>
                        <Item>
                            <Input style={part.inputTheme02}
                                   color={color.gray}
                                   onChangeText={(name) => {
                                       this.setState({name})
                                   }}
                            />
                        </Item>
                        <Text style={styles.textTitleInput}>USERNAME</Text>
                        <Item>
                            <Input style={part.inputTheme02}
                                   color={color.gray}
                                   onChangeText={(username) => {
                                       this.setState({username})
                                   }}
                            />
                        </Item>
                        <Text style={styles.textTitleInput}>PASSWORD</Text>
                        <Item>
                            <Input style={part.inputTheme02}
                                   color={color.gray}
                                   secureTextEntry={true}
                                   onChangeText={(password) => {
                                       this.setState({password})
                                   }}
                            />
                        </Item>
                        <Item style={{marginLeft: 37,}}>
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
                                    <Icon name="user-plus" color={color.navTitle} size={size.icon}/>
                                )
                                }
                            </TouchableOpacity>
                        </Item>
                    </Container>
                </Container>
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