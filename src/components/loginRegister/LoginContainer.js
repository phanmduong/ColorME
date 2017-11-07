import React, {Component} from 'react'
import {
    ActivityIndicator, KeyboardAvoidingView,
    Text, TouchableOpacity, View, Alert,
    StatusBar,
} from 'react-native'
import styles from '../../styles/loginRegisterStyle'
import {Container, Content, Form, Input, Item, Left, CheckBox, Header} from 'native-base';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import * as loginAction from '../../actions/loginActions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import {NavigationActions} from'react-navigation'
class LoginContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkRules: true,
        }
    }

    componentWillMount(){
        this.props.loginAction.getDataLogin(this.props.status);
    }

    saveData() {
        this.props.loginAction.setDataLogin(this.props.login)
    }

    signIn() {
        if(!this.state.checkRules){
            Alert.alert('Có lỗi xảy ra', 'Bạn chưa đồng ý với điều khoản sử dụng.');
        } else {
            this.props.loginAction.loginUser(this.props.login);
            this.saveData();
        }

    }

    updateData(name, value) {
        let login = this.props.login;
        login[name] = value;
        this.props.loginAction.updateDataLogin(login);
    }
    componentWillReceiveProps(nextProps){
    if(nextProps.status == 200) {
        const resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({ routeName: 'Main'})
            ]
        })
        this.props.navigation.dispatch(resetAction)


    }
    }
    render() {
        const {navigate} = this.props.navigation;
        return (
            <KeyboardAvoidingView behavior="position" style={styles.wrapperContainer}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor={color.main}
                />
                <View style={styles.wrapperColorME}>
                    <Text style={styles.textColor}>color</Text>
                    <Text style={styles.textME}>ME</Text>
                </View>
                <Container style={styles.midContainerLogin}>
                    <Container style={styles.contentForm}>
                        <Text style={styles.textTitleInput}>EMAIL</Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       underlineColorAndroid={color.none}
                                       keyboardType={'email-address'}
                                       returnKeyType={'next'}
                                       autoCorrect={false}
                                       onChangeText={(email) => {
                                           this.updateData('email', email);
                                       }}
                                       value={this.props.login.email}
                                />
                            </Item>
                        </View>
                        <Text style={styles.textTitleInput}>PASSWORD</Text>
                        <View style={styles.wrapperRegister}>
                            <Item style={styles.itemInput}>
                                <Input style={part.inputTheme02}
                                       underlineColorAndroid={color.none}
                                       secureTextEntry={true}
                                       returnKeyType={'go'}
                                       onSubmitEditing={()=>this.signIn()}
                                       onChangeText={(password) => {
                                           this.updateData('password', password)
                                       }}
                                       value={this.props.login.password}
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
                                    style={styles.buttonRegister}
                                    onPress={() => this.signIn()}
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
                                        <Text style={styles.textButton}>Đăng nhập</Text>
                                    )
                                    }
                                </TouchableOpacity>
                            </Item>
                        </View>
                        <View style={styles.wrapperRegister}>
                            <Text style={styles.textAccept}
                                  onPress={() => this.props.navigation.navigate('RegisterContainer')}>
                                ĐĂNG KÍ TÀI KHOẢN
                            </Text>
                        </View>
                    </Container>
                </Container>
                <View style={styles.wrapperForgot}>
                    <Text style={styles.textBottom}
                          onPress={() => this.props.navigation.navigate('EmailIdentityContainer')}>
                        QUÊN MẬT KHẨU ?
                    </Text>
                </View>
            </KeyboardAvoidingView>

        )
    }
}

function mapStateToProps(state) {
    return {
        login: state.login.login,
        isLoading: state.login.isLoading,
        status: state.login.status,
        error: state.login.error,
        isGetLocalData: state.login.isGetLocalData,
        isAutoLogin: state.login.isAutoLogin,
        save: state.login.save
    }
}

function mapDispatchToProps(dispatch) {
    return {
        loginAction: bindActionCreators(loginAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)