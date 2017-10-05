import React, {Component} from 'react';
import {
    TouchableOpacity, Switch
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Footer,
    Text, Button, Left, Body, Right, List, ListItem, Item, Input, TabHeading
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';


export default class setting extends Component {
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
                    <Body>
                        <Title style={part.navTitle}>Cài đặt</Title>
                    </Body>
                    <Right>

                    </Right>
                </Header>
                <Content style={part.padding}>
                    <List style={part.paddingBottom}>
                        <ListItem itemDivider>
                            <Text style={part.titleSmallDarkBold}>Cài đặt tài khoản</Text>
                        </ListItem>
                        <ListItem style={part.listItem}
                                  onPress={() => this.props.navigation.navigate('UpdateInformation')}>
                            <Left>
                                <Text style={part.describeDark}>Cập nhập thông tin</Text>
                            </Left>
                            <Right>
                                <Icon name="user" color={color.gray} size={size.icon}/>
                            </Right>
                        </ListItem>
                        <ListItem style={part.listItem}
                                  onPress={() => this.props.navigation.navigate('ChangePassword')}>
                            <Left>
                                <Text style={part.describeDark}>Đổi mật khẩu</Text>
                            </Left>
                            <Right>
                                <Icon name="key" color={color.gray} size={size.icon}/>
                            </Right>
                        </ListItem>
                        <ListItem style={part.listItem}
                                  // onPress={() => this.props.navigation.navigate('ChangePassword')}
                        >
                            <Left>
                                <Text style={part.describeDark}>Lớp đang học</Text>
                            </Left>
                            <Right>
                                <Icon name="pencil" color={color.gray} size={size.icon}/>
                            </Right>
                        </ListItem>
                        <ListItem style={part.listItem}
                            // onPress={() => this.props.navigation.navigate('ChangePassword')}
                        >
                            <Left>
                                <Text style={part.describeDark}>Đăng xuất</Text>
                            </Left>
                            <Right>
                                <Icon name="sign-out" color={color.gray} size={size.icon}/>
                            </Right>
                        </ListItem>
                    </List>
                    <List style={part.paddingBottom}>
                        <ListItem itemDivider>
                            <Text style={part.titleSmallDarkBold}>Cài đặt ứng dụng</Text>
                        </ListItem>
                        <ListItem style={part.listItem}>
                            <Left>
                                <Text style={part.describeDark}>Âm thanh thông báo</Text>
                            </Left>
                            <Right>
                                <Switch value={true} onTintColor={color.main}/>
                            </Right>
                        </ListItem>
                        <ListItem style={part.listItem}
                                  onPress={() => this.props.navigation.navigate('AboutUs')}
                        >
                            <Left>
                                <Text style={part.describeDark}>Thông tin</Text>
                            </Left>
                            <Right>
                                <Icon name="info-circle" color={color.gray} size={size.icon}/>
                            </Right>
                        </ListItem>
                    </List>
                    <List style={part.paddingBottom}>
                        <ListItem itemDivider>
                            <Text style={part.titleSmallDarkBold}>Hỗ trợ</Text>
                        </ListItem>
                        <ListItem style={part.listItem}
                            // onPress={() => this.props.navigation.navigate('ChangePassword')}
                        >
                            <Left>
                                <Text style={part.describeDark}>Liên hệ với chúng tôi</Text>
                            </Left>
                            <Right>
                                <Icon name="phone" color={color.gray} size={size.icon}/>
                            </Right>
                        </ListItem>
                        <ListItem style={part.listItem}
                            // onPress={() => this.props.navigation.navigate('ChangePassword')}
                        >
                            <Left>
                                <Text style={part.describeDark}>Feedback</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-right" color={color.gray} size={size.icon}/>
                            </Right>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}
