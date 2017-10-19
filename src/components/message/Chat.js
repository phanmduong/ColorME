import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Tabs, Tab, Fab, Footer,
    Text, Button, Left, Body, Right, List, ListItem, Item, Input, TabHeading
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import InputSearchCommon from '../../commons/InputSearchCommon';


export default class Chat extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        }
    }
    render() {
        return (
            <Container style={part.wrapperContainer}>
            </Container>

        )
    }
}
