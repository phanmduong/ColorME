import React, {Component} from 'react';
import {
    Image
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail,
    Text, Button, Icon, Left, Body, Right, ListItem, List
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
                    <Title style={part.navTitle}>Notification</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <List>
                        <ListItem>
                            <Thumbnail square size={80} source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfMzZWidbLDPeiep0Gtn2B1pi_1GGtgBQrKcxpJSnuCDSQ3KidQ' }} />
                            <Body>
                                <Text style={part.titleSmallDarkBold}>Coz &nbsp;
                                    <Text style={part.describeDark}>Its time to build a difference . .</Text>
                                </Text>

                            <Text note>3:43 pm</Text>

                            </Body>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}