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
export default class changePassword extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                <Container style={part.paddingTRB}>
                    <Form>
                        <Item>
                            <Input placeholder="Mật khẩu hiện tại"
                                   style={part.inputTheme03}
                                   secureTextEntry={true}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Mật khẩu mới"
                                   style={part.inputTheme03}
                                   secureTextEntry={true}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Xác nhận mật khẩu"
                                   style={part.inputTheme03}
                                   secureTextEntry={true}
                            />
                        </Item>
                    </Form>
                    <Body>
                        <Button style={part.buttonTheme01}>
                            <Text style={part.describeLight}>Lưu mật khẩu mới</Text>
                        </Button>
                    </Body>

                </Container>

            </Container>
        );
    }
}
