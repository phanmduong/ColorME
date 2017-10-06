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
                <InputSearchCommon/>
                <Content>
                    <List>
                        <ListItem avatar style={[part.padding, part.listItem]}>
                            <Left>
                                <Thumbnail
                                    source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/5c/31/b8/5c31b8bfabdce76124e9ad9e699a6067--naruto-uzumaki.jpg'}}/>
                            </Left>
                            <Body>
                            <Text style={part.titleSmallDark}>Coz</Text>
                            <Text style={part.describeGray} note>Doing what you like will.
                                .</Text>
                            </Body>
                            <Right>
                                <Text note>3:43 pm</Text>
                            </Right>
                        </ListItem>
                    </List>

                </Content>

                {/*FAB*/}
                <Fab
                    active={this.state.active}
                    direction="up"
                    containerStyle={{}}
                    style={{backgroundColor: color.main}}
                    position="bottomRight"
                    onPress={() => this.setState({active: !this.state.active})}>
                    <Icon name="plus" color={color.navTitle}/>
                    <Button style={{backgroundColor: '#34A34F'}}>
                        <Icon name="users" color={color.navTitle}/>
                    </Button>
                    <Button style={{backgroundColor: '#3B5998'}}>
                        <Icon name="calendar" color={color.navTitle}/>
                    </Button>
                    <Button style={{backgroundColor: '#DD5144'}}>
                        <Icon name="gift" color={color.navTitle}/>
                    </Button>
                </Fab>

            </Container>

        )
    }
}