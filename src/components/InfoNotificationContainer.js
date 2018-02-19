import React, {Component} from 'react';
import {FlatList, Image, Platform, RefreshControl, StatusBar, Text, TouchableOpacity, View} from 'react-native';

import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Input,
    Item,
    Left,
    Right,
    Spinner,
    Thumbnail,
} from 'native-base';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as getNotificationAction from '../actions/notificationAction';
import WebViewAutoHeight from "../commons/WebViewAutoHeight";

class InfoNotificationContainer extends Component {
    constructor(){
        super();
        this.state = {
            isLoading : false,
        }
    }
    static navigationOptions = ({navigation}) => {
        console.log(navigation);
        return ({
            notification_id: navigation.state.params.notification_id
        })};
    isLoading(){
        this.setState({isLoading : true});
        setTimeout(() => this.setState({isLoading : false}), 1000)
    }
    componentWillMount(){
        const{params} = this.props.navigation.state;
        this.props.getNotificationAction.getDetailNoti(params.notification_id, this.props.token);
        this.isLoading();
    }
    isEmpty(obj){
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        if (obj == null) return true;
        if (obj.length > 0)    return false;
        if (obj.length === 0)  return true;
        if (typeof obj !== "object") return true;
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) return false;
        }

        return true;
    }
    render(){
        const {navigate} = this.props.navigation;
        const {detailNoti} = this.props;
        return (
            <Container style={[part.wrapperContainer, {paddingBottom: 0}]}>
                <StatusBar
                    backgroundColor={color.bgModal}
                    barStyle={ Platform.OS === 'ios' ? "dark-content" : "light-content"}
                />
                {
                    Platform.OS === 'ios'
                        ?
                        <View style={part.wrapperStatusBarNoPadding}>
                        </View>
                        :
                        <View/>
                }

                <Content
                >
                    <Item style={[part.noBorder, {paddingLeft: 15}]}>
                        <TouchableOpacity>
                            <Text style={[part.titleLargeDarkBold, part.paddingLineFar]}>
                                Thông báo
                            </Text>
                        </TouchableOpacity>
                    </Item>
                    {this.props.isLoadingDetailNoti || this.state.isLoading || this.isEmpty(this.props.detailNoti) ?
                        <View
                            style={{
                                margin: 50,
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Spinner
                                color={color.gray}/>
                        </View>
                        :
                        <WebViewAutoHeight source={detailNoti.content}/>
                    }
                </Content>
            </Container>
        )
    }
}
function mapStateToProps(state){
    return{
        token : state.login.token,
        detailNoti : state.getNotification.detailNoti,
        isLoadingDetailNoti : state.getNotification.isLoadingDetailNoti,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getNotificationAction: bindActionCreators(getNotificationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoNotificationContainer);