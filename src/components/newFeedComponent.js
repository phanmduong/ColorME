import React, {Component} from 'react';
import {
    View, Text
} from 'react-native';

export default class newFeedComponent extends Component{
    constructor(){
        super();
        this.state = {
            text: '',
        }
    }

    render(){
        return(
            <View>
                <Text>newFeedComponent</Text>
            </View>
        );
    }
}