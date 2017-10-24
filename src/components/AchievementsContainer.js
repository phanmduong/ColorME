import React, {Component} from 'react';
import {
    View, Text, StatusBar
} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import part from '../styles/partStyle';

export default class AchievementsComponent extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
            arr:[1,2,3,4,5]
        }
    }

    render() {
        return (
            <View style={{marginTop: 22}}>
                <StatusBar
                    barStyle="default"
                />
                <View>
                    <Text>Tính năng không khả dụng</Text>
                </View>
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
