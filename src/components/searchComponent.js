import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import {
    Title,Container, Header, Content, Card, CardItem, Thumbnail, Form, Label,
    Text, Button, Icon, Left, Body, Right, List, ListItem, Item, Input
} from 'native-base';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import InputSearchCommon from '../commons/InputSearchCommon';


export default class searchComponent extends Component{
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
                        <Title style={part.navTitle}>Search</Title>
                    </Body>
                    <Right/>
                </Header>
                <InputSearchCommon/>
                <Content>

                </Content>
            </Container>
        );
    }
}