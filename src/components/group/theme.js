import React, {Component} from 'react';
import {
    FlatList, Image, View
} from 'react-native';
import {
    Content, Card, CardItem, Text,
    Left, Body, Right, List, ListItem, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as userInformationAction from '../../actions/userInformationAction';
import * as color from '../../styles/color';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class theme extends Component {
    render() {
        return (
            <Content style={[part.wrapperContainer, part.padding]}>

            </Content>
        )
    }
}

function mapStateToProps(state) {
    return {
        progress: state.userInformation.progress,
        user: state.userInformation.user,
        isLoadingUserProgress: state.userInformation.isLoadingUserProgress,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInformationAction: bindActionCreators(userInformationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(theme);