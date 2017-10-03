import React, {Component} from 'react';
import {
    Image, Dimensions, View, TouchableOpacity
} from 'react-native';
import {
    Title,Container, Header, Content, Card, CardItem,
    Thumbnail, Text, Button, Left, Body, Right
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as API from '../constants/env';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import * as size from '../styles/size';
import * as getNewFeedAction from '../actions/getNewFeedAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class newFeedComponent extends Component{
    constructor(){
        super();
        this.state = {
            filter: 1,
            toggle : [],
        }
    }

    componentWillMount(){
        this.props.getNewFeedAction.getNewFeed(1, 6823);
        let n = this.props.getNewFeedAction.getNewFeed.length;
        let arr = [];
        let i = 0;
        while( i <  n){
            arr[i] = true;
            i++;
        }
        this.setState({toggle: arr})


    }
    getMoreNewFeed(){
        this.props.getNewFeedAction.getNewFeed(this.state.filter , 6823);
        let filter = this.state.filter;
        filter += 1;
        this.setState({filter: filter})
    }



    render(){
        return(
            <Container style={part.wrapperContainer}>
                <Header style={part.navTop}
                        iosBarStyle={'light-content'}
                        backgroundColor={color.main}>
                    <Left>
                        <Button transparent >
                            <Icon name="calendar" size={size.icon} color={color.navTitle}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={part.navTitle}>ColorME</Title>
                    </Body>
                    <Right>
                        <Button transparent >
                            <Icon name="user-plus" size={size.icon} color={color.navTitle}/>
                        </Button>
                    </Right>
                </Header>
                <Content onMomentumScrollEnd={() => this.getMoreNewFeed(6823)}>
                    {
                        this.props.products.map((arr, i) => {
                        return (
                            <Card style={{flex: 0}} key={i}>
                                <CardItem header>
                                    <Left>
                                        <TouchableOpacity onPress={() => this.props.navigation.navigate('User', {username: arr.author.username})}>
                                            <Thumbnail style={part.avatarUserSmall}
                                                       source={{uri : arr.author.avatar_url}} />
                                        </TouchableOpacity>
                                        <Body>
                                            <Text style={part.titleSmallDarkBold}>{arr.author.name}</Text>
                                        </Body>
                                        <Right>
                                            <Button transparent>
                                                <Icon name="ellipsis-v" size={size.icon}/>
                                            </Button>
                                        </Right>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Body >
                                        <Image resizeMode="stretch" source={{uri: arr.thumb_url}}
                                               style={{height: 250, width: Dimensions.get('window').width - 4, flex: 1}}
                                        />
                                        <Text
                                            onPress={() => this.props.navigation.navigate('Post', {product_id: arr.id, user_id: arr.author.id})}
                                            style={[part.padding, part.describeDark]}>{arr.title}</Text>
                                    </Body>
                                </CardItem>
                                <CardItem style={{height: 20}}>
                                    <Left>
                                        <Button transparent style={part.paddingRight}>
                                            <Icon name="heart-o" size={size.icon}/>
                                            <Text style={part.describeDark}>{arr.likes_count}</Text>
                                        </Button>
                                        <Button transparent style={part.paddingRight}>
                                            <Icon name="comment-o" size={size.icon} />
                                            <Text style={part.describeDark}>{arr.comments_count}</Text>
                                        </Button>
                                        <Button transparent style={part.paddingRight}>
                                            <Icon name="eye" size={size.icon}/>
                                            <Text style={part.describeDark}>{arr.views_count}</Text>
                                        </Button>
                                    </Left>
                                    <Right>
                                        <Text style={part.describeItalicDark}>{arr.created_at}</Text>
                                    </Right>
                                </CardItem>
                                <CardItem style={{padding: 0}}>
                                    <Left>
                                        {
                                            arr.colors.map((color, i) => {
                                                return(
                                                    <Button transparent key={i} style={part.paddingRight}>
                                                        <Icon name="circle" size={size.icon} color={'#'+color} />
                                                    </Button>

                                                );
                                            })
                                        }
                                    </Left>
                                    <Right>
                                    </Right>
                                </CardItem>
                            </Card>
                            )
                        })
                    }
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        products: state.getNewFeed.products
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getNewFeedAction: bindActionCreators(getNewFeedAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(newFeedComponent);