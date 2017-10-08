import React, {Component} from 'react';
import {
    FlatList, TouchableOpacity, Image, StatusBar, View, Picker
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Item,
    Thumbnail, Text, Button, Left, Body, Right, ListItem
} from 'native-base';
import {SearchTab} from '../../navigators/appRouter';
import Icon from 'react-native-vector-icons/FontAwesome';
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
            grid: false,
            page_id: 1,
        }
    }

    componentWillMount() {
        this.props.getNewFeedAction.getNewFeed(7, this.state.page_id);
    }

    getMoreNewFeed() {
        let page_id = this.state.page_id;
        page_id++;
        this.setState({page_id: page_id});
        this.props.getNewFeedAction.getNewFeed(7, this.state.page_id);
    }


    render() {
        return (
            <Container style={part.wrapperContainer}>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="dark-content"
                />

                <View>
                    <Item style={part.itemTab}>
                        <Left>

                        </Left>
                        <Right style={part.rightTab}>
                            {
                                (this.state.grid)
                                    ?
                                    (
                                        <Right style={part.rightTab}>
                                            <Icon name="th-list"
                                                  color={color.icon}
                                                  size={size.icon}
                                                  style={part.padding}
                                                  onPress={() => this.setState({grid: false})}
                                            />
                                            <Icon name="th-large"
                                                  color={color.darkGray}
                                                  size={size.icon}
                                                  style={part.padding}
                                                  onPress={() => this.setState({grid: true})}
                                            />
                                        </Right>
                                    )
                                    :
                                    (
                                        <Right style={part.rightTab}>
                                            <Icon name="th-list"
                                                  color={color.darkGray}
                                                  size={size.icon}
                                                  style={part.padding}
                                                  onPress={() => this.setState({grid: false})}
                                            />
                                            <Icon name="th-large"
                                                  color={color.icon}
                                                  size={size.icon}
                                                  style={part.padding}
                                                  onPress={() => this.setState({grid: true})}
                                            />
                                        </Right>
                                    )
                            }
                        </Right>
                    </Item>
                </View>


                <Content onMomentumScrollEnd={() => this.getMoreNewFeed()}>
                    {
                        (this.state.grid)
                            ?
                            (
                                <View style={part.wrapperGrid}>
                                    {
                                        this.props.products.map((item, i) => {
                                            return (
                                                <View key={i} style={part.wrapperGridImage}>
                                                    <Image
                                                        style={part.imageInGrid}
                                                        source={{uri: item.thumb_url}}
                                                    />
                                                </View>
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
                                                <Card style={part.card}>
                                                    <CardItem header style={part.card}>
                                                        <Left
                                                            onPress={() => this.props.navigation.navigate('UserStack', {username: item.author.username})}>
                                                            <TouchableOpacity>
                                                                <Image style={part.avatarUserSmall}
                                                                       source={{uri: item.author.avatar_url}}/>
                                                            </TouchableOpacity>
                                                            <Body>
                                                            <Text
                                                                onPress={() => this.props.navigation.navigate('User', {username: item.author.username})}
                                                                style={part.titleSmallBlue}>
                                                                {item.author.name}
                                                            </Text>
                                                            <Text
                                                                style={part.describeItalicDark}>{item.created_at}</Text>

                                                            </Body>
                                                            <Right>
                                                                <Button transparent>
                                                                    <Icon name="ellipsis-v" size={size.icon}/>
                                                                </Button>
                                                            </Right>
                                                        </Left>
                                                    </CardItem>
                                                    <CardItem cardBody style={part.card}>
                                                        <Body>
                                                        <Image source={{uri: item.image_url}}
                                                               style={part.image}
                                                               onPress={() => this.props.navigation.navigate('Post', {product_id: item.id})}
                                                        >
                                                        </Image>
                                                        <View style={part.textInImage}>
                                                            <Text
                                                                numberOfLines={2}
                                                                style={[part.padding, {paddingLeft: 15}, part.titleInImage]}
                                                            >
                                                                {item.title}
                                                            </Text>
                                                        </View>
                                                        <View style={part.iconLikeInImage}>
                                                            <Icon name="heart-o" style={{zIndex: 100}}
                                                                  size={size.iconBig}
                                                                  color={color.navTitle}/>
                                                        </View>
                                                        </Body>
                                                    </CardItem>
                                                    <CardItem footer>
                                                        <Left>
                                                            <Button
                                                                transparent style={part.paddingRight}>
                                                                <Icon name="heart" size={size.iconBig}
                                                                      color={color.main}/>
                                                                <Text
                                                                    style={[part.describeGray, part.paddingLeft]}>{item.likes_count}</Text>
                                                            </Button>

                                                            <Button transparent style={part.paddingRight}
                                                                    onPress={() => this.props.navigation.navigate('Comment', {product_id: item.id})}
                                                            >
                                                                <Icon name="comments-o" size={size.iconBig}
                                                                      color={color.icon}/>
                                                                <Text
                                                                    style={[part.describeGray, part.paddingLeft]}>{item.comments_count}</Text>
                                                            </Button>
                                                            <Button transparent style={part.paddingRight}>
                                                                <Icon name="eye" size={size.iconBig}
                                                                      color={color.icon}/>
                                                                <Text
                                                                    style={[part.describeGray, part.paddingLeft]}>{item.views_count}</Text>
                                                            </Button>
                                                        </Left>
                                                        <Right>
                                                        </Right>
                                                    </CardItem>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNewFeedAction: bindActionCreators(getNewFeedAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newFeedComponent);