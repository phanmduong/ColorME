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

export default class contactUs extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                <Header
                    style={part.navTop}
                    iosBarStyle={'light-content'}
                    backgroundColor={color.main}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-left" size={size.icon} color={color.navTitle}/>
                        </Button>
                    </Left>
                        <Title style={part.navTitle}>Liên hệ với chúng tôi</Title>
                    <Right/>
                </Header>
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
                                placeholder="Đỉa chỉ Email"
                                style={part.inputTheme03}
                                secureTextEntry={true}
                            />
                        </Item>
                        <Item>
                            <Input
                                multiline={true}
                                placeholder="Điều bạn muốn gửi đến chúng tôi ..."
                                style={[part.inputTheme03, {height: 100, marginTop: 10}]}
                                secureTextEntry={true}
                            />
                        </Item>
                    </Form>
                    <Body>
                    <Button style={part.buttonTheme01}>
                        <Text style={part.describeLight}>Gửi</Text>
                    </Button>
                    </Body>
                </Container>
            </Container>
        );
    }
}
