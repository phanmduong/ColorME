import React, {Component} from 'react';
import {
    View, Image, Text, TouchableOpacity, KeyboardAvoidingView, StatusBar
} from 'react-native';
import styles from '../styles/loginregisterstyle';
import {Madoka} from 'react-native-textinput-effects';

export default class RegisterComponent extends Component {
    constructor() {
        super();
        background = require('../img/bg2.png');
    }

    render() {
        return (
            <Image source={background} style={styles.wrapperContainer}>
                <StatusBar barStyle="light-content"/>
                <KeyboardAvoidingView behavior="padding">
                    {/*LOGO*/}
                    <View style={styles.containerRegister}>
                        <Text style={styles.registerTitle}>Welcome To ColorME</Text>
                    </View>

                    {/*FORM*/}
                    <View style={styles.contentFormRegister}>
                        <View style={styles.contentInput}>
                            <Madoka
                                label={'Email'}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                keyboardType="email-address"
                                borderColor={'rgba(239, 239, 239, 0.8)'}
                                labelStyle={{color: 'rgba(239, 239, 239, 0.8)', fontWeight: '300'}}
                                inputStyle={{color: '#FFFFFF', fontWeight: '500'}}
                            />
                            <Madoka
                                label={'Username'}
                                autoCapitalize="none"
                                autoCorrect={false}
                                returnKeyType="next"
                                borderColor={'rgba(239, 239, 239, 0.8)'}
                                labelStyle={{color: 'rgba(239, 239, 239, 0.8)', fontWeight: '300'}}
                                inputStyle={{color: '#FFFFFF', fontWeight: '500'}}
                            />
                            <Madoka
                                label={'Password'}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                                returnKeyType="next"
                                borderColor={'rgba(239, 239, 239, 0.8)'}
                                labelStyle={{color: 'rgba(239, 239, 239, 0.8)', fontWeight: '300'}}
                                inputStyle={{color: '#FFFFFF', fontWeight: '500'}}
                            />
                            <Madoka
                                label={'Confirm Password'}
                                autoCapitalize="none"
                                autoCorrect={false}
                                secureTextEntry={true}
                                returnKeyType="send"
                                borderColor={'rgba(239, 239, 239, 0.8)'}
                                labelStyle={{color: 'rgba(239, 239, 239, 0.8)', fontWeight: '300'}}
                                inputStyle={{color: '#FFFFFF', fontWeight: '500'}}
                            />
                            <TouchableOpacity style={styles.buttonLogin}>
                                <Text style={styles.textButtonLogin}>JOIN</Text>
                            </TouchableOpacity>


                        </View>
                    </View>
                </KeyboardAvoidingView>
            </Image>
        );
    }
}