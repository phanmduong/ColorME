import React, {Component} from 'react';
import {
    FlatList, TouchableOpacity, StatusBar, View, RefreshControl, Modal, PanResponder,
    KeyboardAvoidingView,
} from 'react-native';
import {
    Container, Header, Content, Card, CardItem, Item, Picker, Input,
    Thumbnail, Text, Left, Body, Right, Spinner, Button
} from 'native-base';
import Video from 'react-native-video';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as getNewFeedAction from '../../actions/newFeedAction';
import * as likePostAction from '../../actions/likePostAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FastImage from 'react-native-fast-image';
import ListView from './ListView';

class newFeedComponent extends Component {
    constructor() {
        super();
        this.state = {
            product_id: '',
            like_in_modal: '',
            grid: true,
            page_id: 2,
            typeView: '',
            arrayLike: [],
            likeCount: [],
            listPost: [],
            clicked: '',
            modalVisible: false,
        }
    }

    componentWillMount() {
        this.props.getNewFeedAction.getNewFeed(this.state.typeView, 1);
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
    }

    setCommentModalVisible(visible) {
        this.setState({modalVisible: visible});
        this.props.getFullInfoAboutOnePostAction.getCommentOnePost(this.state.product_id);
    }

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({modalVisible: false});
        }
    }

    onValueChange(value: string) {
        this.setState({
            typeView: value,
        });
        // this.props.getNewFeedAction.getNewFeed(this.state.typeView, 1);
    }

    viewList() {
        let grid = this.state.grid;
        grid = false;
        this.setState({grid: grid});
    }

    viewGrid() {
        let grid = this.state.grid;
        grid = true;
        this.setState({grid: grid});
    }

    // setup
    componentWillReceiveProps(nextProps) {
        if ((nextProps.isLoading !== this.props.isLoading && !nextProps.isLoading) || (nextProps.isRefreshing !== this.props.isRefreshing && !nextProps.isRefreshing)) {
            let arr = this.state.arrayLike;
            let listPost = this.state.listPost;
            let count = this.state.likeCount;
            let post = nextProps.products;
            let item = false;
            let i = this.props.products.length
            while (i < post.length) {
                let key = {key: i}
                let arr1 = Object.assign(post[i], key)
                let likers = post[i].likers.filter((liker) => {
                    return liker.username === nextProps.user.username
                });
                if (likers.length === 0) {
                    item = false;
                } else {
                    item = true;
                }
                count.push(post[i].likes_count);
                arr.push(item);
                listPost.push(arr1)
                i++;
            }
            this.setState({likeCount: count, arrayLike: arr})
        }
    }


    // Function
    getMoreNewFeed() {
        let page_id = this.state.page_id + 1;
        this.setState({page_id: page_id});
        this.props.getNewFeedAction.getNewFeed(this.state.typeView, this.state.page_id)
    }

    likePost(product_id, token, index) {
        let arrayLike = this.state.arrayLike;
        let likeCount = this.state.likeCount;
        if (arrayLike[index] == false) {
            this.props.likePostAction.likePost(product_id, token);
            likeCount[index]++;
            arrayLike[index] = !arrayLike[index]
        }
        this.setState({arrayLike: arrayLike});
        this.setState({likeCount: likeCount});
    }

    unlikePost(product_id, token, index) {
        let arrayLike = this.state.arrayLike;
        let likeCount = this.state.likeCount;
        if (arrayLike[index] == true) {
            this.props.likePostAction.unlikePost(product_id, token);
            likeCount[index]--;
            arrayLike[index] = !arrayLike[index]
        }
        this.setState({arrayLike: arrayLike});
        this.setState({likeCount: likeCount});
    }

    render() {
        console.log('render');
        console.log(this.state);
        console.log(this.props);

        const {navigate} = this.props.navigation;
        return (
            <Container style={part.wrapperContainer}>
                <StatusBar
                    barStyle="light-content"
                />
                {/*VIEW TYPE*/}
                <View>
                    <Item style={[part.itemTab, part.shadow]}>
                        <Left style={{flexDirection: 'row'}}>
                            <Picker
                                itemStyle={[part.noBorder, part.noMarginLeft, {paddingLeft: 20}]}
                                itemTextStyle={part.titleSmallDarkGrayBold}
                                renderHeader={backAction =>
                                    <Header
                                        iosBarStyle='light-content'
                                        style={{backgroundColor: color.navTabBar}}>
                                        <Left>
                                            <TouchableOpacity onPress={backAction}>
                                                <Icon name="entypo|chevron-thin-left" color={color.navTitle}
                                                      size={size.iconBig}/>
                                            </TouchableOpacity>
                                        </Left>
                                        <Body style={{flex: 3}}>
                                        <Text style={part.titleNormalLight}>Chọn kiểu xem</Text>
                                        </Body>
                                        <Right/>
                                    </Header>}
                                mode="dropdown"
                                textStyle={part.titleSmallDarkGrayBold}
                                selectedValue={this.state.typeView}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Item label="Mới nhất" value=""/>
                                <Item label="Hôm nay" value="1"/>
                                <Item label="7 ngày qua" value="7"/>
                                <Item label="30 ngày qua" value="30"/>
                            </Picker>
                        </Left>
                        <Right style={part.rightTab}>
                            <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                                <Icon name="material|view-list"
                                      color={this.state.grid ? color.icon : color.darkGray}
                                      size={size.icon}
                                      style={part.paddingIcon}
                                      onPress={() => this.viewList()}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                                <Icon name="material|view-module"
                                      color={this.state.grid ? color.darkGray : color.icon}
                                      size={size.icon}
                                      style={part.paddingIcon}
                                      onPress={() => this.viewGrid()}
                                />
                            </TouchableOpacity>
                        </Right>
                    </Item>
                </View>

                <View
                    style={[part.padding, part.marginTop]}

                >
                    {
                        (this.state.grid)
                            ?
                            (
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    onEndReachedThreshold={5}
                                    onEndReached={() => {
                                    }}
                                    data={this.state.listPost}


                                    refreshControl={
                                        <RefreshControl
                                            refreshing={this.props.isRefreshing}
                                            onRefresh={() => {
                                                this.props.getNewFeedAction.refreshNewFeed(this.state.typeView, 1)
                                            }}
                                        />
                                    }
                                    renderItem={({item}) =>
                                        <View
                                            style={(item.url.indexOf('.mp4') === -1 ) ? part.wrapperGridImage : part.wrapperGridVideo}>
                                            <TouchableOpacity
                                                style={part.shadow}
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
                                                    )}
                                            >

                                                {
                                                    (item.url.indexOf('.mp4') === -1 ) ?
                                                        <FastImage
                                                            resizeMode={'cover'}
                                                            style={[part.imageInGrid, part.shadow]}
                                                            source={{uri: item.thumb_url}}
                                                        />
                                                        :
                                                        <Video
                                                            repeat
                                                            rate={1.0}    // 0 is paused, 1 is normal.
                                                            volume={1.0}  // 0 is muted, 1 is normal.
                                                            muted={true}  // Mutes the audio entirely.
                                                            paused={false}
                                                            resizeMode={'cover'}
                                                            style={[part.videoInGrid, part.shadow]}
                                                            source={{uri: item.url}}
                                                        />
                                                }
                                            </TouchableOpacity>
                                        </View>
                                    }/>
                            )
                            :
                            (
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    onEndReachedThreshold={5}
                                    onEndReached={() => {
                                    }}
                                    data={this.state.listPost}
                                    refreshControl={
                                        <RefreshControl
                                            refreshing={this.props.isRefreshing}
                                            onRefresh={() => {
                                                this.props.getNewFeedAction.refreshNewFeed(this.state.typeView, 1);
                                            }}
                                        />
                                    }
                                    renderItem={({item}) => {
                                        let {arrayLike} = this.state;
                                        let {likeCount} = this.state;
                                        let colorIcon = arrayLike[item.key] ? color.main : color.icon;
                                        return (
                                            <ListView
                                                arrayLike={this.state.arrayLike}
                                                likeCount={this.state.likeCount}
                                                item={item}
                                                colorIcon={colorIcon}
                                            />
                                        )
                                    }}

                                    />
                                    )
                                    }

                </View>
                {
                    this.props.isLoading
                        ?
                        <View style={[part.wrapperContainer, {height: 30, marginBottom: -30}]}>
                            <Spinner color={color.gray}/>
                        </View>
                        :
                        <View/>
                }
                {/*MODAL*/}
                <Modal
                    presentationStyle="overFullScreen"
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert("Modal has been closed.")
                    }}
                >
                    <View style={part.wrapperModalComment}
                          {...this.panResponder.panHandlers}
                    >
                        <View style={part.modalComment}>
                            <KeyboardAvoidingView behavior={'position'}>
                                <CardItem footer style={part.cardTopInModal}>
                                    <Left>
                                        <Button
                                            transparent style={part.paddingRight}
                                        >
                                            <Icon name="fontawesome|heart" size={12}
                                                  color={color.main}/>
                                            <Text
                                                style={[part.describeGray, part.paddingLeft]}>{this.state.like_in_modal}</Text>
                                        </Button>
                                    </Left>
                                </CardItem>


                                <View style={part.wrapperCommentInModal}>

                                </View>


                                <CardItem style={part.cardBottomInModal}>
                                    <Left>
                                        <Thumbnail
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
                        </View>
                    </View>
                </Modal>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.getNewFeed.products,
        user: state.login.user,
        token: state.login.token,
        isLoading: state.getNewFeed.isLoading,
        isRefreshing: state.getNewFeed.isRefreshing
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNewFeedAction: bindActionCreators(getNewFeedAction, dispatch),
        likePostAction: bindActionCreators(likePostAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newFeedComponent);