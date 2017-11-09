import React, {Component} from 'react';
import {
    FlatList,
    StatusBar,
    RefreshControl,
    Platform,
    TouchableOpacity,
    View,
    AsyncStorage,
    Alert,
    Image,
    Animated
} from 'react-native';
import {
    Button, Card, CardItem, Container, Content, Header, Input, Item, Left, Picker,
    Right, Spinner, Text, Thumbnail,Body
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as getNewFeedAction from '../../actions/newFeedAction';
import * as likePostAction from '../../actions/likePostAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ListView from './ListView';
import GridView from './GridView';
import _ from 'lodash'
import LinearGradient from 'react-native-linear-gradient';

class NewFeedContainer extends Component {
    constructor() {
        super();
        this.state = {
            user_avatar_url: '',
            product_id: '',
            like_in_modal: '',
            grid: true,
            page_id: 2,
            typeView: '7',
            arrayLike: [],
            likeCount: [],
            listPost: [],
            isLoadingList: false,
            clicked: '',
            deleteId: null,
            animated : [],
        };
        this.isFirst = true;
        this.likePost = this.likePost.bind(this);
        this.unlikePost = this.unlikePost.bind(this);
        this.alertHiddenPost = this.alertHiddenPost.bind(this);
        this.hiddenPost = this.hiddenPost.bind(this);
        this.animateIn = this.animateIn.bind(this);
        this.animateOut = this.animateOut.bind(this);
    }

    componentWillMount() {
        this.props.getNewFeedAction.getNewFeed(this.state.typeView, 1);
    }

    textTopShow() {
        switch (this.state.typeView) {
            case '':
                return (
                    'Mới nhất trong ngày'
                );
            case '1':
                return (
                    'Đứng đầu hôm nay'
                );
            case '7':
                return (
                    'Đứng đầu tuần qua'
                );
            case '30':
                return (
                    'Đứng đầu tháng này'
                );

        }
    }

    refreshFlatList = (deleteId) => {
        this.setState({deleteId: deleteId})
    };

    onValueChange(value: string) {
        setTimeout(() => {
            this.setState({isLoadingList: false})
        }, 1000);
        this.props.getNewFeedAction.changeTheView();
        this.setState({listPost: [], arrayLike: [], likeCount: [], isLoadingList: true, page_id: 2, typeView: value});
        this.props.getNewFeedAction.getNewFeed(value, 1);
    }

    viewList() {
        setTimeout(() => {
            this.setState({isLoadingList: false})
        }, 100);
        this.setState({grid: false, isLoadingList: true, listPost: this.props.products});
    }

    viewGrid() {
        setTimeout(() => {
            this.setState({isLoadingList: false})
        }, 250);
        this.setState({
            grid: true,
            isLoadingList: true, listPost: this.groupPosts(this.props.products)
        });
    }

    alertHiddenPost(item, key) {
        Alert.alert(
            'Báo cáo',
            'Bạn thực sự muốn ẩn bài viết này?',
            [
                {text: 'Xác nhận', onPress: () => this.hiddenPost(item, key)},
                {text: 'Hủy'},
            ],
            {cancelable: false}
        )
    }

    async hiddenPost(item, key) {
        try {
            let value = await AsyncStorage.getItem('@idPost');
            if (value == null) {
                let array = [];
                array.push(item.id);
                let arrayString = JSON.stringify(array);
                await  AsyncStorage.setItem('@idPost', arrayString)
            } else {
                let array = JSON.parse(value);
                array.push(item.id);
                let arrayString = JSON.stringify(array);
                await  AsyncStorage.setItem('@idPost', arrayString);
            }
            let listPost = this.state.listPost;
            listPost.splice(key, 1);
            this.setState({listPost: listPost});
            this.props.parentFlatList.refreshFlatList(key)

        } catch (error) {
        }
    }
animateIn(index){
        let animated = this.state.animated;
        Animated.timing(animated[index], {
            toValue : 0.95,
            duration : 500
        }).start();
        this.setState({animated: animated});
}
animateOut(index) {
    let animated = this.state.animated;
    Animated.timing(animated[index], {
        toValue : 1,
        duration : 500
    }).start();
    this.setState({animated : animated})
}
// setup
    componentWillReceiveProps(nextProps) {
        this.isFirst = true;
        if ((nextProps.isLoading !== this.props.isLoading && !nextProps.isLoading) || (nextProps.isRefreshing !== this.props.isRefreshing && !nextProps.isRefreshing)) {
            let arr = this.state.arrayLike;
            let listPost = this.state.listPost;
            let count = this.state.likeCount;
            let post = nextProps.products;
            let item = false;
            let animated = this.state.animated;
            let j = this.props.products.length;
            while (j < post.length) {
                let animate = new Animated.Value(1);
                let key = {key: j};
                let arr1 = Object.assign(post[j], key);
                let likers = post[j].likers.filter((liker) => {
                    return liker.username === nextProps.user.username
                });
                if (likers.length == 0) {
                    item = false;
                } else {
                    item = true;
                }
                count.push(post[j].likes_count);
                arr.push(item);
                animated.push(animate);
                listPost.push(arr1);
                j++;
            }
            if (this.state.grid) {
                this.setState({listPost: this.groupPosts(nextProps.products), animated : animated});
            }
            else {
                this.setState({
                    likeCount: count,
                    arrayLike: arr,
                    listPost: listPost,
                    animated : animated
                });
            }
        }
    }

// Function
    getMoreNewFeed() {
        if (this.props.isLoading != undefined && this.props.isLoading != null && !this.props.isLoading) {
            let page_id = this.state.page_id + 1;
            this.setState({page_id: page_id});
            this.props.getNewFeedAction.getNewFeed(this.state.typeView, this.state.page_id);
        }
    }

    likePost(product_id, token, index) {
        let arrayLike = this.state.arrayLike;
        let likeCount = this.state.likeCount;
        if (arrayLike[index] == false) {
            this.props.likePostAction.likePost(product_id, token);
            likeCount[index]++;
            arrayLike[index] = !arrayLike[index];
        }
        this.setState({arrayLike: arrayLike, likeCount : likeCount});

    }

    unlikePost(product_id, token, index) {
        let arrayLike = this.state.arrayLike;
        let likeCount = this.state.likeCount;
        if (arrayLike[index] == true) {
            this.props.likePostAction.unlikePost(product_id, token);
            likeCount[index]--;
            arrayLike[index] = !arrayLike[index];
        }
        this.setState({arrayLike: arrayLike, likeCount : likeCount});

    }

    loadingLoadMore() {
        if (this.props.isLoading && this.state.listPost.length >= 20) {
            return (
                <View style={[part.wrapperContainer, {height: 80}]}>
                    <Spinner color={color.gray}/>
                </View>
            )
        } else {
            return (
                <View/>
            );
        }
    }

    groupPosts(posts) {
        posts = posts.map((post, index) => {
            return {
                ...post,
                key: index
            }
        });
        let postsGrid = posts.filter(({value, key}) => key > 0);
        postsGrid = _.groupBy(postsGrid, ({element, key}) => {
            return Math.floor((key - 1) / 3);
        });
        postsGrid = [posts[0], ..._.toArray(postsGrid)];
        return postsGrid;
    }

    render() {
        const {navigate} = this.props.navigation;
        console.log(AsyncStorage.getItem('@idPost'));
        let iconGird = this.state.grid ? "material|view-module" : "material|view-list";
        return (
            <Container style={part.wrapperContainer}>
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
                {
                    Platform.OS === 'ios'
                        ?
                        <Header
                            style={[part.navTopNewFeed, part.noPaddingTop, part.noPadding]}
                        >
                            <Left style={{flexDirection: 'row'}}>
                                <Left>
                                    <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                                        <Icon name={iconGird}
                                              color={color.darkGray}
                                              size={size.iconNewFeed}
                                              style={part.paddingLeft}
                                              onPress={
                                                  () => {
                                                      !this.state.grid
                                                          ?
                                                          this.viewGrid()
                                                          :
                                                          this.viewList()

                                                  }
                                              }
                                        />
                                    </TouchableOpacity>
                                </Left>
                                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                                    <Picker
                                        itemStyle={[part.noBorder, part.noMarginLeft, {paddingLeft: 20}]}
                                        itemTextStyle={part.titleSmallDarkGrayBold}
                                        renderHeader={backAction =>
                                            <Header
                                                iosBarStyle='dark-content'
                                                style={[part.noBorder, {backgroundColor: color.backGround}]}
                                            >
                                                <Left>
                                                    <TouchableOpacity onPress={backAction}>
                                                        <Icon name="entypo|chevron-thin-left" color={color.text}
                                                              size={size.iconBig}/>
                                                    </TouchableOpacity>
                                                </Left>
                                                <Body style={{flex: 3}}>
                                                <Text style={part.titleNormalDarkGray}>Chọn kiểu xem</Text>
                                                </Body>
                                                <Right/>
                                            </Header>}
                                        mode="dropdown"
                                        textStyle={part.titleNormalDarkGray}
                                        selectedValue={this.state.typeView}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >
                                        <Item label="Mới nhất " value=""/>
                                        <Item label="Hôm nay" value="1"/>
                                        <Item label="Tuần qua" value="7"/>
                                        <Item label="Tháng qua" value="30"/>
                                    </Picker>
                                    <Icon name="entypo|triangle-down"
                                          color={color.darkGray}
                                          size={size.iconBig * 2 / 3}
                                          style={{marginLeft: -12, marginTop: 3}}
                                    />
                                </View>
                                <Right style={part.paddingRight}>
                                    <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
                                        <Icon
                                            name="materialCommunity|menu"
                                            color={color.darkGray}
                                            size={size.iconNewFeed}
                                        />
                                    </TouchableOpacity>
                                </Right>
                            </Left>
                        </Header>
                        :
                        <Header
                            style={[part.navTopNewFeed, part.noPaddingTop, part.noPadding]}
                        >
                                <Left>
                                    <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                                        <Icon name={iconGird}
                                              color={color.darkGray}
                                              size={size.iconNewFeed}
                                              style={part.paddingLeft}
                                              onPress={
                                                  () => {
                                                      !this.state.grid
                                                          ?
                                                          this.viewGrid()
                                                          :
                                                          this.viewList()

                                                  }
                                              }
                                        />
                                    </TouchableOpacity>
                                </Left>
                                <Body style={{alignItems: 'center'}}>
                                <Picker
                                    itemStyle={[part.noBorder, part.noMarginLeft, {paddingLeft: 20}]}
                                    itemTextStyle={part.titleSmallDarkGrayBold}
                                    style={{width:120, alignItems: 'center', marginLeft: 70}}
                                    textStyle={part.titleNormalDarkGray}
                                    headerStyle={part.titleNormalDarkGray}
                                    selectedValue={this.state.typeView}
                                    onValueChange={this.onValueChange.bind(this)}
                                    mode={'dropdown'}
                                >
                                    <Item label="Mới nhất " value=""/>
                                    <Item label="Hôm nay" value="1"/>
                                    <Item label="Tuần qua" value="7"/>
                                    <Item label="Tháng qua" value="30"/>
                                </Picker>
                                </Body>
                                <Right style={part.paddingRight}>
                                    <TouchableOpacity onPress={() => navigate('DrawerOpen')}>
                                        <Icon
                                            name="materialCommunity|menu"
                                            color={color.darkGray}
                                            size={size.iconNewFeed}
                                        />
                                    </TouchableOpacity>
                                </Right>
                        </Header>
                }
                {
                    (this.state.grid)
                        ?
                        (
                            this.state.isLoadingList
                                ? (
                                    <View style={[part.wrapperContainer, {flex: 1, marginBottom: -30}]}>
                                        <Spinner color={color.gray}/>
                                    </View>
                                ) : (
                                this.state.listPost[0]
                                &&
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    onEndReachedThreshold={5}
                                    onEndReached={() => {
                                        this.getMoreNewFeed()
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
                                    renderItem={({item}) => {
                                        let {animated}= this.state;
                                        if (item == this.state.listPost[0]) {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={[part.featureWrapper, part.marginTop]}
                                                    onPressIn = {() => this.animateIn(0)}
                                                    onPressOut = {() => this.animateOut(0)}
                                                    onPress={() =>
                                                        this.props.navigation.navigate('ThePostInNewFeed',
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
                                                    <View style={[part.imageInFeature, part.shadow]}>
                                                        <Animated.View
                                                            style={[part.imageInFeature, {transform: [{
                                                                scale: this.state.animated[0]
                                                            }]}]}
                                                            activeOpacity={1}
                                                        >
                                                        <Image
                                                            style={[part.imageInFeature]}
                                                            source={{uri: item.image_url}}
                                                        />
                                                        </Animated.View>
                                                    </View>

                                                    <LinearGradient
                                                        colors={['transparent', color.transparentBlack]}
                                                        style={part.wrapperTitleFeature}>
                                                        <Text
                                                            numberOfLines={2}
                                                            style={part.textTitleFeature}
                                                        >
                                                            {this.textTopShow()}
                                                        </Text>
                                                        <CardItem style={[part.cardButtonFeature, part.noPadding]}>
                                                            <Left>
                                                                <Button
                                                                    transparent style={part.paddingRight}
                                                                >
                                                                    <Icon name="fontawesome|heart" size={size.describe}
                                                                          color={color.navTitle}/>
                                                                    <Text
                                                                        style={[part.describeLight, part.paddingLeft]}>{item.likes_count}</Text>
                                                                </Button>
                                                                <Button transparent style={part.paddingRight}
                                                                >
                                                                    <Icon name="fontawesome|comment"
                                                                          size={size.describe}
                                                                          color={color.navTitle}/>
                                                                    <Text
                                                                        style={[part.describeLight, part.paddingLeft]}>{item.comments_count}</Text>
                                                                </Button>
                                                                <Button transparent style={part.paddingRight}>
                                                                    <Icon name="materialCommunity|eye"
                                                                          size={size.describe + 3}
                                                                          color={color.navTitle}/>
                                                                    <Text
                                                                        style={[part.describeLight, part.paddingLeft]}>{item.views_count}</Text>
                                                                </Button>
                                                            </Left>
                                                            <Right>
                                                                <Button transparent style={{marginRight: 43}}>
                                                                    <Icon name="fontawesome|star" size={size.iconNormal}
                                                                          color={color.star}/>
                                                                </Button>
                                                            </Right>
                                                        </CardItem>
                                                    </LinearGradient>
                                                </TouchableOpacity>
                                            )
                                        } else {
                                            return (
                                                <View style={{flex: 1, flexDirection: 'row'}}>
                                                    {
                                                        item.map((post, index) => {
                                                            return (
                                                                <GridView
                                                                    animated={animated}
                                                                    navigation={this.props.navigation}
                                                                    post={post}
                                                                    key={post.key}
                                                                    animateIn={this.animateIn}
                                                                    animateOut={this.animateOut}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </View>
                                            )
                                        }
                                    }}
                                    ListFooterComponent={
                                        this.loadingLoadMore()
                                    }
                                />)
                        )
                        :
                        (
                            this.state.isLoadingList
                                ? (
                                    <View
                                        style={[part.wrapperContainer, Platform.OS === 'ios' ? {height: 30} : {flex: 1}, {marginBottom: -30}]}>
                                        <Spinner color={color.gray}/>
                                    </View>
                                ) : (
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        onEndReachedThreshold={5}
                                        onEndReached={() => {
                                            this.getMoreNewFeed()
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
                                            let {arrayLike, likeCount, animated} = this.state;
                                            let colorIcon = arrayLike[item.key] ? color.main : color.icon;
                                            let likedIcon = arrayLike[item.key] ? 'fontawesome|heart' : 'fontawesome|heart-o';
                                            let featureIcon = item.feature_id == 0 ? 'fontawesome|star-o' : 'fontawesome|star';
                                            let colorFeatureIcon = item.feature_id == 0 ? color.icon : color.star;
                                            return (
                                                <ListView
                                                    animated={animated}
                                                    hiddenPost={this.hiddenPost}
                                                    alertHiddenPost={this.alertHiddenPost}
                                                    token={this.props.token}
                                                    unlikePost={this.unlikePost}
                                                    likePost={this.likePost}
                                                    user={this.props.user}
                                                    navigation={this.props.navigation}
                                                    arrayLike={arrayLike}
                                                    likeCount={likeCount}
                                                    item={item}
                                                    animateIn={this.animateIn}
                                                    animateOut={this.animateOut}
                                                    colorIcon={colorIcon}
                                                    likedIcon={likedIcon}
                                                    featureIcon={featureIcon}
                                                    colorFeatureIcon={colorFeatureIcon}
                                                    parentFlatList={this}
                                                />
                                            )
                                        }}
                                        ListFooterComponent={
                                            this.loadingLoadMore()
                                        }

                                    />)
                        )

                }
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
        isRefreshing: state.getNewFeed.isRefreshing,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNewFeedAction: bindActionCreators(getNewFeedAction, dispatch),
        likePostAction: bindActionCreators(likePostAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewFeedContainer);