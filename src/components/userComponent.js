import React, {Component} from 'react';
import {
    View, Text
} from 'react-native';

export default class userComponent extends Component{
    constructor(){
        super();
        this.state = {
            text: '',
        }
    }

    render(){
        return(
            <View>
                <Text>userComponent</Text>
            </View>
        );
    }
}