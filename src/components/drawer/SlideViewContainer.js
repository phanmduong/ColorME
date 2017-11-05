import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, StatusBar,
} from 'react-native';
import {
    Container, Item, CardItem, Button,
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
    componentWillMount() {
        this.props.sideNavAction.getSideNav(this.props.user.id);
    }

    logout() {
        this.props.logoutAction.logout();
        this.props.navigation.navigate('Login');
    }

    render() {
        const {isLoadingCourses} = this.props;
        const {navigate} = this.props.navigation;
        return (
            <Container style={part.wrapperContainer}>
                <View style={part.wrapperImageInDrawer}>
                    <FastImage
                        resizeMode={'cover'}
                        style={part.imageInDrawer}
                        source={{uri: this.props.user.avatar_url}}/>

                    <View style={part.tabInDrawer}>
                        <Item style={part.noBorder}>
                            <View style={part.wrapperAvatarInDrawer}>
                                <FastImage style={part.avatarUserInDrawer}
                                           source={{uri: this.props.user.avatar_url}}/>
                                <Text style={[part.titleBigLight, {marginTop: 10}]}>{this.props.user.name}</Text>
                            </View>
                        </Item>
                    </View>
                </View>
                <TouchableOpacity
                    style={[part.itemTabInDrawer]}
                    onPress={
                        isLoadingCourses
                            ?
                            () => {
                            }
                            :
                            () => navigate('AttendGroup')}
                >
                    <View style={part.wrapperIcon}>
                        <Icon name="fontawesome|group"
                              size={size.iconBig}
                              color={color.darkGray}/>
                    </View>
                    <Text style={part.describeDarkGray}>Nhóm tham gia</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[part.itemTabInDrawer]}
                    onPress={() => navigate('Rules')}
                >
                    <View style={part.wrapperIcon}>
                        <Icon name="ion|ios-paper"
                              size={size.iconBig}
                              color={color.darkGray}/>
                    </View>
                    <Text style={part.describeDarkGray}>Điều khoản sử dụng</Text>

                </TouchableOpacity>
                <TouchableOpacity
                    style={[part.itemTabInDrawer]}
                    onPress={() => this.logout()}
                >
                    <View style={part.wrapperIcon}>
                        <Icon name="entypo|arrow-with-circle-right"
                              size={size.iconBig}
                              color={color.darkGray}/>
                    </View>
                    <Text style={part.describeDarkGray}>Đăng xuất</Text>

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
        isLoadingGroup: state.sideNav.isLoading,
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