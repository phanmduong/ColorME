import React, {Component} from 'react';
import {
    FlatList, TouchableOpacity, Image, Dimensions
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem,
    Thumbnail, Text, Button, Left, Body, Right
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import * as size from '../styles/size';
import * as getNewFeedAction from '../actions/getNewFeedAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class newFeedComponent extends Component {
    constructor() {
        super();
        this.state = {
            page_id: 1,
        }
    }

    componentWillMount() {
        this.props.getNewFeedAction.getNewFeed(1, this.state.page_id);
    }

    // getMoreNewFeed() {
    //     let page_id = this.state.page_id;
    //     page_id += 1;
    //     this.setState({page_id: page_id});
    //     this.props.getNewFeedAction.getNewFeed(1, this.state.page_id);
    // }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                <Header style={part.navTop}
                        iosBarStyle={'light-content'}
                        backgroundColor={color.main}>
                    <Left>
                        <Button transparent>
                            <Icon name="calendar" size={size.icon} color={color.navTitle}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={part.navTitle}>ColorME</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name="users" size={size.icon} color={color.navTitle}/>
                        </Button>
                    </Right>
                </Header>


                <Content>
                    <FlatList
                        onEndReachedThreshold={5}
                        // onEndReached={this.getMoreNewFeed.bind(this)}
                        data={this.props.products}
                        renderItem={({item}) =>
                            <Card style={{flex: 0}}>
                                <CardItem header>
                                    <Left>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('User', {username: item.author.username})}>
                                            <Thumbnail style={part.avatarUserSmall}
                                                       source={{uri: item.author.avatar_url}}/>
                                        </TouchableOpacity>
                                        <Text style={part.titleSmallDarkBold}>{item.author.name}</Text>
                                        <Right>
                                            <Button transparent>
                                                <Icon name="ellipsis-v" size={size.icon}/>
                                            </Button>
                                        </Right>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Body>
                                    <Image resizeMode="cover" source={{uri: item.thumb_url}}
                                           style={{height: 400, width: Dimensions.get('window').width - 4, flex: 1}}
                                    />
                                    <Text
                                        onPress={() => this.props.navigation.navigate('Post', {product_id: item.id})}
                                        style={[part.padding, part.describeDark,{paddingLeft: 15}]}>
                                        <Text style={part.titleSmallDarkBold}>
                                            {item.author.name}&nbsp;
                                        </Text>
                                            {item.title}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem style={{height: 20}}>
                                    <Left>
                                        <Button transparent style={part.paddingRight}>
                                            <Icon name="heart-o" size={size.icon}/>
                                            <Text style={[part.describeDark, part.paddingLeft]}>{item.likes_count}</Text>
                                        </Button>
                                        <Button transparent style={part.paddingRight}>
                                            <Icon name="comment-o" size={size.icon}/>
                                            <Text style={[part.describeDark, part.paddingLeft]}>{item.comments_count}</Text>
                                        </Button>
                                        <Button transparent style={part.paddingRight}>
                                            <Icon name="eye" size={size.icon}/>
                                            <Text style={[part.describeDark, part.paddingLeft]}>{item.views_count}</Text>
                                        </Button>
                                    </Left>
                                    <Right>
                                        <Text style={part.describeItalicDark}>{item.created_at}</Text>
                                    </Right>
                                </CardItem>
                                <CardItem style={{padding: 0}}>
                                    <Left>
                                        {
                                            item.colors.map((color, i) => {
                                                return (
                                                    <Button transparent key={i} style={part.paddingRight}>
                                                        <Icon name="circle" size={size.icon} color={'#' + color}/>
                                                    </Button>

                                                );
                                            })
                                        }
                                    </Left>
                                    <Right>

                                    </Right>
                                </CardItem>
                            </Card>
                        }
                    />
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.getNewFeed.products,
        user: state.login.user,
        userID: state.login.userID
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNewFeedAction: bindActionCreators(getNewFeedAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newFeedComponent);