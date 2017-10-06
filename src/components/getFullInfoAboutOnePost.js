import React, {Component} from 'react';
import {
    Body, Button, Card, CardItem, CheckBox, Container, Content,
    Header, Left, List, ListItem, Right, Tab, TabHeading, Tabs, Text,
    Thumbnail, Title,
} from 'native-base';
import {Dimensions, Image} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import * as size from '../styles/size';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as getFullInfoAboutOnePostAction from '../actions/getFullInfoAboutOnePostAction'

class getFullInfoAboutOnePostComponent extends Component {
    constructor() {
        super();
        this.state = {
            author: {},
            more_products: [],
            colors: [],
            comments :[],
        }
    }

    componentWillMount() {
        this.props.getFullInfoAboutOnePostAction.getFullInfoAboutOnePostOfUser(this.props.navigation.state.params.product_id)
    }

    componentWillReceiveProps(nextProps) {
        this.setState({author: nextProps.post.author});
        this.setState({more_products: nextProps.post.more_products});
        this.setState({colors: nextProps.post.colors});
        this.setState({comments: nextProps.comments.comments});
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                <Header
                    style={[part.navTop, {borderColor: color.none}]}
                    iosBarStyle={'dark-content'}
                    backgroundColor={color.none}>
                    <Left>
                        <Button transparent>
                            <Icon name="ellipsis-v" size={size.icon}/>
                        </Button>
                    </Left>
                    <Body>
                        <Title style={part.navTitle}></Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="times" size={size.icon}/>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card style={{flex: 0}}>
                    <Body>
                    <Thumbnail style={[part.avatarUserBig, {marginTop: 20,}]}
                               source={{uri: this.state.author.avatar_url}}/>
                    <Text style={[part.padding,part.titleBigDark]}>{this.state.author.name}</Text>
                    <Text style={part.titleSmallDarkBold}>{this.props.post.title}</Text>
                    <Text style={part.describeDark}>{this.props.post.description}</Text>

                    <CardItem style={{height: 20,marginTop: 20}}>
                        <Left>
                            <Button transparent style={part.paddingRight}>
                                <Icon name="heart-o" size={size.icon}/>
                                <Text style={part.describeDark}>{this.props.post.likes_count}</Text>
                            </Button>
                            <Button transparent style={part.paddingRight}>
                                <Icon name="comment-o" size={size.icon}/>
                                <Text style={part.describeDark}>{this.props.post.comments_count}</Text>
                            </Button>
                            <Button transparent style={part.paddingRight}>
                                <Icon name="eye" size={size.icon}/>
                                <Text style={part.describeDark}>{this.props.post.views_count}</Text>
                            </Button>
                        </Left>
                        <Right>
                            <Text style={part.describeItalicDark}>{this.props.post.created_at}</Text>
                        </Right>
                    </CardItem>
                    <CardItem style={{padding: 0}} >
                        <Left>
                            {
                                this.state.colors.map((color, i) => {
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
                    <CardItem cardBody>
                        <Body>
                        <Image resizeMode="stretch" source={{uri: this.props.post.thumb_url}}
                               style={part.image}
                        />
                        </Body>
                    </CardItem>
                    {(this.state.more_products.length !== 0) ? (
                        this.state.more_products.map((product, i) => {
                            return (
                                <CardItem key={i} cardBody style={{marginTop: 15}}>
                                    <Body>
                                    <Image resizeMode="stretch" source={{uri: product.thumb_url}}
                                           style={part.image}
                                    />
                                    </Body>
                                </CardItem>
                            )
                        })
                    ) : (
                        <Text/>
                    )}

                    </Body>
                    </Card>
                </Content>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        post: state.getFullInfoAboutOnePost.post,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFullInfoAboutOnePostAction: bindActionCreators(getFullInfoAboutOnePostAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(getFullInfoAboutOnePostComponent);