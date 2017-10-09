import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, Tabs, Tab, TabHeading, List, ListItem, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as userInformationAction from '../../actions/userInformationAction';
import * as color from '../../styles/color';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Information extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Content style={[part.wrapperContainer, part.padding]}>
                {
                    (this.props.isLoadingUserProfile)
                        ?
                        (
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Spinner
                                    color={color.gray}/>
                            </View>
                        )
                        :
                        (
                            <Content style={[part.wrapperContainer]}>
                                <Body>
                                <Thumbnail style={part.avatarUserBig}
                                           source={{uri: this.props.user.avatar_url}}/>
                                <Text style={part.titleBigDark}>{this.props.user.name}</Text>
                                <Text style={[part.describeDark, part.padding]}>{this.props.user.university}</Text>
                                </Body>

                                <List>
                                    <ListItem itemDivider>
                                        <Text style={part.titleSmallDarkBold}>Thông tin chi tiết</Text>
                                    </ListItem>
                                    <ListItem style={part.listItem}>
                                        <Text style={part.describeDark}>Họ tên: {this.props.user.name}</Text>
                                    </ListItem>
                                    <ListItem style={part.listItem}>
                                        {(this.props.user.gender === 1) ?
                                            (<Text style={part.describeDark}>Giới tính: Nam</Text>) :
                                            (<Text style={part.describeDark}>Giới tính: Nữ</Text>)}
                                    </ListItem>
                                    <ListItem style={part.listItem}>
                                        <Text style={part.describeDark}>Mô tả: {this.props.user.description}</Text>
                                    </ListItem>
                                    <ListItem style={part.listItem}>
                                        <Text style={part.describeDark}>Nơi làm việc: {this.props.user.work}</Text>
                                    </ListItem>
                                    <ListItem style={part.listItem}>
                                        <Text style={part.describeDark}>Trường học: {this.props.user.university}</Text>
                                    </ListItem>
                                </List>
                            </Content>
                        )
                }
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return{
        user: state.userInformation.user,
        isLoadingUserProfile: state.userInformation.isLoadingUserProfile
    }
}

function mapDispatchToProps(dispatch) {
    return{
        userInformationAction: bindActionCreators(userInformationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Information);