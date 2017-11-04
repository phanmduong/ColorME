import React, {Component} from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Text,
    TouchableOpacity,
    View,
    Alert,
    Modal,
    PanResponder
} from 'react-native';
import {
    List,
    ListItem,
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
    Thumbnail
} from 'native-base';
import Icon from '../../commons/Icon';
import BackButton from '../../commons/BackButton';
import Video from 'react-native-video';
import part from '../../styles/partStyle';
import parallaxStyle from '../../styles/parallaxStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as infoAboutPostAction from '../../actions/infoAboutPostAction'
import * as likePostAction from '../../actions/likePostAction'
import * as reportAction from '../../actions/reportAction';
import WebViewAutoHeight from '../../commons/WebViewAutoHeight';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import * as infoAboutPostApi from '../../apis/InfoAboutPostApi';

class InfoAboutPostContainer extends Component {
    constructor() {
        super();
        this.state = {
            modalMenu: false,
            likeCount: 0,
            liked: false,
            parent_id: 0,
            comment_content: '',
            listComment: [],
            likedComment: [],
        }
    }

    componentWillMount() {
        const {params} = this.props.navigation.state;
        this.props.infoAboutPostAction.getInfoAboutPost(params.product_id);
        this.props.infoAboutPostAction.getCommentOnePost(params.product_id);
        this.props.infoAboutPostAction.getPostLiker(params.product_id);
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
    }

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({
                modalComment: false,
                modalMenu: false,
            });
        }
    }

    setCommentModalMenu(visible) {
        this.setState({modalMenu: visible});
    }

    componentWillReceiveProps(nextProps) {
        let liked = this.state.liked;
        let likedComment = this.state.likedComment;
        if (nextProps.isLoading !== this.props.isLoading && !nextProps.isLoading && this.props.post !== nextProps.props || (nextProps.likers !== this.props.likers)) {
            let comments = nextProps.comments;
            let item = false;
            if (nextProps.likers) {
                let likers = nextProps.likers.filter((liker) => {
                    return liker.username == this.props.user.username
                })
                if (likers && likers.length == 0) {
                    liked = false;
                }
                else {
                    liked = true;
                }
            }
            let i = 0;
            while (i < nextProps.comments.length) {
                let likersComment = comments[i].likers.filter((liker) => {
                    return liker.name == nextProps.user.name;
                })
                if (likersComment && likersComment.length == 0) {
                    item = false;
                }
                else {
                    item = true;
                }
                likedComment.push(item);
                i++;
            }
        }
        this.setState({
            liked: liked,
            likeCount: nextProps.post.likes_count,
            listComment: nextProps.comments,
            likedComment: likedComment
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
        if (liked) {
            this.props.likePostAction.unlikePost(product_id, token);
            likeCount--;
            liked = !liked;
        }
        this.setState({likeCount: likeCount, liked: liked});
    }

   async commentPost(product_id, token, value) {
       const response = await infoAboutPostApi.postCommentOnePostApi(product_id, token, value);
            let listComment = this.state.listComment;
            let id = await response.data.id;
            let {user} = this.props;
            // let date = new Date();
            let arr = {
                content: value.comment_content,
                id: id,
                parent_id: 0,
                commenter: {
                    username: user.username,
                    avatar_url: user.avatar_url,
                    name: user.name,
                },
                created_at: 'Vừa xong'
            };
            listComment.push(arr);
            this.setState({listComment: listComment, comment_content: ''});
            this.ref.scrollView.scrollToEnd();
    }

    likeComment(product_id, user_id, index) {
        let likedComment = this.state.likedComment;
        this.props.likePostAction.likeComment(product_id, user_id);
        likedComment[index] = !likedComment[index];
        this.setState({likedComment: likedComment})
    }

    deleteComment(product_id, token, index) {
        let listComment = this.state.listComment;
        this.props.infoAboutPostAction.deleteComment(product_id, token);
        listComment.splice(index, 1);
        this.setState({listComment: listComment})
    }

    alertReport() {
        Alert.alert(
            'Báo cáo',
            'Bạn thực sự muốn báo cáo bài viết này?',
            [
                {text: 'Xác nhận', onPress: () => this.reportPost(this.props.post.id, this.props.token)},
                {text: 'Hủy'},
            ],
            {cancelable: false}
        )
    }

    reportPost(id, token) {
        this.props.reportAction.reportPost(id, token);
        this.setState({
            modalMenu: false,
        });
    }


    render() {
        const {goBack, navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
        const {isLoading, post} = this.props;
        let {liked, likeCount} = this.state;
        let colorIcon = liked ? color.main : color.icon;
        let likedIcon = liked ? 'fontawesome|heart' : 'fontawesome|heart-o';
        let colorCommentIcon = this.state.comment_content == '' ? color.icon : color.main;
        let commentIcon = this.state.comment_content == '' ? 'fontawesome|comment-o' : 'fontawesome|paper-plane';
        let featureIcon = post.feature_id == 0 ? 'fontawesome|star-o' : 'fontawesome|star';
        let colorFeatureIcon = post.feature_id == 0 ? color.icon : color.star;
        return (
            <Container ref="page" style={part.wrapperContainer}>
                <ParallaxScrollView
                    backgroundColor={color.main}
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
                                                            uri: post.url,
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
                                <LinearGradient
                                    colors={['black', 'transparent']}
                                    style={{
                                    position: 'absolute',
                                    top: 0,
                                    width: size.wid,
                                    height: size.PARALLAX_HEADER_HEIGHT / 2.5,
                                }}>
                                </LinearGradient>
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
                            <Left style={{marginTop: 20, flexDirection: 'row'}}>
                                <BackButton goBack={goBack}/>
                                <Body>
                                {
                                    (params.group_name)
                                        ?
                                        (
                                            <TouchableOpacity
                                                style={part.buttonGroup}
                                                onPress={() => navigate('GroupStack', {group_link: params.group_link})}
                                            >
                                                <Text style={[part.titleNormalLightNav]}>
                                                    {params.group_name}
                                                </Text>

                                            </TouchableOpacity>
                                        )
                                        :
                                        (
                                            <Text/>
                                        )
                                }
                                </Body>
                            </Left>
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
                                                            post.colors
                                                                ?
                                                                post.colors.map((color, i) => {
                                                                    return (
                                                                        <Icon key={i}
                                                                              name="fontawesome|circle"
                                                                              style={part.paddingRight}
                                                                              size={12}
                                                                              color={'#' + color}/>
                                                                    );
                                                                })
                                                                :
                                                                <Text></Text>

                                                        }
                                                    </View>
                                                    </Body>
                                                    <TouchableOpacity
                                                        transparent
                                                        onPress={
                                                            () => this.setCommentModalMenu(true)
                                                        }
                                                    >
                                                        <Icon name="materialCommunity|dots-horizontal"
                                                              color={color.icon}
                                                              size={size.iconGiant}
                                                        />
                                                    </TouchableOpacity>
                                                </Left>
                                            )
                                            :
                                            (
                                                <View/>
                                            )
                                    }
                                </CardItem>
                                <CardItem style={[part.cardHeader, part.noPaddingTopBottom]}>
                                    <Item style={part.noBorder}>
                                        <Text style={part.titleInImage}>
                                            {post.title}
                                        </Text>
                                    </Item>
                                </CardItem>
                                <CardItem style={[part.cardHeader, part.noPaddingBottom]}>
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
                                <CardItem footer style={part.noPaddingTopBottom}>
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
                                        <Right>
                                            <Button transparent>
                                                <Icon
                                                    name={featureIcon}
                                                    size={size.iconBig}
                                                    color={colorFeatureIcon}
                                                    style={{marginRight: 3}}
                                                />
                                            </Button>
                                        </Right>
                                    </Left>

                                </CardItem>
                                <View>
                                    {
                                        this.state.listComment.map((item, i) => {
                                            let {likedComment} = this.state;
                                            let iconLikeComment = likedComment[i] ? color.main : color.icon;
                                            let likedIcon = likedComment[i] ? 'fontawesome|heart' : 'fontawesome|heart-o';
                                            return (
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

                                                            {item.commenter.username === this.props.user.username ?
                                                            (
                                                            <Text
                                                            style={[part.describeLightGray, part.paddingTLB, part.marginLeftFar]}
                                                            onPress={() => this.deleteComment(item.id, this.props.token, i)}
                                                            >
                                                            Xoá
                                                            </Text>
                                                            ) : (<TouchableOpacity/>)
                                                            }
                                                        </View>
                                                        </Body>
                                                        <TouchableOpacity transparent onPress={() => {
                                                            this.likeComment(item.id, this.props.user.id, i)
                                                        }}>
                                                            <Icon name={likedIcon}
                                                                  color={iconLikeComment}
                                                                  size={size.iconNormal}
                                                                  style={[part.paddingRight, part.marginTop]}
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                </CardItem>
                                            )
                                        })
                                    }
                                </View>
                            </View>
                    }

                </ParallaxScrollView>
                <Modal
                    presentationStyle="overFullScreen"
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalMenu}
                >
                    <View
                        style={part.wrapperModalComment}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={[part.modalMenu, part.paddingLine]}>
                            <List>
                                {/*<ListItem style={[part.noBorder, part.noPaddingTopBottom]}>*/}
                                {/*<TouchableOpacity style={part.backgroundNone}>*/}
                                {/*<Text style={part.titleMenuModal}>Đánh dấu là nổi bật</Text>*/}
                                {/*</TouchableOpacity>*/}
                                {/*</ListItem>*/}
                                <ListItem style={[part.noBorder, part.noPaddingTopBottom]}>
                                    <TouchableOpacity
                                        style={part.backgroundNone}
                                        onPress={
                                            () => {
                                                this.alertReport();
                                            }
                                        }
                                    >
                                        <Text style={part.titleMenuModal}>Báo cáo...</Text>
                                    </TouchableOpacity>
                                </ListItem>
                                <ListItem style={[part.noBorder, part.noPaddingTopBottom]}>
                                    <TouchableOpacity
                                        style={part.backgroundNone}
                                        onPress={
                                            () => {
                                                this.props.alertHiddenPost(this.props.item, this.props.key);
                                            }
                                        }
                                    >
                                        <Text style={part.titleMenuModal}>Ẩn bài viết...</Text>
                                    </TouchableOpacity>
                                </ListItem>

                            </List>
                        </View>
                    </View>
                </Modal>
                <KeyboardAvoidingView behavior={'position'}>
                    <CardItem style={part.cardBottom}>
                        <Left>
                            <Thumbnail small
                                       style={part.avatarUserSmall}
                                       source={{uri: this.props.user.avatar_url}}/>
                            <Body>
                            <Item rounded>
                                <Input
                                    onSubmit={Keyboard.dismiss}
                                    onSubmitEditing={
                                        this.state.comment_content == ''
                                            ?
                                            Keyboard.dismiss
                                            :
                                            () => {
                                                this.commentPost(params.product_id, this.props.token, this.state);
                                            }
                                    }
                                    placeholder='Viết bình luận'
                                    autoCorrect={false}
                                    returnKeyType={'send'}
                                    placeholderTextColor={color.icon}
                                    style={part.inputTheme01}
                                    onChangeText={
                                        (text) => {
                                            this.setState({comment_content: text})
                                        }
                                    }
                                    value={this.state.comment_content}
                                />
                                {/*<TouchableOpacity>*/}
                                {/*<Icon active name='fontawesome|camera-retro'*/}
                                {/*size={size.iconBig}*/}
                                {/*color={color.icon}*/}
                                {/*style={{paddingRight: 15}}*/}
                                {/*/>*/}
                                {/*</TouchableOpacity>*/}
                            </Item>

                            </Body>
                            <TouchableOpacity
                                onPress={
                                    this.state.comment_content == ''
                                        ?
                                        Keyboard.dismiss
                                        :
                                        (
                                            Keyboard.dismiss,
                                                () => {
                                                    this.commentPost(params.product_id, this.props.token, this.state);
                                                }
                                        )


                                }

                            >
                                <Icon
                                    active name={commentIcon}
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
        post: state.infoAboutPost.post,
        comments: state.infoAboutPost.comments,
        isLoading: state.infoAboutPost.isLoading,
        statusPostComment: state.infoAboutPost.statusPostComment,
        idComment: state.infoAboutPost.idComment,
        likers: state.infoAboutPost.likers,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        infoAboutPostAction: bindActionCreators(infoAboutPostAction, dispatch),
        likePostAction: bindActionCreators(likePostAction, dispatch),
        reportAction: bindActionCreators(reportAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InfoAboutPostContainer);