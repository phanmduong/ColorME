import React, {Component} from 'react';
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Modal,
    PanResponder,
    ScrollView,
    TouchableOpacity,
    View
} from 'react-native';
import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Input,
    Item,
    Left,
    List,
    ListItem,
    Right,
    Spinner,
    Text,
    Thumbnail,
} from 'native-base';
import Video from 'react-native-video';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import FastImage from 'react-native-fast-image'
import * as getFullInfoAboutOnePostAction from '../../actions/inforAboutPostAction'
import * as reportAction from '../../actions/reportAction';
import * as likePostAction from '../../actions/likePostAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalComment: false,
            modalMenu: false,
            like_counts: 0,
            product_id: '',
            listCommentInModal: [],
            comment_content: '',
            parent_id: 0,
            lastPress: 0,
            likedComment: [],
            idComment: 0,
            width: 0,
            height: 0,
        }
    }


    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
    }

    componentWillReceiveProps(nextProps) {
        let likedComment = this.state.likedComment;
        if (nextProps.isLoadingComment !== this.props.isLoadingComment && this.props.statusPostComment !== nextProps.props) {
            let listComment = nextProps.comments;
            let item = false;
            let i = 0;
            while (i < nextProps.comments.length) {
                let likers = listComment[i].likers.filter((liker) => {
                    return liker.name == nextProps.user.name;
                })
                if (likers && likers.length == 0) {
                    item = false;
                } else {
                    item = true;
                }
                likedComment.push(item);
                i++;
            }
            this.setState({
                listCommentInModal: nextProps.comments,
                likedComment: likedComment,
            });
        }
    }

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({
                modalComment: false,
                modalMenu: false,
            });
        }
    }

    setCommentModalComment(visible) {
        this.setState({modalComment: visible});
    }

    setCommentModalMenu(visible) {
        this.setState({modalMenu: visible});
    }

    openCommentModal(product_id) {
        this.props.getFullInfoAboutOnePostAction.getCommentOnePost(product_id);
        this.setCommentModalComment(true);
        this.setState({
            like_counts: this.props.item.likes_count,
            listCommentInModal: this.props.comments,
        })
    }

    likeComment(product_id, user_id, index) {
        let likedComment = this.state.likedComment;
        this.props.likePostAction.likeComment(product_id, user_id);
        likedComment[index] = !likedComment[index];
        this.setState({likedComment: likedComment})
    }

    openPostLiker(product_id) {
        this.setCommentModalComment(false);
        this.props.navigation.navigate('PostLiker', {product_id: product_id});
    }

    alertReport() {
        Alert.alert(
            'Báo cáo',
            'Bạn thực sự muốn báo cáo bài viết này?',
            [
                {text: 'Xác nhận', onPress: () => this.reportPost(this.props.item.id, this.props.token)},
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

    commentPost(product_id, token, value) {
        this.props.getFullInfoAboutOnePostAction.postCommentOnePost(product_id, token, value);
        let listCommentInModal = this.state.listCommentInModal;
        let {user} = this.props;
        let arr = {
            content: this.state.comment_content,
            id: this.props.idComment,
            parent_id: 0,
            commenter: {
                username: user.username,
                avatar_url: user.avatar_url,
                name: user.name,
            },
            created_at: 'Vừa xong'
        };
        listCommentInModal.push(arr);
        this.setState({listCommentInModal: listCommentInModal, comment_content: ''})
    }
    deleteComment(product_id, token, index) {
        let listComment = this.state.listCommentInModal;
        this.props.getFullInfoAboutOnePostAction.deleteComment(product_id, token);
        listComment.splice(index, 1);
        this.setState({listCommentInModal: listComment})
    }

    render() {
        const {item, arrayLike, likeCount, colorIcon, likedIcon, user, featureIcon, colorFeatureIcon} = this.props;
        const {navigate} = this.props.navigation;
        let colorCommentIcon = this.state.comment_content == '' ? color.icon : color.main;
        let commentIcon = this.state.comment_content == '' ? 'fontawesome|comment-o' : 'fontawesome|paper-plane';
        return (
            <View key={item.key} style={part.card}>
                <CardItem header style={part.cardHeader}>
                    <Left>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => navigate('UserInNewFeed', {username: item.author.username})}>
                            <Thumbnail circle small
                                       source={{uri: item.author.avatar_url}}/>
                        </TouchableOpacity>
                        <Body>
                        <Text
                            onPress={() => navigate('UserInNewFeed', {username: item.author.username})}
                            style={part.titleSmallBlue}>
                            {item.author.name}
                        </Text>
                        <Text
                            style={part.describeItalicDark}>
                            {item.created_at}
                        </Text>
                        </Body>

                        <TouchableOpacity
                            transparent
                            onPress={
                                () => this.setCommentModalMenu(true)
                            }
                        >
                            <Icon name="materialCommunity|dots-horizontal"
                                  color={color.icon}
                                  size={size.icon}
                                  style={part.paddingRight}
                            />
                        </TouchableOpacity>
                    </Left>
                </CardItem>
                {/*PHOTO*/}
                <TouchableOpacity
                    activeOpacity={0.8}
                    style={part.card}
                    onPress={() =>
                        navigate('ThePostInNewFeed',
                            item.group
                                ?
                                {
                                    product_id: item.id,
                                    group_name: item.group.name,
                                    group_link: item.group.link,
                                }
                                :
                                {
                                    product_id: item.id,
                                }
                        )}>
                    <View>
                        {
                            item.url.indexOf('.mp4') === -1
                                ?
                                <FastImage
                                    resizeMode={'cover'}
                                    source={{
                                        uri: item.image_url,
                                        headers: {Authorization: 'Đang tải..'},
                                    }}
                                    style={[part.image]}
                                />
                                :
                                <Video
                                    repeat
                                    rate={1.0}    // 0 is paused, 1 is normal.
                                    volume={1.0}  // 0 is muted, 1 is normal.
                                    muted={true}  // Mutes the audio entirely.
                                    paused={false}
                                    resizeMode={'cover'}
                                    source={{uri: item.url}}
                                    style={[part.video]}
                                />
                        }
                    </View>
                </TouchableOpacity>
                {/*LIKE COMMENT VIEWS*/}
                <CardItem style={part.cardButton}>
                    <Left>
                        <Button
                            transparent style={part.paddingRight}
                            onPress={arrayLike[item.key] ? () => this.props.unlikePost(item.id, this.props.token, item.key) : () => this.props.likePost(item.id, this.props.token, item.key)}
                        >
                            <Icon name={likedIcon} size={size.iconBig}
                                  color={colorIcon}/>
                            <Text
                                style={[part.describeGray, part.paddingLeft]}>{likeCount[item.key]}</Text>
                        </Button>
                        <Button transparent style={part.paddingRight}
                                onPress={
                                    () => {
                                        this.setState({product_id: item.id});
                                        this.openCommentModal(item.id);
                                    }
                                }
                        >
                            <Icon name="fontawesome|comment-o" size={size.iconBig}
                                  color={color.icon}/>
                            <Text
                                style={[part.describeGray, part.paddingLeft]}>{item.comments_count}</Text>
                        </Button>
                        <Button transparent style={part.paddingRight}>
                            <Icon name="fontawesome|bookmark-o" size={size.iconBig}
                                  color={color.icon}/>
                            <Text
                                style={[part.describeGray, part.paddingLeft]}>{item.views_count}</Text>
                        </Button>
                    </Left>
                    <Right>
                        <Button transparent>
                            <Icon name={featureIcon} size={size.iconBig}
                                  color={colorFeatureIcon}/>
                        </Button>
                    </Right>
                </CardItem>
                <CardItem footer style={[part.cardFooter]}>
                    <View stle={part.textInImage}>
                        <Text
                            style={part.titleInImage}
                            onPress={() =>
                                navigate('ThePostInNewFeed',
                                    item.group
                                        ?
                                        {
                                            product_id: item.id,
                                            group_name: item.group.name,
                                            group_link: item.group.link,
                                        }
                                        :
                                        {
                                            product_id: item.id,
                                        }
                                )}>
                            {item.title}
                        </Text>
                        {
                            item.description
                                ?
                                <Text
                                    style={part.describeInImage}
                                >
                                    {item.description}
                                </Text>
                                :
                                <View/>

                        }

                    </View>
                </CardItem>
                <Modal
                    presentationStyle="overFullScreen"
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalComment}
                >
                    <View
                        style={part.wrapperModalComment}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={part.modalComment}>
                            <View>
                                <CardItem footer style={part.cardTopInModal}>
                                    <Left>
                                        <Button
                                            onPress={
                                                this.state.like_counts == 0
                                                    ?
                                                    () => {
                                                    }
                                                    :
                                                    () => this.openPostLiker(this.state.product_id)
                                            }
                                            transparent style={part.paddingRight}
                                        >
                                            <Icon name="fontawesome|heart" size={12}
                                                  color={color.main}/>
                                            <Text
                                                style={[part.describeGray, part.paddingLeft]}
                                            >
                                                {this.state.like_counts}
                                            </Text>
                                        </Button>
                                    </Left>
                                    <Right>
                                        <Button
                                            transparent
                                            onPress={() => this.setCommentModalComment(false)}
                                        >
                                            <Icon name="evil|close" size={size.iconBig}
                                                  color={color.gray}/>

                                        </Button>

                                    </Right>
                                </CardItem>
                                <ScrollView style={part.wrapperCommentInModal}>
                                    {
                                        this.props.isLoadingComment
                                            ?
                                            <View
                                                style={{
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
                                                    this.state.listCommentInModal.map((item, i) => {
                                                        let {likedComment} = this.state;
                                                        let iconLikeComment = likedComment[i] ? color.main : color.icon;
                                                        let likedIcon = likedComment[i] ? 'fontawesome|heart' : 'fontawesome|heart-o';
                                                        return (
                                                            <CardItem style={[part.cardHeader, {paddingBottom: 0}]}>
                                                                <View
                                                                    style={item.parent_id === 0 ? part.cardCmt : part.cardRepCmt}>
                                                                    <TouchableOpacity
                                                                        style={part.paddingTRB}
                                                                        onPress={() => {
                                                                            this.setCommentModalComment(false);
                                                                            navigate('UserInNewFeed', {username: item.commenter.username});
                                                                        }
                                                                        }

                                                                    >
                                                                        <FastImage
                                                                            style={part.avatarUserSmall}
                                                                            source={{uri: item.commenter.avatar_url}}/>
                                                                    </TouchableOpacity>
                                                                    <Body>
                                                                    <Text
                                                                        onPress={() => {
                                                                            this.setCommentModalComment(false);
                                                                            navigate('UserInNewFeed', {username: item.commenter.username});
                                                                        }
                                                                        }
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
                                                                              size={size.iconBig}
                                                                              style={part.paddingRight}
                                                                        />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </CardItem>
                                                        )
                                                    })}
                                            </View>
                                    }
                                </ScrollView>
                                <KeyboardAvoidingView
                                    behavior={'position'}
                                    keyboardVerticalOffset={200 - size.hei * 0.15}
                                    // NEED HEIGHT KEYBOARD
                                >
                                    <CardItem style={part.cardBottomInModal}>
                                        <Left>
                                            <Thumbnail
                                                style={part.avatarUserSmall}
                                                source={{uri: user.avatar_url}}/>
                                            <Body>
                                            <Item rounded>
                                                <Input
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
                                                        () => {
                                                        }
                                                        :
                                                        () => this.commentPost(this.props.item.id, this.props.token, this.state)
                                                }
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
                            </View>
                        </View>
                    </View>
                </Modal>
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

                            </List>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        token: state.login.token,
        user: state.login.user,
        likers: state.getFullInfoAboutOnePost.likers,
        isLoadingReportPost: state.report.isLoading,
        reportPostResult: state.report.reportPostResult,
        comments: state.getFullInfoAboutOnePost.comments,
        isLoadingComment: state.getFullInfoAboutOnePost.isLoading,
        idComment: state.getFullInfoAboutOnePost.idComment,
        statusPostComment: state.getFullInfoAboutOnePost.statusPostComment,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFullInfoAboutOnePostAction: bindActionCreators(getFullInfoAboutOnePostAction, dispatch),
        reportAction: bindActionCreators(reportAction, dispatch),
        likePostAction: bindActionCreators(likePostAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);