import React, {Component} from 'react';
import {
    View, Text, Image, TouchableOpacity
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Item,
    Thumbnail, Button, Left, Body, Right, ListItem
} from 'native-base';
import Icon from '../commons/Icon';
import part from '../styles/partStyle';
import * as size from '../styles/size';
import * as color from '../styles/color';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import * as logoutAction from '../actions/logoutAction'
import FastImage from 'react-native-fast-image'
import {NavigationActions} from 'react-navigation'


class SlideViewComponent extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    logout() {
        this.props.logoutAction.logout()
        this.props.navigation.navigate('Login');


    }

    render() {

        return (
            <Container style={part.wrapperContainer}>
                <View style={part.wrapperImageInDrawer}>
                    <FastImage
                        resizeMode={'cover'}
                        style={part.imageInDrawer}
                        source={{uri: this.props.user.avatar_url}}/>
                    <View style={part.iconInDrawer}>
                    </View>
                    <View style={part.tabInDrawer}>
                        <Item style={{borderBottomWidth: 0,}}>
                            <Left style={{alignItems: 'center'}}>
                                <Thumbnail circle large
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
                {/*<Item style={[part.itemTabInDrawer, {marginTop: 20}]}>*/}
                    {/*<Left>*/}
                        {/*<Text style={part.describeDarkGray}>Cài đặt</Text>*/}
                    {/*</Left>*/}
                    {/*<Right>*/}
                        {/*<TouchableOpacity style={part.wrapperIcon}>*/}
                            {/*<Icon name="ion|ios-settings"*/}
                                  {/*size={size.iconNormal}*/}
                                  {/*color={color.darkGray}/>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</Right>*/}
                {/*</Item>*/}
                {/*<Item style={[part.itemTabInDrawer]}>*/}
                    {/*<Left>*/}
                        {/*<Text style={part.describeDarkGray}>Đăng ký học</Text>*/}
                    {/*</Left>*/}
                    {/*<Right>*/}
                        {/*<TouchableOpacity style={part.wrapperIcon}>*/}
                            {/*<Icon name="fontawesome|graduation-cap"*/}
                                  {/*size={size.iconNormal}*/}
                                  {/*color={color.darkGray}/>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</Right>*/}
                {/*</Item>*/}
                {/*<Item style={[part.itemTabInDrawer]}>*/}
                    {/*<Left>*/}
                        {/*<Text style={part.describeDarkGray}>Đổi buổi học</Text>*/}
                    {/*</Left>*/}
                    {/*<Right>*/}
                        {/*<TouchableOpacity style={part.wrapperIcon}>*/}
                            {/*<Icon name="materialCommunity|arrow-expand"*/}
                                  {/*size={size.iconNormal}*/}
                                  {/*color={color.darkGray}/>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</Right>*/}
                {/*</Item>*/}
                {/*<Item style={[part.itemTabInDrawer]}>*/}
                    {/*<Left>*/}
                        {/*<Text style={part.describeDarkGray}>Lịch học</Text>*/}
                    {/*</Left>*/}
                    {/*<Right>*/}
                        {/*<TouchableOpacity style={part.wrapperIcon}>*/}
                            {/*<Icon name="fontawesome|calendar"*/}
                                  {/*size={size.iconNormal}*/}
                                  {/*color={color.darkGray}/>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</Right>*/}
                {/*</Item>*/}
                {/*<Item style={[part.itemTabInDrawer]}>*/}
                    {/*<Left>*/}
                        {/*<Text style={part.describeDarkGray}>Thành tích</Text>*/}
                    {/*</Left>*/}
                    {/*<Right>*/}
                        {/*<TouchableOpacity style={part.wrapperIcon}>*/}
                            {/*<Icon name="materialCommunity|star-circle"*/}
                                  {/*size={size.iconNormal}*/}
                                  {/*color={color.darkGray}/>*/}
                        {/*</TouchableOpacity>*/}
                    {/*</Right>*/}
                {/*</Item>*/}
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        logoutAction: bindActionCreators(logoutAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideViewComponent);