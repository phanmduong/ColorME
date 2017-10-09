import React, {Component} from 'react';
import {
    Image, Dimensions
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, Tabs, Tab, TabHeading, List, ListItem,
} from 'native-base';
import * as userInformationAction from '../../actions/userInformationAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {User} from '../../navigators/appRouter';

class myAccountComponent extends Component {
    // componentWillMount() {
    //     this.props.getUserProfileAction.getUserProfile(this.props.user.username);
    //
    // }

    render() {
        return (
            <Container>
                <User/>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user,
        productsUser: state.userInformation.productsUser,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInformationAction: bindActionCreators(userInformationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(myAccountComponent);