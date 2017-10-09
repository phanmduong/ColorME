import React, {Component} from 'react';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Tabs, Tab, Fab, Footer,
    Text, Button, Left, Body, Right, List, ListItem, Item, Input, TabHeading
} from 'native-base';
import part from '../../styles/partStyle';
import InputSearchCommon from '../../commons/InputSearchCommon';


export default class OnlineFriend extends Component {
    render() {
        return (
            <Content style={part.wrapperContainer}>
                <InputSearchCommon/>
                <List>
                    <ListItem avatar style={[part.padding, part.listItem]}>
                        <Left>
                            <Thumbnail
                                source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/5c/31/b8/5c31b8bfabdce76124e9ad9e699a6067--naruto-uzumaki.jpg'}}/>
                        </Left>
                        <Body>
                        <Text style={part.titleSmallDark}>Coz</Text>
                        <Text style={part.describeGray} note>Vô học</Text>
                        </Body>
                    </ListItem>
                </List>
            </Content>
        )
    }
}