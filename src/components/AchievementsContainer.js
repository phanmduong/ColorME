import React, {Component} from 'react';
import {
    View, Text, WebView
} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import part from '../styles/partStyle';

export default class AchievementsComponent extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>

            </View>



        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.getFullInfoAboutOnePost.post,
        user: state.login.user,
    }
}
