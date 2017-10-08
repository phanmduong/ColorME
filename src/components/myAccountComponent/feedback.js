import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Tabs, Tab, Fab, Footer,
    Text, Button, Left, Body, Right, List, ListItem, Item, Input, TabHeading, Form
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import part from '../../styles/partStyle';
export default class feedback extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                <Container style={part.paddingTRB}>
                    <Form>
                        <Item>
                            <Input
                                placeholder="Tên của bạn"
                                style={part.inputTheme03}
                                secureTextEntry={true}
                            />
                        </Item>
                        <Item>
                            <Input
                                placeholder="Địa chỉ Email"
                                style={part.inputTheme03}
                                secureTextEntry={true}
                            />
                        </Item>
                        <Item>
                            <Input
                                multiline={true}
                                placeholder="Để lại phản hồi của bạn... "
                                style={[part.inputTheme03, {height: 100, marginTop: 10}]}
                                secureTextEntry={true}
                            />
                        </Item>
                    </Form>
                    <Body>
                    <Button style={part.buttonTheme01}>
                        <Text style={part.describeLight}>Gửi phản hồi</Text>
                    </Button>
                    </Body>
                </Container>
            </Container>
        );
    }
}
