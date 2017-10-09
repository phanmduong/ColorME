import React, {Component} from 'react';
import {
    View, Text, WebView
} from 'react-native';

export default class AchievementsComponent extends Component{
    constructor(){
        super();
        this.state = {
            text: '',
        }
    }

    render(){
        return(
            <WebView
                source={{uri: 'https://github.com/facebook/react-native'}}
                style={{marginTop: 20}}
            />
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.getFullInfoAboutOnePost.post,
        user: state.login.user,
    }
}
