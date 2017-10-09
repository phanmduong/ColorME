import React, {Component} from 'react';
import {
    FlatList
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail,
    Text, Button, Icon, Left, Body, Right, ListItem, List
} from 'native-base';
import * as getNotificationAction from '../actions/getNotificationAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import part from '../styles/partStyle';
import * as color from '../styles/color';

class notificationComponent extends Component {
    constructor() {
        super();

    }

    componentWillMount() {
        this.props.getNotificationAction.getNotification(1, this.props.token);
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                {/*<Content>*/}
                    {/*{*/}
                        {/*(this.props.notification.length === 0)*/}
                            {/*?*/}
                            {/*(*/}
                                {/*<Body>*/}
                                    {/*<Text style={[part.padding, part.describeDark]}>{} chưa có thông báo nào.</Text>*/}
                                {/*</Body>*/}
                            {/*)*/}
                            {/*:*/}
                            {/*(*/}
                                {/*< FlatList*/}
                                    {/*onEndReachedThreshold={5}*/}
                                    {/*onEndReached={() => {*/}
                                    {/*}}*/}
                                    {/*data={this.props.notification}*/}
                                    {/*renderItem={({item}) =>*/}
                                        {/*<List>*/}
                                            {/*<ListItem style={part.listItem}>*/}
                                                {/*<Thumbnail square size={80}*/}
                                                           {/*source={{uri: item.actor.avatar_url}}/>*/}
                                                {/*<Body>*/}
                                                {/*<Text style={part.titleSmallDarkBold}>{item.actor.name} &nbsp;*/}
                                                    {/*<Text style={part.describeDark}>{item.type}</Text>*/}
                                                {/*</Text>*/}

                                                {/*<Text note>{item.created_at}</Text>*/}

                                                {/*</Body>*/}
                                            {/*</ListItem>*/}
                                        {/*</List>*/}

                                    {/*}/>*/}
                            {/*)*/}
                    {/*}*/}
                {/*</Content>*/}
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNotificationAction: bindActionCreators(getNotificationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(notificationComponent);