import React, {Component} from 'react'
import {KeyboardAvoidingView, Text, TouchableOpacity, View, Image} from 'react-native';
import styles from '../styles/styles'
import {Sae} from 'react-native-textinput-effects'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'

export default class RegisterComponent extends Component {
    constructor() {
        super()
        this.state = {
            name: '',
            userName: '',
            email: '',
            password: '',

        }
       this.background = require('../../assert/sao.jpg')
    }

    render() {
        return (
            <Image source = {this.background} style={styles.wrapperContainer}>
            <KeyboardAvoidingView behavior= "padding" >
                <View style={styles.topContainerRegister}>
                    <Text style={styles.textRegister}>REGISTER</Text>
                </View>
                {/* RegisterForm*/}
                <View style={styles.midContainer}>
                    <View style={styles.textInputGroup}>
                        <Sae
                            style={styles.textInput}
                            label={'name'}
                            iconClass={FontAwesomeIcon}
                            iconName={'user'}
                            iconColor={'#f95a25'}
                            iconSize={20}
                            onChangeText={(name) => {
                                this.setState({name})
                            }}
                        />
                        <Sae
                            style={styles.textInput}
                            label={'userName'}
                            iconClass={FontAwesomeIcon}
                            iconName={'user'}
                            iconColor={'#f95a25'}
                            iconSize={20}
                            onChangeText={(userName) => {
                                this.setState({userName})
                            }}
                        />
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
                            <Text>Register</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.bottomContent}>
                    <Text style={styles.textSignUp}>Back to?&nbsp;
                        <Text style={styles.textSignUpTitle}
                              onPress={() => this.props.navigation.navigate('LoginScreen')}
                        >Sign up.</Text>
                    </Text>
                </View>
            </KeyboardAvoidingView>
            </Image>
        )
    }
}
