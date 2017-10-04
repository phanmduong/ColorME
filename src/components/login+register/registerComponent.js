import React, {Component} from 'react'
import {ActivityIndicator, Alert, TouchableOpacity, View,KeyboardAvoidingView,Text} from 'react-native';
import styles from '../../styles/loginRegisterStyle'
import {Container, Form, Input, Item,} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';

export default class RegisterComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            userName: '',
            email: '',
            password: '',
        }
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.status == 200) {
            Alert.alert('Register Success');
        }
        if (nextProps.error == true) {
            Alert.alert('Đăng kí thất bại ')
        }
    }

    render() {
        return (
            <KeyboardAvoidingView behavior="padding"style = {styles.wrapperContainer} >
                <Container style={styles.midContainerLogin}>
                    <Container style={styles.textInputGroup}>
                        <Item style={styles.inputGroup}>
                            <Icon name='envelope-o' size={size.icon} style={styles.icon}/>
                            <Input placeholder='Email'
                                   style={part.inputTheme02}
                                   placeholderTextColor={color.gray}

                                   onChangeText={(email) => {
                                       this.setState({email})
                                   }}
                            />
                        </Item>
                        {(this.state.email == '') ? (
                            <Text style={{color : 'red'}}>* Bạn cần nhập email </Text>
                        ):(
                            <Text/>
                        )}
                        <Item style={styles.inputGroup}>
                            <Icon name='user' size={size.icon} style={styles.icon}/>
                            <Input placeholder='Name'
                                   style={part.inputTheme02}
                                   placeholderTextColor={color.gray}

                                   onChangeText={(name) => {
                                       this.setState({name})
                                   }}
                            />
                        </Item>
                        {(this.state.name == '') ? (
                            <Text style={{color : 'red'}}>* Bạn cần nhập tên của bạn</Text>
                        ):(
                            <Text/>
                        )}
                        <Item style={styles.inputGroup}>
                            <Icon name='address-book' size={size.icon} style={styles.icon}/>
                            <Input placeholder='Username'
                                   style={part.inputTheme02}
                                   placeholderTextColor={color.gray}

                                   onChangeText={(userName) => {
                                       this.setState({userName})
                                   }}
                            />
                        </Item>
                        <Text/>
                        <Item style={styles.inputGroup}>
                            <Icon name='unlock' size={size.icon} style={styles.icon}/>
                            <Input placeholder='Password'
                                   style={part.inputTheme02}
                                   secureTextEntry={true}
                                   placeholderTextColor={color.gray}

                                   onChangeText={(password) => {
                                       this.setState({password})
                                   }}
                            />
                        </Item>
                        {(this.state.password == '') ? (
                            <Text style={{color : 'red'}}>* Bạn cần nhập password </Text>
                        ):(
                            <Text/>
                        )}
                        <TouchableOpacity
                            style={styles.buttonRegister}
                            onPress={() => this.props.register(this.state)}
                        >
                            {(this.props.isLoading) ? (
                                <View style={{
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
                                </View>
                            ) : (
                                <Icon name="user-plus" color={color.navTitle} size={size.icon}/>
                            )
                            }
                        </TouchableOpacity>
                    </Container>
                </Container>
            </KeyboardAvoidingView>


        )
    }
}
