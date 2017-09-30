import React, {Component} from 'react'
import {KeyboardAvoidingView, Text, TouchableOpacity, View,StatusBar,Image} from 'react-native';
import styles from '../styles/styles'
import {Sae} from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export default class LoginComponent extends Component{
    constructor(){
        super()
        this.state = {
            email : '',
            password : ''
        }
        this.background = require ('../../assert/dem.jpg')
    }
    render(){
        return (

            <Image source = {this.background} style={styles.wrapperContainer}>
            <KeyboardAvoidingView behavior="padding" >
                <StatusBar hidden ={false} barStyle="light-content" />

                <View style={styles.topContainerLogin}>
                    <Text style={styles.textRegister}>ColorME</Text>
                </View>
                {/* LoginForm*/}
                <View style={styles.midContainer}>
                    <View style={styles.textInputGroup}>
                        <Sae
                            style={styles.textInput}
                            label={'email'}
                            iconClass={FontAwesomeIcon}
                            iconName={'envelope-o'}
                            iconColor={'#f95a25'}
                            iconSize={20}
                            onChangeText={(email) => {
                                this.setState({email})
                            }}
                        />
                        <Sae
                            style={styles.textInput}
                            label={'password'}
                            iconClass={FontAwesomeIcon}
                            iconName={'unlock'}
                            iconColor={'#f95a25'}
                            secureTextEntry = {true}
                            iconSize={20}
                            onChangeText={(password) => {
                                this.setState({password})
                            }}
                        />
                        <TouchableOpacity style={styles.buttonRegister}>
                            <Text>Login</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.bottomContent}>
                    <Text style={styles.textSignUp}>Don't have an account?&nbsp;
                        <Text style={styles.textSignUpTitle}
                              onPress={() => this.props.navigation.navigate('RegisterScreen')}
                        >Sign in.</Text>
                    </Text>
                </View>
            </KeyboardAvoidingView>
            </Image>
        )
    }
}

