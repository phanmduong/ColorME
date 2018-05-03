
import React, { Component } from 'react';
import {
    View, Text, StyleSheet
} from 'react-native';

export default class TextNullData extends Component {
    render() {
        return (
            <View style={[styles.wrapperCenter, { marginTop: 20 }]}>
                <Text style={styles.textDescriptionDark}>{this.props.text}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    wrapperCenter:{
        alignItems: 'center',
        justifyContent: 'center',
    },
    textDescriptionDark: {
        color: '#000',
        fontFamily: 'Helvetica',
        fontSize: 12,

    },
})

