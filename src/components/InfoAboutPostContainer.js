import React, {Component} from 'react';
import {
    Image, KeyboardAvoidingView, Text, TouchableOpacity, View
} from 'react-native';

import {
    Body, Button, Card, CardItem, Container, Content,
    Input, Item, Left, Right, Spinner, Thumbnail
} from 'native-base';
import Icon from '../commons/Icon';
import Video from 'react-native-video';
import part from '../styles/partStyle';
import parallaxStyle from '../styles/parallaxStyle';
import * as color from '../styles/color';
import * as size from '../styles/size';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as getFullInfoAboutOnePostAction from '../actions/inforAboutPostAction'
import * as likePostAction from '../actions/likePostAction'
import WebViewAutoHeight from '../commons/WebViewAutoHeight';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

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
        if (nextProps.isLoading !== this.props.isLoading && !nextProps.isLoading && this.props.post !== nextProps.props) {
            let post = nextProps.post;
            if (post && post.likers) {
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
            listComment: nextProps.comments
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
        let listComment = this.state.listComment;
        let {user} = this.props;
        // let date = new Date();
        let arr = {
            content: value.comment_content,
            parent_id: 0,
            commenter: {
                username: user.username,
                avatar_url: user.avatar_url,
                name: user.name,
            },
            created_at: 'Vừa xong'
        }
        listComment.push(arr);
        this.setState({listComment: listComment, comment_content: ''})
    }

    render() {
        let {liked, likeCount} = this.state;
        let colorIcon = liked ? color.main : color.icon;
        let likedIcon = liked ? 'fontawesome|heart' : 'fontawesome|heart-o';
        let colorCommentIcon = this.state.comment_content == '' ? color.icon : color.main;
        let commentIcon = this.state.comment_content == '' ? 'fontawesome|comment-o' : 'fontawesome|paper-plane';
        const {goBack, navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        const {isLoading, post} = this.props;
        return (
            <Container style={part.wrapperContainer}>
                <ParallaxScrollView
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={color.main}
                    stickyHeaderHeight={size.STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={size.PARALLAX_HEADER_HEIGHT}
                    backgroundSpeed={10}
                    renderBackground={() =>
                        <View style={part.wrapperImageInGetFull}>
                            <View key="background">
                                {
                                    isLoading
                                        ?
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
                                        <View>
                                            {
                                                1
                                                    ?
                                                    <Image
                                                        resizeMode={'cover'}
                                                        source={{
                                                            uri: post.image_url,
                                                            width: size.wid,
                                                            height: size.PARALLAX_HEADER_HEIGHT
                                                        }}/>
                                                    :
                                                    <Video
                                                        resizeMode={'cover'}
                                                        source={{uri: post.url}}
                                                        style={[part.imageInGetFull]}
                                                    />

                                            }
                                        </View>
                                }
                                <View style={{
                                    position: 'absolute',
                                    top: 0,
                                    width: size.wid,
                                    backgroundColor: 'rgba(0,0,0,0)',
                                    height: size.PARALLAX_HEADER_HEIGHT
                                }}/>
                            </View>
                            <View style={part.iconInDrawer}>
                                <Right style={{left: 10}}>

                                </Right>
                            </View>
                        </View>
                    }
                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View style={part.iconInDrawerNav}>

                            </View>
                        </View>
                    )}
                    renderFixedHeader={() => (
                        <View key="fixed-header" style={part.iconInDrawerNav}>
                            <Left style={{marginTop: 20}}>
                                <TouchableOpacity
                                    style={part.padding}
                                    onPress={() => goBack(null)}
                                >
                                    <Icon name="entypo|chevron-thin-left"
                                          size={size.iconBig}
                                          color={color.navTitle}
                                          style={{zIndex: 100}}
                                    />
                                </TouchableOpacity>
                            </Left>
                            <Right style={{marginTop: 20}}>
                                {
                                    (params.group_name)
                                        ?
                                        (
                                            <TouchableOpacity
                                                style={part.buttonGroup}
                                                onPress={() => navigate('GroupStack', {group_link: params.group_link})}
                                            >
                                                <Text style={[part.titleNormalLight, {marginRight: 10}]}>
                                                    {params.group_name}
                                                </Text>
                                            </TouchableOpacity>
                                        )
                                        :
                                        (
                                            <Text/>
                                        )
                                }
                            </Right>
                        </View>
                    )}
                >
                    {
                        isLoading
                            ?
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
                            <View>
                                <CardItem style={[part.cardHeader, {marginTop: 10}]}>
                                    {
                                        (post.author)
                                            ?
                                            (
                                                <Left>

                                                    <TouchableOpacity
                                                        onPress={() => navigate('UserInNewFeed', {username: post.author.username})}
                                                    >
                                                        <Thumbnail circle
                                                                   source={{uri: post.author.avatar_url}}/>
                                                    </TouchableOpacity>
                                                    <Body>
                                                    <Text
                                                        style={[part.describeDarkGray, part.paddingLine]}
                                                        onPress={() => navigate('UserInNewFeed', {username: post.author.username})}
                                                    >
                                                        Đăng bởi &nbsp;
                                                        <Text
                                                            style={part.titleSmallBlue}>
                                                            {post.author.name}
                                                        </Text>
                                                    </Text>
                                                    <Text
                                                        style={[part.describeItalicDark, part.paddingLine]}>
                                                        {post.created_at}
                                                    </Text>
                                                    <View style={[{flexDirection: 'row'}, part.paddingLine]}>
                                                        {
                                                            post.colors.map((color, i) => {
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
                                <CardItem style={part.cardHeader}>
                                    <Item style={part.noBorder}>
                                        <Text style={part.titleInImage}>
                                            {post.title}
                                        </Text>
                                    </Item>
                                </CardItem>
                                <CardItem style={part.cardHeader}>
                                    <Item style={part.noBorder}>
                                        {
                                            post.description
                                                ?
                                                <Text style={part.describeInImage}>
                                                    {post.description}
                                                </Text>
                                                :
                                                <Text/>
                                        }
                                    </Item>
                                </CardItem>
                                <WebViewAutoHeight source={post.content ? post.content : ''}/>
                                <CardItem footer>
                                    <Left>
                                        <Button
                                            transparent style={[part.padding, {paddingLeft: 0}]}
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
                                                style={[part.describeGray, part.paddingLeft]}>{post.views_count}</Text>
                                        </Button>
                                    </Left>
                                </CardItem>
                                {
                                    this.state.listComment.map((item, i) =>
                                        <CardItem key={i} style={[part.cardHeader, {paddingBottom: 0}]}>
                                            <View style={item.parent_id === 0 ? part.cardCmt : part.cardRepCmt}>
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    style={part.paddingTRB}
                                                    onPress={() => navigate('UserInNewFeed', {username: item.commenter.username})}
                                                >
                                                    <Image
                                                        style={part.avatarUserSmall}
                                                        source={{uri: item.commenter.avatar_url}}/>
                                                </TouchableOpacity>
                                                <Body>
                                                <Text
                                                    style={[part.titleSmallBlue, part.paddingTLB]}
                                                >
                                                    {item.commenter.name}
                                                </Text>
                                                <Text
                                                    style={[part.describeDarkGray, part.paddingLeft]}
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
                                                </Body>
                                                {/*<TouchableOpacity transparent>*/}
                                                {/*<Icon name="fontawesome|heart-o"*/}
                                                {/*color={color.icon}*/}
                                                {/*size={size.iconBig}*/}
                                                {/*style={part.paddingRight}*/}
                                                {/*/>*/}
                                                {/*</TouchableOpacity>*/}
                                            </View>
                                        </CardItem>
                                    )
                                }
                            </View>
                    }

                </ParallaxScrollView>
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
                                          size={size.iconBig}
                                          color={color.icon}
                                          style={{paddingRight: 15}}
                                    />
                                </TouchableOpacity>

                            </Item>

                            </Body>
                            <TouchableOpacity
                                onPress={
                                    this.state.comment_content == ''
                                        ?
                                        () => {
                                        }
                                        :
                                        () => this.commentPost(params.product_id, this.props.token, this.state)}
                            >
                                <Icon active name={commentIcon}
                                      size={size.iconBig}
                                      color={colorCommentIcon}
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
        statusPostComment: state.getFullInfoAboutOnePost.statusPostComment
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFullInfoAboutOnePostAction: bindActionCreators(getFullInfoAboutOnePostAction, dispatch),
        likePostAction: bindActionCreators(likePostAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoAboutPostContainer);