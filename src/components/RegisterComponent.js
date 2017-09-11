import React, {Component} from 'react';
import {
    View, Image, Text, TouchableOpacity
} from 'react-native';
import styles from '../styles/loginregisterstyle';

export default class RegisterComponent extends Component{
    constructor(props){
        super(props);
        background = require('../img/bg.png');

    }


    render(){
        return(
            <Image source={background} style={styles.wrapperContainer}>


            </Image>
        );
    }
}