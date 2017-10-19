import React, {Component} from 'react';
import {Image, KeyboardAvoidingView, StatusBar, Text, TouchableOpacity, View, FlatList} from 'react-native';

import {
    Body, Button, Card, CardItem, Container, Content, Input, Item, Left, Right, Spinner, Thumbnail,
} from 'native-base';
import Icon from '../commons/Icon';
import Video from 'react-native-video';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import * as size from '../styles/size';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as getFullInfoAboutOnePostAction from '../actions/inforAboutPostAction'
import * as likePostAction from '../actions/likePostAction'
import FastImage from 'react-native-fast-image';
import WebViewAutoHeight from '../commons/WebViewAutoHeight';

class getFullInfoAboutOnePostComponent extends Component {
    constructor() {
        super();
        this.state = {
            author: {},
            more_products: [],
            colors: [],
            likeCount: 0,
            liked: false,
            Height: 500,

        }
    }

    componentWillMount() {
        this.props.getFullInfoAboutOnePostAction.getFullInfoAboutOnePostOfUser(this.props.navigation.state.params.product_id)
        this.props.getFullInfoAboutOnePostAction.getCommentOnePost(this.props.navigation.state.params.product_id)
    }

    componentWillReceiveProps(nextProps) {
        let liked = this.state.liked;
        if (nextProps.isLoading !== this.props.isLoading && !nextProps.isLoading) {
            let post = nextProps.post;
            if (post) {
                let likers = post.likers.filter((liker) => {
                    return liker.username == nextProps.user.username
                })
                if (likers && likers.length == 0) {
                    liked = false;
                }
                else {
                    liked = true;
                }
            }
        }
        this.setState({
            liked: liked,
            likeCount: nextProps.post.likes_count
        })
    }

    likePost(product_id, token) {
        let liked = this.state.liked;
        let likeCount = this.state.likeCount;
        if (liked == false) {
            this.props.likePostAction.likePost(product_id, token);
            likeCount++;
            liked = !liked;
        }
        this.setState({likeCount: likeCount, liked: liked});
    }

    unlikePost(product_id, token) {
        let liked = this.state.liked;
        let likeCount = this.state.likeCount;
        if (liked == true) {
            this.props.likePostAction.unlikePost(product_id, token);
            likeCount--;
            liked = !liked;
        }
        this.setState({likeCount: likeCount, liked: liked});
    }

    render() {
        let {liked, likeCount} = this.state;
        let colorIcon = liked ? "red" : "#d7dde5";
        const {goBack} = this.props.navigation;
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        return (
            <Container style={part.wrapperContainer}>
                <StatusBar
                    hidden={true}
                />
                <Content scrollsToTop={false}>
                    {
                        (this.props.isLoading)
                            ?
                            (
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
                            )
                            :
                            (
                                <View>
                                    <View style={part.cardGetFull}>

                                        {/*PHOTO*/}
                                        <CardItem cardBody>
                                            <View style={part.shadow}>
                                                {
                                                    1
                                                        ?
                                                        <FastImage source={{uri: this.props.post.image_url}}
                                                                   style={[part.imageInGetFull]}
                                                        />
                                                        :
                                                        <Video source={{uri: this.props.post.url}}
                                                               style={[part.imageInGetFull]}
                                                        />

                                                }
                                            </View>
                                            <View style={part.iconInDrawer}>
                                                <Left>
                                                    <TouchableOpacity style={part.padding}
                                                                      onPress={() => goBack(null)}
                                                    >
                                                        <Icon name="entypo|chevron-thin-left"
                                                              size={size.iconBig}
                                                              color={color.navTitle}
                                                              style={part.shadow}
                                                        />
                                                    </TouchableOpacity>
                                                    <Right style={{right: 0}}>
                                                        {
                                                            (params.group_name)
                                                                ?
                                                                (
                                                                    <TouchableOpacity style={part.buttonGroup}
                                                                                      onPress={() => navigate('GroupStack', {group_link: params.group_link})}
                                                                    >
                                                                        <Text
                                                                            style={part.titleGroup}>{params.group_name}</Text>
                                                                    </TouchableOpacity>
                                                                )
                                                                :
                                                                (
                                                                    <Text/>
                                                                )
                                                        }

                                                    </Right>
                                                </Left>
                                            </View>
                                        </CardItem>


                                        <CardItem style={[part.cardHeader, {marginTop: 10}]}>
                                            {
                                                (this.props.post.author)
                                                    ?
                                                    (
                                                        <Left>

                                                            <TouchableOpacity
                                                                onPress={() => navigate('UserInNewFeed', {username: this.props.post.author.username})}
                                                            >
                                                                <Thumbnail circle
                                                                           source={{uri: this.props.post.author.avatar_url}}/>
                                                            </TouchableOpacity>
                                                            <Body>
                                                            <Text
                                                                style={[part.describeDarkGray, part.paddingLine]}
                                                                onPress={() => navigate('UserInNewFeed', {username: this.props.post.author.username})}
                                                            >
                                                                Đăng bởi &nbsp;
                                                                <Text
                                                                    style={part.titleSmallBlue}>
                                                                    {this.props.post.author.name}
                                                                </Text>
                                                            </Text>
                                                            <Text
                                                                style={[part.describeItalicDark, part.paddingLine]}>
                                                                {this.props.post.created_at}
                                                            </Text>
                                                            <View style={[{flexDirection: 'row'}, part.paddingLine]}>
                                                                {
                                                                    this.props.post.colors.map((color, i) => {
                                                                        return (
                                                                            <Icon key={i}
                                                                                  name="fontawesome|circle"
                                                                                  style={part.paddingRight}
                                                                                  size={12}
                                                                                  color={'#' + color}/>
                                                                        );
                                                                    })

                                                                }
                                                            </View>
                                                            </Body>
                                                        </Left>
                                                    )
                                                    :
                                                    (
                                                        <View/>
                                                    )
                                            }
                                        </CardItem>
                                        <TouchableOpacity style={[part.iconLikeInImageFullAbout, part.shadow]}>
                                            <Icon name="fontawesome|heart-o"
                                                  size={20}
                                                  color={color.navTitle}/>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={part.wrapperContainer}>
                                        <CardItem style={part.cardHeader}>
                                            <Item style={part.noBorder}>
                                                <Text style={part.titleLargeGrayDark}>
                                                    {this.props.post.title}
                                                </Text>
                                            </Item>
                                        </CardItem>
                                        <CardItem style={part.cardHeader}>
                                            <Item style={part.noBorder}>
                                                <Text style={part.describeDarkGray}>
                                                    {this.props.post.description}
                                                </Text>
                                            </Item>
                                        </CardItem>
                                    </View>

                                    <WebViewAutoHeight source={this.props.post.content ? this.props.post.content : ''}/>

                                    <CardItem footer>
                                        <Left>
                                            <Button
                                                transparent style={part.padding}
                                                onPress={() => liked ? this.unlikePost(params.product_id, this.props.token) : this.likePost(params.product_id, this.props.token)}
                                            >
                                                <Icon name="fontawesome|heart" size={size.iconBig}
                                                      color={colorIcon}/>
                                                <Text
                                                    style={[part.describeGray, part.paddingLeft]}>{likeCount}</Text>
                                            </Button>
                                            <Button transparent style={part.paddingRight}
                                            >
                                                <Icon name="fontawesome|comments-o" size={size.iconBig}
                                                      color={color.icon}/>
                                                <Text
                                                    style={[part.describeGray, part.paddingLeft]}>{this.props.comments.length}</Text>
                                            </Button>
                                            <Button transparent style={part.paddingRight}>
                                                <Icon name="fontawesome|eye" size={size.iconBig}
                                                      color={color.icon}/>
                                                <Text
                                                    style={[part.describeGray, part.paddingLeft]}>{this.props.post.views_count}</Text>
                                            </Button>
                                        </Left>
                                        <Right>
                                            <TouchableOpacity transparent>
                                                <Icon name="materialCommunity|dots-horizontal"
                                                      color={color.icon}
                                                      size={size.icon}
                                                      style={part.paddingRight}
                                                />
                                            </TouchableOpacity>
                                        </Right>
                                    </CardItem>
                                    <FlatList
                                        onEndReachedThreshold={5}
                                        data={this.props.comments}
                                        renderItem={({item}) =>
                                            <CardItem style={part.cardHeader}>
                                                <View style={item.parent_id === 0 ? part.cardCmt : part.cardRepCmt}>
                                                    <TouchableOpacity style={part.paddingTRB}
                                                                      onPress={() => navigate('UserInNewFeed', {username: item.commenter.username})}
                                                    >
                                                        <Image
                                                            style={part.avatarUserNormal}
                                                            source={{uri: item.commenter.avatar_url}}/>
                                                    </TouchableOpacity>
                                                    <Body>
                                                    <Text
                                                        style={[part.titleSmallBlue, part.paddingTLB]}
                                                    >
                                                        {item.commenter.name}
                                                    </Text>
                                                    <Text
                                                        style={[part.describeDarkGray, part.paddingTLB]}
                                                    >
                                                        {item.content}
                                                    </Text>
                                                    <View style={{flexDirection: 'row'}}>
                                                        <Text
                                                            style={[part.describeLightGray, part.paddingTLB]}
                                                        >
                                                            {item.created_at}
                                                        </Text>
                                                        <Text
                                                            style={[part.describeLightGray, part.paddingTLB, part.marginLeftFar]}
                                                        >
                                                            Trả lời
                                                        </Text>
                                                    </View>

                                                    <View
                                                        style={[{flexDirection: 'row'}, part.paddingLine]}>

                                                    </View>
                                                    </Body>
                                                    <TouchableOpacity transparent>
                                                        <Icon name="fontawesome|heart-o"
                                                              color={color.icon}
                                                              size={size.icon}
                                                              style={part.paddingRight}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </CardItem>
                                        }/>
                                </View>
                            )
                    }
                </Content>


                {/*INPUT COMMENT*/}
                <KeyboardAvoidingView behavior={'position'}>
                    <CardItem style={part.cardBottom}>
                        <Left>
                            <Image
                                style={part.avatarUserNormal}
                                source={{uri: this.props.user.avatar_url}}/>
                            <Body>
                            <Item rounded>
                                <Input
                                    placeholder='Viết bình luận'
                                    autoCorrect={false}
                                    placeholderTextColor={color.icon}
                                    style={part.inputTheme01}
                                />
                                <TouchableOpacity>
                                    <Icon active name='fontawesome|camera-retro'
                                          size={size.iconNormal}
                                          color={color.icon}
                                          style={{paddingRight: 15}}
                                    />
                                </TouchableOpacity>

                            </Item>

                            </Body>
                            <TouchableOpacity>
                                <Icon active name='fontawesome|comment-o'
                                      size={size.iconBig}
                                      color={color.icon}
                                      style={[part.paddingTLB, {paddingLeft: 10}]}
                                />
                            </TouchableOpacity>
                        </Left>
                    </CardItem>
                </KeyboardAvoidingView>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user,
        post: state.getFullInfoAboutOnePost.post,
        comments: state.getFullInfoAboutOnePost.comments,
        isLoading: state.getFullInfoAboutOnePost.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFullInfoAboutOnePostAction: bindActionCreators(getFullInfoAboutOnePostAction, dispatch),
        likePostAction: bindActionCreators(likePostAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(getFullInfoAboutOnePostComponent);