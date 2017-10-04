import React, {Component} from 'react'
import {KeyboardAvoidingView, TouchableOpacity,ActivityIndicator,Alert} from 'react-native';
import styles from '../../styles/styles'
import { Container, Content, Form, Item, Input,  } from 'native-base';
import Icon  from 'react-native-vector-icons/FontAwesome'
export default class LoginComponent extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password : ''
        }
    }
componentWillMount() {
        this.props.getData()
}
componentWillReceiveProps(nextProps) {
    if (nextProps.status == 200) {
        this.props.navigation.navigate('Home');
    }
    if (nextProps.error == true){
        Alert.alert('Mời bạn kiểm tra thông tin tài khoản')
    }
}
    render(){
        return (
            <KeyboardAvoidingView behavior="padding" style = {styles.wrapperContainer} >
                <Container style={styles.midContainerLogin}>
                    <Form style={styles.textInputGroup}>
                        <Item style = {styles.textInput}>
                            <Icon  name='envelope-o' size = {20} style = {styles.icon} />
                            <Input placeholder='email'
                                   style={{color : 'white'}}
                            onChangeText={(email) => {
                                this.props.updateData('email', email)
                            }}
                            value={this.props.login.email}
                                   />
                        </Item>

                            <Item>
                                <Icon name='unlock' size = {20} style = {styles.icon}  />
                                <Input placeholder='password'
                                       style={{color : 'white'}}
                                secureTextEntry = {true}
                                onChangeText={(password) => {
                                this.props.updateData('password', password)
                            }} value={this.props.login.password}
                                       />
                            </Item>
                        <TouchableOpacity
                            disabled={this.props.isLoading}
                            block
                            rounded
                            style={styles.buttonRegister}
                            onPress={() => this.props.signIn()}

                        >
                            {(this.props.isLoading) ? (
                                <Container style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <ActivityIndicator
                                        animated={true}
                                        color='black'
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
                                <Icon name = "sign-in" size = {20} />
                            )
                            }
                        </TouchableOpacity>
                    </Form>
                </Container>
            </KeyboardAvoidingView>

        )
    }
}
