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

class InfoAboutPostContainer extends Component {
    constructor() {
        super();
        this.state = {
            array: [],
            author: {},
            more_products: [],
            colors: [],
            likeCount: 0,
            liked: false,
            parent_id: 0,
            comment_content: '',
            listComment: [],
        }
    }

    componentWillMount() {
        const {params} = this.props.navigation.state;
        this.props.getFullInfoAboutOnePostAction.getFullInfoAboutOnePostOfUser(params.product_id);
        this.props.getFullInfoAboutOnePostAction.getCommentOnePost(params.product_id);
    }

    componentWillReceiveProps(nextProps) {
        let liked = this.state.liked;
        if (nextProps.isLoading !== this.props.isLoading && !nextProps.isLoading && nextProps.isLoading !== null) {
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
            likeCount: nextProps.post.likes_count,
            listComment : nextProps.comments
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

    commentPost(product_id, token, value) {
        this.props.getFullInfoAboutOnePostAction.postCommentOnePost(product_id, token, value);
        let listComment = this.state.listComment
        let {user} = this.props;
        let arr = {
            content: this.state.comment_content,
            parent_id : 0,
            commenter: {
                username: user.username,
                avatar_url: user.avatar_url,
                name: user.name,
            },
            created_at: 'Vừa xong'
        }
         if(this.props.statusPostComment === 1) {
          listComment.push(arr)
            this.setState({listComment : listComment})
        }
    }
    render() {
        let {liked, likeCount} = this.state;
        let colorIcon = liked ? color.main : color.icon;
        let likedIcon = liked ? 'fontawesome|heart' : 'fontawesome|heart-o';
        const {goBack} = this.props.navigation;
        const {navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        return (
            <Container style={part.wrapperContainer}>
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
                                            <View>
                                                {
                                                    1
                                                        ?
                                                        <FastImage
                                                            resizeMode={'cover'}
                                                            source={{uri: this.props.post.image_url}}
                                                            style={[part.imageInGetFull]}
                                                        />
                                                        :
                                                        <Video
                                                            resizeMode={'cover'}
                                                            source={{uri: this.props.post.url}}
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
                                    </View>
                                    <View style={part.wrapperContainer}>
                                        <CardItem style={part.cardHeader}>
                                            <Item style={part.noBorder}>
                                                <Text style={part.titleInImage}>
                                                    {this.props.post.title}
                                                </Text>
                                            </Item>
                                        </CardItem>
                                        <CardItem style={part.cardHeader}>
                                            <Item style={part.noBorder}>
                                                {
                                                    this.props.post.description
                                                        ?
                                                        <Text style={part.describeInImage}>
                                                            {this.props.post.description}

                                                        </Text>
                                                        :
                                                        <View/>
                                                }
                                            </Item>
                                        </CardItem>
                                    </View>

                                    <WebViewAutoHeight source={this.props.post.content ? this.props.post.content : ''}/>

                                    <CardItem footer>
                                        <Left>
                                            <Button
                                                transparent style={[part.padding]}
                                                onPress={() => liked ? this.unlikePost(params.product_id, this.props.token) : this.likePost(params.product_id, this.props.token)}
                                            >
                                                <Icon name={likedIcon} size={size.iconBig}
                                                      color={colorIcon}/>
                                                <Text
                                                    style={[part.describeGray, part.paddingLeft]}>{likeCount}</Text>
                                            </Button>
                                            <Button transparent style={part.padding}
                                            >
                                                <Icon name="fontawesome|comment-o" size={size.iconBig}
                                                      color={color.icon}/>
                                                <Text
                                                    style={[part.describeGray, part.paddingLeft]}>{this.props.comments.length}</Text>
                                            </Button>
                                            <Button transparent style={part.padding}>
                                                <Icon name="fontawesome|bookmark-o" size={size.iconBig}
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
                                    {this.state.listComment.map((item) => {
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
                                        })}
                                </View>
                            )
                    }
                </Content>

                {/*INPUT COMMENT*/}
                <KeyboardAvoidingView behavior={'position'}>
                    <CardItem style={part.cardBottom}>
                        <Left>
                            <Thumbnail small
                                       style={part.avatarUserSmall}
                                       source={{uri: this.props.user.avatar_url}}/>
                            <Body>
                            <Item rounded>
                                <Input
                                    placeholder='Viết bình luận'
                                    autoCorrect={false}
                                    placeholderTextColor={color.icon}
                                    style={part.inputTheme01}
                                    onChangeText={
                                        (text) => {
                                            this.setState({comment_content: text})
                                        }
                                    }
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
                            <TouchableOpacity
                                onPress={() => this.commentPost(params.product_id, this.props.token, this.state)}
                            >
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
        token: state.login.token,
        user: state.login.user,
        post: state.getFullInfoAboutOnePost.post,
        comments: state.getFullInfoAboutOnePost.comments,
        isLoading: state.getFullInfoAboutOnePost.isLoading,
        statusPostComment : state.getFullInfoAboutOnePost.statusPostComment
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFullInfoAboutOnePostAction: bindActionCreators(getFullInfoAboutOnePostAction, dispatch),
        likePostAction: bindActionCreators(likePostAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoAboutPostContainer);