import React, {Component} from 'react';
import {
    Image, Text, TouchableOpacity, View, FlatList, RefreshControl
} from 'react-native';

import {
    Body, Button, Card, CardItem, Container, Content,
    Input, Item, Left, Right, Spinner, Thumbnail,
} from 'native-base';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as getNotificationAction from '../actions/notificationAction';
import FastImage from 'react-native-fast-image';

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

    textNotification(type, item) {
        const {navigate} = this.props.navigation;
        switch (type) {
            case 'also_comment':
                return (
                    <Text style={part.titleSmallBlue}>
                        {item.actor.name}
                        <Text style={part.titleSmallDarkGrayBold}>
                            &nbsp;đã bình luận về
                            <Text style={part.titleSmallBlue}> bài viết </Text>
                            mà bạn đã bình luận
                        </Text>
                    </Text>
                );
            case 'like':
                return (
                    <Text style={part.titleSmallBlue}>
                        {item.actor.name}
                        <Text style={part.titleSmallDarkGrayBold}>
                            &nbsp;đã thích
                            <Text style={part.titleSmallBlue}> bài viết </Text>
                            của bạn
                        </Text>
                    </Text>
                );
            case 'new_comment':
                return (
                    <Text style={part.titleSmallBlue}>
                        {item.actor.name}
                        <Text style={part.titleSmallDarkGrayBold}>
                            &nbsp;đã bình luận về
                            <Text style={part.titleSmallBlue}
                                  onPress={() => this.props.navigate}
                            > bài viết </Text>
                            của bạn
                        </Text>
                    </Text>
                );
            case 'money_transferred':
                return (
                    <Text style={part.titleSmallDarkGrayBold}>
                        Bạn chuyển tiền cho
                        <Text style={part.titleSmallBlue}>
                            &nbsp;{item.actor.name}&nbsp;
                        </Text>
                        {
                            item.transaction.status == 1
                                ?
                                'thành công'
                                :
                                'thất bại'
                        }
                    </Text>
                );
        }
    }


    render() {
        const {notification, isLoading} = this.props;
        const {navigate} = this.props.navigation;
        return (
            <Container style={[part.wrapperContainer, {paddingBottom: 0}]}>
                <View style={part.wrapperStatusBarNoPadding}>
                </View>
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

                        renderItem={({item}) =>
                            <CardItem
                                avatar
                                style={[item.seen ? part.backgroundNone : part.backgroundGray, part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                <TouchableOpacity
                                    activeOpacity={0.8}
                                    style={{flex: 1}}
                                >
                                    <Left>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                        >
                                            <FastImage
                                                style={part.avatarUserNormalSquare}
                                                source={{uri: item.actor.avatar_url}}/>
                                        </TouchableOpacity>
                                        <Body style={part.noBorder}>
                                        {this.textNotification(item.type, item)}
                                        <Text
                                            style={part.describeItalicDark}>
                                            {item.created_at}
                                        </Text>
                                        </Body>
                                    </Left>
                                </TouchableOpacity>
                            </CardItem>
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