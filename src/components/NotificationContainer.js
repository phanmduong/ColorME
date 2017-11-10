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

class NotificationContainer extends Component {
    constructor() {
        super();
        this.state = {
            page: 2
        }
    }

    componentWillMount() {
        this.props.getNotificationAction.getNotification(1, this.props.token)
    }

    getMoreNotification() {
        let page_up = this.state.page;
        page_up++;
        this.setState({page: page_up});
        this.props.getNotificationAction.getNotification(this.state.page, this.props.token);
    }

    loadingLoadMore() {
        if (this.props.isLoading && this.props.notification.length >= 0) {
            return (
                <View style={[part.wrapperContainer]}>
                    <Spinner color={color.gray}/>
                </View>
            )
        } else {
            return <View/>
        }
    }

    //0: nguoi khac thich bai viet cua minh
    //1: nguoi khac binh luan bai viet cua minh
    //2: nguoi khac binh luan ve bai viet ma ban da binh luan
    //3:
    //4:
    //5: nguoi khac tao topic trong group

    routerNotification(type, id) {
        const {navigate} = this.props.navigation;
        switch (type) {
            case 0:
                navigate('ThePostInNotification', {product_id: id});
            case 1:
                navigate('ThePostInNotification', {product_id: id});
            case 2:
                navigate('ThePostInNotification', {product_id: id});
            case 5:
            //chua lam group topic, mai lam ahihi.
        }
    }

    render() {
        const {navigate} = this.props.navigation;
        const {notification, isLoading} = this.props;
        console.log(this.props.notification)
        return (
            <Container style={[part.wrapperContainer, {paddingBottom: 0}]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={color.backGround}
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
                    refreshControl={
                        <RefreshControl
                            refreshing={this.props.isLoadingRef}
                            onRefresh={() => {
                                this.props.getNotificationAction.refNotification(1, this.props.token)

                            }}
                        />
                    }
                >
                    <Item style={[part.noBorder, {paddingLeft: 15}]}>
                        <TouchableOpacity>
                            <Text style={[part.titleLargeDarkBold, part.paddingLineFar]}>
                                Thông báo
                            </Text>
                        </TouchableOpacity>
                    </Item>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        data={notification}
                        onEndThreshold={5}
                        renderItem={({item}) => {
                            return (
                                <CardItem
                                    avatar
                                    style={[item.seen ? part.backgroundNone : part.backgroundGray, part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                    <TouchableOpacity
                                        activeOpacity={0.8}
                                        style={{flex: 1}}
                                        onPress={
                                            () => {
                                                item.object_id
                                                    ?
                                                    this.routerNotification(item.type, item.object_id)
                                                    :
                                                    {}
                                            }
                                        }>
                                        <Left>
                                            <TouchableOpacity
                                                activeOpacity={0.8}
                                            >
                                                <Image
                                                    style={part.avatarUserNormalSquare}
                                                    source={{uri: item.image_url}}/>
                                            </TouchableOpacity>
                                            <Body style={part.noBorder}>
                                            <Text
                                                style={part.titleSmallDarkGray}>{item.message.replace(/<[^>]*>/g, '')}</Text>
                                            <Text
                                                style={part.describeItalicDark}>
                                                {item.created_at}
                                            </Text>
                                            </Body>
                                        </Left>
                                    </TouchableOpacity>
                                </CardItem>
                            )
                        }
                        }
                        ListFooterComponent={this.loadingLoadMore()}
                    />
                    {
                        notification.length % 20 == 0
                            ?
                            <TouchableOpacity style={part.wrapperTextLoadMore}
                                              onPress={() => this.getMoreNotification()}
                            >
                                <Text style={part.describeDarkGray}>Xem thêm thông báo</Text>
                            </TouchableOpacity>
                            :
                            <View/>
                    }

                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token,
        isLoading: state.getNotification.isLoading,
        isLoadingRef: state.getNotification.isLoadingRef,
        notification: state.getNotification.notification,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNotificationAction: bindActionCreators(getNotificationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotificationContainer);