import React, {Component} from 'react';
import {
    TouchableOpacity, StyleSheet, View, Text
} from 'react-native';
import styles from '../styles/partStyle';
import HamburgerButton from './HamburgerButton';

export default class Header extends Component{
    render(){
        return(
            <View style={[styles.wrapperHeader, styles.paddingLeftRight, {zIndex: 10000}]}>
                <Text style={styles.textHeaderScreen} numberOfLines = {1}>{this.props.title}</Text>
                <HamburgerButton navigate={this.props.navigate}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapperCenter:{
        alignItems: 'center',
        justifyContent: 'center',
    },
})