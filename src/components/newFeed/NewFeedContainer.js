import React, {Component} from 'react';
import {FlatList, RefreshControl, StatusBar, TouchableOpacity, View,} from 'react-native';
import {
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Header,
    Input,
    Item,
    Left,
    Picker,
    Right,
    Spinner,
    Text,
    Thumbnail
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
import FastImage from 'react-native-fast-image';
import _ from 'lodash'

class NewFeedContainer extends Component {
    constructor() {
        super();
        this.state = {
            user_avatar_url: '',
            product_id: '',
            like_in_modal: '',
            grid: true,
            page_id: 2,
            typeView: '',
            arrayLike: [],
            likeCount: [],
            listPost: [],
            isLoadingList: false,
            clicked: '',
        };
        this.isFirst = true;
        this.likePost = this.likePost.bind(this);
        this.unlikePost = this.unlikePost.bind(this);
    }

    componentWillMount() {
        this.props.getNewFeedAction.getNewFeed(this.state.typeView, 1);
    }

    textTopShow() {
        switch (this.state.typeView) {
            case '':
                return (
                    'Top of the hour'
                );
            case '1':
                return (
                    'Top of the day'
                );
            case '7':
                return (
                    'Top of the week'
                );
            case '30':
                return (
                    'Top of the month'
                );

        }
    }

    onValueChange(value: string) {
        this.setState({
            typeView: value,
            listPost: [],
        });
        this.props.getNewFeedAction.getNewFeed(value, 1);
    }

    viewList() {
        setTimeout(() => {
            this.setState({isLoadingList: false})
        }, 100);
        let products = this.props.products.map((post, index) => {
            return {
                ...post,
                key : index
            }
        });
        this.setState({grid: false, isLoadingList: true,listPost : products});
    }

    viewGrid() {
        setTimeout(() => {
            this.setState({isLoadingList: false})
        }, 250);
        this.setState({grid: true, isLoadingList: true, listPost : this.groupPosts(this.props.products)});
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
            let i = this.props.products.length;
            while (i < post.length) {
                let key = {key : i};
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
            if (this.state.grid) {
                this.setState({listPost: this.groupPosts(nextProps.products)});
            }
            else {
                this.setState({
                    likeCount: count,
                    arrayLike: arr,
                    listPost: listPost,
                })
            }
        }
    }

// Function
    getMoreNewFeed() {
        if (this.props.isLoading != undefined && this.props.isLoading != null && !this.props.isLoading) {
            let page_id = this.state.page_id + 1;
            this.setState({page_id: page_id});
            this.props.getNewFeedAction.getNewFeed(this.state.typeView, this.state.page_id)
        }

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

    loadingLoadMore() {
        if (this.props.isLoading && this.state.listPost.length > 0) {
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
            return Math.floor((key-1) / 3);
        });
        postsGrid = [posts[0], ..._.toArray(postsGrid)];
        return postsGrid;
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                <StatusBar
                    barStyle="light-content"
                />
                {/*VIEW TYPE*/}
                <View>
                    <Item style={[part.itemTab, {paddingLeft: 0}]}>
                        <Left style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Picker
                                itemStyle={[part.noBorder, part.noMarginLeft, {paddingLeft: 20}]}
                                itemTextStyle={part.titleSmallDarkGrayBold}
                                renderHeader={backAction =>
                                    <Header
                                        iosBarStyle='light-content'
                                        style={[{backgroundColor: color.main}, part.noBorder]}>
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
                            <Icon name="entypo|triangle-down"
                                  color={color.darkGray}
                                  size={size.icon * 2 / 3}
                                  style={{marginLeft: -10}}
                            />
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


                {
                    (this.state.grid)
                        ?
                        (
                            this.state.isLoadingList ? (
                                <View style={[part.wrapperContainer, {height: 30, marginBottom: -30}]}>
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
                                            refreshing={this.props.isRefreshing || this.props.isLoading}
                                            onRefresh={() => {
                                                this.props.getNewFeedAction.refreshNewFeed(this.state.typeView, 1)
                                            }}
                                        />
                                    }
                                    renderItem={({item}) => {
                                        if (item == this.state.listPost[0]) {
                                            return (
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    style={part.featureWrapper}
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
                                                    <FastImage
                                                        style={[part.imageInFeature]}
                                                        source={{uri: item.image_url}}
                                                    />
                                                    <View style={part.wrapperTitleFeature}>
                                                        <Text
                                                            numberOfLines={2}
                                                            style={part.textTitleFeature}
                                                        >
                                                            {this.textTopShow()}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                            )
                                        } else {
                                            return (
                                                <View style={{flex: 1, flexDirection: 'row'}}>
                                                    {
                                                        item.map((post, index) => {
                                                            return (
                                                                <GridView
                                                                    navigation={this.props.navigation}
                                                                    post={post}
                                                                    key={index}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </View>
                                            )
                                        }
                                    }
                                    }
                                    ListFooterComponent={
                                        this.loadingLoadMore()
                                    }

                                />)

                        )
                        :
                        (
                            this.state.isLoadingList ? (
                                <View style={[part.wrapperContainer, {height: 30, marginBottom: -30}]}>
                                    <Spinner color={color.gray}/>
                                </View>
                            ) : (
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
                                        let {arrayLike, likeCount} = this.state;
                                        let colorIcon = arrayLike[item.key] ? color.main : color.icon;
                                        let likedIcon = arrayLike[item.key] ? 'fontawesome|heart' : 'fontawesome|heart-o';
                                        return (
                                            <ListView
                                                token={this.props.token}
                                                unlikePost={this.unlikePost}
                                                likePost={this.likePost}
                                                user={this.props.user}
                                                navigation={this.props.navigation}
                                                arrayLike={this.state.arrayLike}
                                                likeCount={this.state.likeCount}
                                                item={item}
                                                colorIcon={colorIcon}
                                                likedIcon={likedIcon}
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