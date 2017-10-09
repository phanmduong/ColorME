import React, {Component} from 'react';
import {
    FlatList, TouchableOpacity, Image, StatusBar, View,
} from 'react-native';
import {
    Container, Header, Content, Card, CardItem, Item, Picker,
    Thumbnail, Text, Button, Left, Body, Right, ListItem, Spinner
} from 'native-base';
import Video from 'react-native-video';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as getNewFeedAction from '../../actions/getNewFeedAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


class newFeedComponent extends Component {
    constructor() {
        super();
        this.state = {
            grid: true,
            page_id: 1,
            typeView: "",
        }
    }

    onValueChange(value: string) {
        this.setState({typeView: value});
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


    componentWillMount() {
        this.props.getNewFeedAction.getNewFeed(this.state.typeView, 1);
    }

    getMoreNewFeed() {
        let page_id = this.state.page_id;
        page_id++;
        this.setState({page_id: page_id});
        this.props.getNewFeedAction.getNewFeed(this.state.typeView, this.state.page_id);
    }


    render() {
        return (
            <Container style={part.wrapperContainer}>
                <StatusBar
                    barStyle="light-content"
                />

                <View>
                    <Item style={[part.itemTab, part.shadow]}>
                        <Left style={{flexDirection: 'row'}}>
                            <Picker
                                iosHeader="Select one"
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
                            {
                                (this.state.grid)
                                    ?
                                    (
                                        <Right style={part.rightTab}>
                                            <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                                                <Icon name="material|view-list"
                                                      color={color.icon}
                                                      size={size.icon}
                                                      style={part.paddingIcon}
                                                      onPress={() => this.viewList()}
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                                                <Icon name="material|view-module"
                                                      color={color.darkGray}
                                                      size={size.icon}
                                                      style={part.paddingIcon}
                                                      onPress={() => this.viewGrid()}
                                                />
                                            </TouchableOpacity>
                                        </Right>
                                    )
                                    :
                                    (
                                        <Right style={part.rightTab}>
                                            <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                                                <Icon name="material|view-list"
                                                      color={color.darkGray}
                                                      size={size.icon}
                                                      style={part.paddingIcon}
                                                      onPress={() => this.setState({grid: false})}
                                                />
                                            </TouchableOpacity>
                                            <TouchableOpacity style={{backgroundColor: 'transparent'}}>
                                                <Icon name="material|view-module"
                                                      color={color.icon}
                                                      size={size.icon}
                                                      style={part.paddingIcon}
                                                      onPress={() => this.setState({grid: true})}
                                                />
                                            </TouchableOpacity>
                                        </Right>
                                    )
                            }
                        </Right>
                    </Item>
                </View>


                <Content onMomentumScrollEnd={() => this.getMoreNewFeed} style={[part.padding, part.marginTop]}>
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
                                                (item.url.indexOf('.mp4') === -1)
                                                    ?
                                                    (
                                                        <View key={i} style={part.wrapperGridImage}>
                                                            <TouchableOpacity
                                                                onPress={() => this.props.navigation.navigate('PostStack', {product_id: item.id})}
                                                            >
                                                                <Image
                                                                    style={[part.imageInGrid]}
                                                                    source={{uri: item.thumb_url}}
                                                                />
                                                            </TouchableOpacity>
                                                        </View>
                                                    )
                                                    :
                                                    (

                                                        <View key={i} style={part.wrapperGridVideo}>
                                                            <TouchableOpacity
                                                                onPress={() => this.props.navigation.navigate('PostStack', {product_id: item.id})}
                                                            >
                                                                <Video
                                                                    repeat
                                                                    rate={1.0}                   // 0 is paused, 1 is normal.
                                                                    volume={1.0}                 // 0 is muted, 1 is normal.
                                                                    muted={true}                // Mutes the audio entirely.
                                                                    paused={false}
                                                                    resizeMode={'cover'}
                                                                    style={[part.videoInGrid]}
                                                                    source={{uri: item.url}}
                                                                />
                                                            </TouchableOpacity>
                                                        </View>
                                                    )
                                            )


                                        })
                                    }
                                </View>
                            )
                            :
                            (
                                <Content>
                                    {
                                        this.props.products.map((item, i) => {
                                            return (
                                                <Card key={i} style={part.card}>
                                                    <CardItem header style={part.cardHeader}>
                                                        <Left>
                                                            <TouchableOpacity
                                                                onPress={() => this.props.navigation.navigate('UserStack', {username: item.author.username})}>
                                                                <Thumbnail circle small
                                                                           source={{uri: item.author.avatar_url}}/>
                                                            </TouchableOpacity>
                                                            <Body>
                                                            <Text
                                                                onPress={() => this.props.navigation.navigate('UserStack', {username: item.author.username})}
                                                                style={part.titleSmallBlue}>
                                                                {item.author.name}
                                                            </Text>
                                                            <Text
                                                                style={part.describeItalicDark}>{item.created_at}</Text>
                                                            </Body>
                                                            <Right>
                                                                <TouchableOpacity transparent>
                                                                    <Icon name="materialCommunity|dots-horizontal"
                                                                          color={color.icon}
                                                                          size={size.icon}
                                                                          style={part.paddingRight}
                                                                    />
                                                                </TouchableOpacity>
                                                            </Right>
                                                        </Left>
                                                    </CardItem>


                                                    {/*PHOTO*/}
                                                    <CardItem cardBody style={part.card}>
                                                        <TouchableOpacity
                                                            onPress={() => this.props.navigation.navigate('PostStack', {product_id: item.id})}>
                                                            <Body>
                                                            {
                                                                (item.url.indexOf('.mp4') === -1)
                                                                    ?
                                                                    (
                                                                        <Image
                                                                            resizeMode={'cover'}
                                                                            source={{uri: item.image_url}}
                                                                            style={[part.image, part.shadow]}
                                                                        />
                                                                    )
                                                                    :
                                                                    (
                                                                        <Video
                                                                            repeat
                                                                            rate={1.0}                   // 0 is paused, 1 is normal.
                                                                            volume={1.0}                 // 0 is muted, 1 is normal.
                                                                            muted={true}                // Mutes the audio entirely.
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
                                                    </CardItem>
                                                    <CardItem footer style={part.cardFooter}>
                                                        <Left>
                                                            <Button
                                                                transparent style={part.paddingRight}>
                                                                <Icon name="fontawesome|heart" size={size.iconBig}
                                                                      color={color.main}/>
                                                                <Text
                                                                    style={[part.describeGray, part.paddingLeft]}>{item.likes_count}</Text>
                                                            </Button>

                                                            <Button transparent style={part.paddingRight}
                                                                    onPress={() => this.props.navigation.navigate('Comment', {product_id: item.id})}
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
                                        })
                                    }
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
        userID: state.login.userID,
        token: state.login.token,
        isLoading: state.getNewFeed.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNewFeedAction: bindActionCreators(getNewFeedAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newFeedComponent);