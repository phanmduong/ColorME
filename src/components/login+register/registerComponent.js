import React, {Component} from 'react'
import {ActivityIndicator, Alert, TouchableOpacity, View,KeyboardAvoidingView} from 'react-native';
import styles from '../../styles/styles'
import {Container, Form, Input, Item,} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
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
                <Container style={styles.midContainer}>
                    <Container style={styles.textInputGroup}>
                        <Item style={styles.textInput}>
                            <Icon name='envelope-o' size={20} style={styles.icon}/>
                            <Input placeholder='email'
                                   style={{color: 'white'}}
                                   onChangeText={(email) => {
                                       this.setState({email})
                                   }}
                            />
                        </Item>
                        <Item style={styles.textInput}>
                            <Icon name='user' size={20} style={styles.icon}/>
                            <Input placeholder='name'
                                   style={{color: 'white'}}
                                   onChangeText={(name) => {
                                       this.setState({name})
                                   }}

                            />
                        </Item>
                        <Item style={styles.textInput}>
                            <Icon name='user' size={20} style={styles.icon}/>
                            <Input placeholder='username'
                                   style={{color: 'white'}}
                                   onChangeText={(userName) => {
                                       this.setState({userName})
                                   }}
                            />
                        </Item>
                        <Item style={styles.textInput}>
                            <Icon name='unlock' size={20} style={styles.icon}/>
                            <Input placeholder='password'
                                   style={{color: 'white'}}
                                   secureTextEntry={true}
                                   onChangeText={(password) => {
                                       this.setState({password})
                                   }}
                            />
                        </Item>
                        <TouchableOpacity style={styles.buttonRegister} onPress={() => this.props.register(this.state)}
                        >
                            {(this.props.isLoading) ? (
                                <View style={{
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
                                </View>
                            ) : (
                                <Icon name="user-plus" size={20}/>
                            )
                            }
                        </TouchableOpacity>
                    </Container>
                </Container>
            </KeyboardAvoidingView>


        )
    }
}
