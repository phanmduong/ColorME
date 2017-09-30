import React, {Component} from 'react';
import {
    View, Text
} from 'react-native';

export default class searchComponent extends Component{
    constructor(){
        super();
        this.state = {
            text: '',
        }
    }

    render(){
        return(
            <View>
                <Text>searchComponent</Text>
            </View>
        );
    }
}