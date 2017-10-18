import React, {Component} from 'react';
import {
    Image
} from 'react-native';
import {
    Title,Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right
} from 'native-base';
import part from '../styles/partStyle';
import * as color from '../styles/color';

export default class newFeedComponent extends Component{
    constructor(){
        super();

    }

    render(){
        return(
            <Container style={part.wrapperContainer}>
                <Header
                    style={part.navTop}
                    iosBarStyle={'light-content'}
                    backgroundColor={color.main}>
                    <Left/>
                    <Body>
                        <Title style={part.navTitle}>Friend</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content>

                </Content>
            </Container>
        );
    }
}