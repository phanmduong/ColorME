import React, {Component} from 'react';
import {
    FlatList, TouchableOpacity, Image, StatusBar, View, TouchableHighlight
} from 'react-native';
import {
    Container, Header, Content, Card, CardItem, Item, Picker,
    Thumbnail, Text, Button, Left, Body, Right, ListItem, Spinner, Badge
} from 'native-base';
import Video from 'react-native-video';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as getNewFeedAction from '../../actions/newFeedAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as likePostAction from '../../actions/likePostAction'
import FastImage from 'react-native-fast-image'

class newFeedComponent extends Component {
    constructor() {
        super();
        this.state = {
            grid: true,
            page_id: 2,
            typeView: '',
            arrayLike: [],
            likeCount: [],
            listPost: [],
            data: [],
        }
    }

    onValueChange(value: string) {
        this.setState({page_id: 1});
        this.setState({typeView: value});
        this.props.products = [];
        this.props.getNewFeedAction.getNewFeed(this.state.typeView, this.state.page_id);
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
        if (nextProps.isLoading != this.props.isLoading && this.props.isLoading == true) {
            let arr = this.state.arrayLike;
            let count = this.state.likeCount;
            let post = nextProps.products;
            console.log(post);
            let item = false;
            for (var i = this.props.products.length; i < post.length; i++) {
                let likers = post[i].likers.filter((liker) => {
                    return liker.username == nextProps.user.username
                });
                if (likers.length == 0) {
                    item = false;
                } else {
                    item = true;
                }
                count.push(post[i].likes_count);
                arr.push(item);
            }
            this.setState({likeCount: count, arrayLike: arr})
        }
    }


    componentDidMount() {
        this.props.getNewFeedAction.getNewFeed(this.state.typeView, 1);
    }

    // Function
    getMoreNewFeed() {
        let page_id = this.state.page_id + 1;
        this.setState({page_id: page_id});
        this.props.getNewFeedAction.getNewFeed(this.state.typeView, this.state.page_id);
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
                                itemTextStyle={part.describeDarkGray}
                                renderHeader={backAction =>
                                    <Header
                                        iosBarStyle='light-content'
                                        style={{backgroundColor: color.navTabBar}}>
                                        <Left>
                                            <Button transparent onPress={backAction}>
                                                <Icon name="entypo|chevron-thin-left" color={color.navTitle}
                                                      size={size.iconBig}/>
                                            </Button>
                                        </Left>
                                        <Body style={{flex: 3}}>
                                        <Text style={part.titleNormalLight}>Chọn kiểu xem</Text>
                                        </Body>
                                        <Right/>
                                    </Header>}
                                mode="dropdown"
                                textStyle={part.describeDarkGray}
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


                <Content
                    showsVerticalScrollIndicator={false}
                    onMomentumScrollEnd={() => this.getMoreNewFeed()} style={[part.padding, part.marginTop]}>
                    {
                        (this.state.grid)
                            ?
                            (
                                <View style={[part.wrapperGrid, part.shadow]}>
                                    <View style={part.featureWrapper}>
                                        <Image
                                            style={[part.imageInFeature, part.shadow]}
                                            source={{uri: 'https://www.w3schools.com/css/trolltunga.jpg'}}
                                        />
                                        <View style={part.textInImage}>
                                            <Text
                                                numberOfLines={2}
                                                style={[part.padding, {paddingLeft: 15}, part.titleInImage]}
                                            >
                                                Top of the day
                                            </Text>
                                        </View>
                                    </View>
                                    {
                                        this.props.products.map((item, i) => {

                                            return (
                                                <View key={i}
                                                      style={(item.url.indexOf('.mp4') === -1 ) ? part.wrapperGridImage : part.wrapperGridVideo}>
                                                    <TouchableOpacity
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
                                                        {
                                                            (item.url.indexOf('.mp4') === -1 ) ?
                                                                <FastImage
                                                                    style={[part.imageInGrid]}
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
                                                                    style={[part.videoInGrid]}
                                                                    source={{uri: item.url}}
                                                                />
                                                        }

                                                    </TouchableOpacity>
                                                </View>

                                            )
                                        })
                                    }
                                </View>
                            )
                            :
                            (

                                <Content>
                                    <FlatList
                                        onEndReachedThreshold={5}
                                        onEndReached={() => {
                                        }}
                                        data={this.props.products}
                                        renderItem={({item, a, i}) => {
                                            let {arrayLike} = this.state;
                                            let {likeCount} = this.state;
                                            let colorIcon = arrayLike[i] ? color.main : color.icon;
                                            return (
                                                <Card key={i} style={part.card}>
                                                    <CardItem header style={part.cardHeader}>
                                                        <Left>
                                                            <TouchableOpacity
                                                                onPress={() => this.props.navigation.navigate('UserInNewFeed', {username: item.author.username})}>
                                                                <Thumbnail circle small
                                                                           source={{uri: item.author.avatar_url}}/>
                                                            </TouchableOpacity>
                                                            <Body>
                                                            <Text
                                                                onPress={() => this.props.navigation.navigate('UserInNewFeed', {username: item.author.username})}
                                                                style={part.titleSmallBlue}>
                                                                {item.author.name}
                                                            </Text>
                                                            <Text
                                                                style={part.describeItalicDark}>{item.created_at}</Text>
                                                            </Body>
                                                            <TouchableOpacity transparent>
                                                                <Icon name="materialCommunity|dots-horizontal"
                                                                      color={color.icon}
                                                                      size={size.icon}
                                                                      style={part.paddingRight}
                                                                />
                                                            </TouchableOpacity>
                                                        </Left>
                                                    </CardItem>


                                                    {/*PHOTO*/}
                                                    <CardItem cardBody style={part.card}>
                                                        {
                                                            (item.group)
                                                                ?
                                                                (
                                                                    <TouchableOpacity
                                                                        onPress={() =>
                                                                            this.props.navigation.navigate('ThePostInNewFeed', {
                                                                                product_id: item.id,
                                                                                group_name: item.group.name,
                                                                                group_link: item.group.link,
                                                                            })}
                                                                    >
                                                                        <Body>
                                                                        {
                                                                            (item.url.indexOf('.mp4') === -1)
                                                                                ?
                                                                                (
                                                                                    <FastImage
                                                                                        resizeMode={'cover'}
                                                                                        source={{
                                                                                            uri: item.image_url,
                                                                                            headers: {Authorization: 'Đang tải..'},
                                                                                        }}
                                                                                        style={[part.image, part.shadow]}
                                                                                    />
                                                                                )
                                                                                :
                                                                                (
                                                                                    <Video
                                                                                        repeat
                                                                                        rate={1.0}                   // 0 is paused, 1 is normal.
                                                                                        volume={1.0}                 // 0 is muted, 1 is normal.
                                                                                        muted={true}                 // Mutes the audio entirely.
                                                                                        paused={false}
                                                                                        resizeMode={'cover'}
                                                                                        source={{uri: item.url}}
                                                                                        style={[part.video, part.shadow]}
                                                                                    />
                                                                                )
                                                                        }

                                                                        <View style={part.textInImage}>
                                                                            <Text
                                                                                numberOfLines={2}
                                                                                style={[part.padding, {paddingLeft: 15}, part.titleInImage]}
                                                                            >
                                                                                {item.title}
                                                                            </Text>
                                                                            <Text
                                                                                numberOfLines={2}
                                                                                style={[{paddingLeft: 15}, part.describeInImage]}
                                                                            >
                                                                                {item.description}
                                                                            </Text>
                                                                        </View>
                                                                        </Body>
                                                                    </TouchableOpacity>
                                                                )
                                                                :
                                                                (
                                                                    <TouchableOpacity
                                                                        onPress={() =>
                                                                            this.props.navigation.navigate('ThePostInNewFeed', {
                                                                                product_id: item.id,
                                                                            })}
                                                                    >
                                                                        <Body>
                                                                        {
                                                                            (item.url.indexOf('.mp4') === -1)
                                                                                ?
                                                                                (
                                                                                    <FastImage
                                                                                        resizeMode={'cover'}
                                                                                        source={{
                                                                                            uri: item.image_url,
                                                                                            headers: {Authorization: 'Đang tải..'},

                                                                                        }}
                                                                                        style={[part.image, part.shadow]}
                                                                                    />
                                                                                )
                                                                                :
                                                                                (
                                                                                    <Video
                                                                                        repeat
                                                                                        rate={1.0}                   // 0 is paused, 1 is normal.
                                                                                        volume={1.0}                 // 0 is muted, 1 is normal.
                                                                                        muted={true}                 // Mutes the audio entirely.
                                                                                        paused={false}
                                                                                        resizeMode={'cover'}
                                                                                        source={{uri: item.url}}
                                                                                        style={[part.video, part.shadow]}
                                                                                    />
                                                                                )
                                                                        }

                                                                        <View style={part.textInImage}>
                                                                            <Text
                                                                                numberOfLines={2}
                                                                                style={[part.padding, {paddingLeft: 15}, part.titleInImage]}
                                                                            >
                                                                                {item.title}
                                                                            </Text>
                                                                        </View>
                                                                        </Body>
                                                                    </TouchableOpacity>
                                                                )
                                                        }
                                                    </CardItem>


                                                    {/*LIKE COMMENT VIEWS*/}
                                                    <CardItem footer style={part.cardFooter}>
                                                        <Left>
                                                            {(arrayLike[i]) ? (
                                                                <Button
                                                                    transparent style={part.paddingRight}
                                                                    onPress={() => this.unlikePost(item.id, this.props.token, i)}
                                                                >
                                                                    <Icon name="fontawesome|heart" size={size.iconBig}
                                                                          color={colorIcon}/>
                                                                    <Text
                                                                        style={[part.describeGray, part.paddingLeft]}>{likeCount[i]}</Text>
                                                                </Button>
                                                            ) : (
                                                                <Button
                                                                    transparent style={part.paddingRight}
                                                                    onPress={() => this.likePost(item.id, this.props.token, i)}
                                                                >
                                                                    <Icon name="fontawesome|heart" size={size.iconBig}
                                                                          color={colorIcon}/>
                                                                    <Text
                                                                        style={[part.describeGray, part.paddingLeft]}>{likeCount[i]}</Text>
                                                                </Button>
                                                            )}


                                                            <Button transparent style={part.paddingRight}
                                                                    onPress={() =>
                                                                        this.props.navigation.navigate('ThePostInNewFeed', {
                                                                            product_id: item.id,
                                                                            group_name: item.group.name,
                                                                            group_link: item.group.link,
                                                                        })}
                                                            >
                                                                <Icon name="fontawesome|comments-o" size={size.iconBig}
                                                                      color={color.icon}/>
                                                                <Text
                                                                    style={[part.describeGray, part.paddingLeft]}>{item.comments_count}</Text>
                                                            </Button>
                                                            <Button transparent style={part.paddingRight}>
                                                                <Icon name="fontawesome|eye" size={size.iconBig}
                                                                      color={color.icon}/>
                                                                <Text
                                                                    style={[part.describeGray, part.paddingLeft]}>{item.views_count}</Text>
                                                            </Button>
                                                        </Left>
                                                        <Right>
                                                        </Right>
                                                    </CardItem>
                                                    <TouchableOpacity style={[part.iconLikeInImage, part.shadow]}>
                                                        <Icon name="evil|heart"
                                                              size={30}
                                                              color={color.navTitle}/>
                                                    </TouchableOpacity>
                                                </Card>
                                            )
                                        }}
                                    />
                                </Content>

                            )
                    }
                </Content>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNewFeedAction: bindActionCreators(getNewFeedAction, dispatch),
        likePostAction: bindActionCreators(likePostAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newFeedComponent);