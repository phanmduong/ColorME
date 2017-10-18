import React, {Component} from 'react';
import {
    View, Text
} from 'react-native';

export default class Comment extends Component{
    constructor(){
        super();
        this.state = {
            text: '',
        }
    }

    render(){
        return(
            <View style={{backgroundColor: 'rgba(124,124,124,0.2)'}}>
                <Text>asfasfasf</Text>
            </View>
        );
    }
}