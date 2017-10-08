import React, {Component} from 'react';
import {
    Image, Dimensions
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, Tabs, Tab, TabHeading, List, ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as getUserProfileAction from '../../actions/getUserProfileAction';
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
        productsUser: state.getUserProfile.productsUser,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(myAccountComponent);