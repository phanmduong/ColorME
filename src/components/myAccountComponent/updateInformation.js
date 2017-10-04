import React, {Component} from 'react';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Tabs, Tab, Fab, Footer,
    Text, Button, Left, Body, Right, List, ListItem, Item, Input, TabHeading, Form,Picker
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import part from '../../styles/partStyle';


export default class updateInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gender: "key1"
        };
    }
    onValueChange(value: string) {
        this.setState({
            gender: value
        });
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
                    <Title style={part.navTitle}>Cập nhập thông tin tài khoản</Title>
                    <Right/>
                </Header>
                <Content style={part.paddingTRB}>
                    <Form>
                        <Item>
                            <Input placeholder={"Họ và tên"}
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Email"
                                   style={part.inputTheme03}
                                   autoCorrect={false}

                            />
                        </Item>
                        <Item>
                            <Input placeholder="Username"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                            />
                        </Item>
                        <Item>
                            <Text style={[part.describeDarkGray, part.paddingLeft]}>Giới tính:</Text>
                            <Picker
                                itemTextStyle={part.describeDark}
                                textStyle={part.describeDarkGray}
                                renderHeader={backAction =>
                                <Header style={{ backgroundColor: color.main }} iosBarStyle={'light-content'}>
                                    <Left>
                                        <Button transparent onPress={backAction}>
                                            <Icon name="arrow-left" size={size.icon} color={color.navTitle}/>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Title style={part.navTitle}>Giới tính</Title>
                                    </Body>
                                    <Right />
                                </Header>}
                                mode="dropdown"
                                selectedValue={this.state.gender}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Item label="Nữ" value="key0" />
                                <Item label="Nam" value="key1" />
                                <Item label="Khác" value="key2" />
                            </Picker>
                        </Item>
                        <Item>
                            <Input placeholder="Ngày sinh: YYYY/MM/DD"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Mô tả"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Trường học"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Nơi làm việc"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Địa chỉ"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                            />
                        </Item>
                    </Form>
                    <Body>
                    <Button style={part.buttonTheme01}>
                        <Text style={part.describeLight}>Lưu thông tin cập nhập</Text>
                    </Button>
                    </Body>

                </Content>

            </Container>
        );
    }
}
