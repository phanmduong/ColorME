import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, StatusBar
} from 'react-native';
import {
    Container, Item,
    Left, Body, Right, ListItem
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as size from '../../styles/size';
import * as color from '../../styles/color';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as logoutAction from '../../actions/logoutAction';
import * as sideNavAction from '../../actions/sideNavAction';
import * as courseAction from '../../actions/courseAction';
import FastImage from 'react-native-fast-image';


class SlideViewComponent extends Component {
    componentWillMount(){
        this.props.sideNavAction.getSideNav(this.props.user.id);
        this.props.courseAction.getCourse(this.props.token);
    }

    logout() {
        this.props.logoutAction.logout();
        this.props.navigation.navigate('Login');
    }
    render() {
        const {sideNav, courses} = this.props;
        return (
            <Container style={part.wrapperContainer}>
                <StatusBar
                    barStyle="light-content"
                />
                <View style={part.wrapperImageInDrawer}>
                    <FastImage
                        resizeMode={'cover'}
                        style={part.imageInDrawer}
                        source={{uri: this.props.user.avatar_url}}/>
                   
                    <View style={part.tabInDrawer}>
                        <Item style={part.noBorder}>
                            <Left style={{alignItems: 'center'}}>
                                <FastImage style={part.avatarUserInDrawer}
                                           source={{uri: this.props.user.avatar_url}}/>
                            </Left>
                            <Body style={{alignItems: 'flex-start'}}>
                            <Text style={part.titleNormalLight}>{this.props.user.name}</Text>
                            <TouchableOpacity style={{flexDirection: 'row'}}
                                              onPress={() => this.logout()}
                            >
                                <Text style={part.describeGray} onPress={() => this.logout()}>Đăng xuất&nbsp;</Text>
                                <Icon name="entypo|arrow-with-circle-right"
                                      size={18}
                                      color={color.gray}
                                />
                            </TouchableOpacity>
                            </Body>
                        </Item>

                    </View>
                </View>

                <TouchableOpacity style={[part.itemTabInDrawer]}
                    onPress={() => this.props.navigation.navigate('Courses', {courses: courses})}
                >
                    <Left>
                        <Text style={part.describeDarkGray}>Đăng ký học</Text>
                    </Left>
                    <Right>
                        <View style={part.wrapperIcon}>
                            <Icon name="fontawesome|graduation-cap"
                                  size={size.iconNormal}
                                  color={color.darkGray}/>
                        </View>
                    </Right>
                </TouchableOpacity>
                <TouchableOpacity style={[part.itemTabInDrawer]}
                    onPress={() => this.props.navigation.navigate('AttendGroup', {groups : sideNav.groups})}
                >
                    <Left>
                        <Text style={part.describeDarkGray}>Nhóm tham gia</Text>
                    </Left>
                    <Right>
                        <View style={part.wrapperIcon}>
                            <Icon name="fontawesome|group"
                                  size={size.iconNormal}
                                  color={color.darkGray}/>
                        </View>
                    </Right>
                </TouchableOpacity>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user,
        token: state.login.token,
        sideNav: state.sideNav.data,
        courses : state.getCourse.courses,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logoutAction: bindActionCreators(logoutAction, dispatch),
        sideNavAction: bindActionCreators(sideNavAction, dispatch),
        courseAction: bindActionCreators(courseAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideViewComponent);