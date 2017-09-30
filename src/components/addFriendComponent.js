import React, {Component} from 'react';
import {
    View, Text
} from 'react-native';

export default class addFriendComponent extends Component{
    constructor(){
        super();
        this.state = {
            text: '',
        }
    }

    render(){
        return(
            <View>
                <Text>addFriendComponent</Text>
            </View>
        );
    }
}