import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, StatusBar, Image, WebView, KeyboardAvoidingView
} from 'react-native';

import {
    Body, Button, Card, CardItem, Container, Content, Left, Right, Spinner,
    Thumbnail, Item, Input
} from 'native-base';
import Icon from '../commons/Icon';
import Video from 'react-native-video';
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
            Height: 100,
        }
    }

    componentDidMount() {
        this.props.getFullInfoAboutOnePostAction.getFullInfoAboutOnePostOfUser(this.props.navigation.state.params.product_id)
        this.props.getFullInfoAboutOnePostAction.getCommentOnePost(this.props.navigation.state.params.product_id)

    }

    componentWillReceiveProps(nextProps) {
        this.setState({author: nextProps.post.author});
        this.setState({more_products: nextProps.post.more_products});
        this.setState({colors: nextProps.post.colors});
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                <StatusBar
                    hidden={true}
                />
                <Content scrollsToTop={false}>
                    {
                        (!this.props.isLoading)
                            ?
                            (
                                <View>
                                    <View style={part.cardGetFull}>

                                        {/*PHOTO*/}
                                        <CardItem cardBody>
                                            {
                                                (1)
                                                    ?
                                                    (
                                                        <View style={part.shadow}>
                                                            <Image source={{uri: this.props.post.image_url}}
                                                                   style={[part.imageInGetFull]}
                                                            />

                                                        </View>
                                                    )
                                                    :
                                                    (
                                                        <View style={part.shadow}>
                                                            <Video source={{uri: this.props.post.image_url}}
                                                                   style={[part.imageInGetFull]}
                                                            />

                                                        </View>
                                                    )
                                            }

                                            <View style={part.iconInDrawer}>
                                                <Left>
                                                    <TouchableOpacity
                                                        onPress={() => this.props.navigation.goBack()}
                                                    >
                                                        <Icon name="entypo|chevron-thin-left"
                                                              style={part.shadow}
                                                              size={size.iconBig}
                                                              color={color.navTitle}

                                                        />
                                                    </TouchableOpacity>
                                                </Left>
                                                <Right style={{right: 10}}>
                                                </Right>
                                            </View>
                                        </CardItem>


                                        <CardItem style={part.cardHeader}>
                                            <Left>
                                                <TouchableOpacity>
                                                    <Thumbnail circle
                                                               source={{uri: this.state.author.avatar_url}}/>
                                                </TouchableOpacity>
                                                <Body>
                                                <Text
                                                    style={[part.describeDarkGray, part.paddingLine]}>
                                                    Đăng bởi &nbsp;
                                                    <Text
                                                        style={part.titleSmallBlue}>
                                                        {this.state.author.name}
                                                    </Text>
                                                </Text>
                                                <Text
                                                    style={[part.describeItalicDark, part.paddingLine]}>
                                                    {this.props.post.created_at}
                                                </Text>
                                                <View style={[{flexDirection: 'row'}, part.paddingLine]}>
                                                    {
                                                        this.state.colors.map((color, i) => {
                                                            return (
                                                                <Icon key={i} name="fontawesome|circle"
                                                                      style={part.paddingRight} size={12}
                                                                      color={'#' + color}/>
                                                            );
                                                        })
                                                    }
                                                </View>
                                                </Body>
                                            </Left>
                                        </CardItem>
                                        <TouchableOpacity style={[part.iconLikeInImageFullAbout, part.shadow]}>
                                            <Icon name="evil|heart"
                                                  size={30}
                                                  color={color.navTitle}/>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={part.wrapperContainer}>
                                        <CardItem style={part.cardHeader}>
                                            <Item style={part.noBorder}>
                                                <Text style={part.titleLargeGrayDark}>
                                                    {this.props.post.title}
                                                </Text>
                                            </Item>
                                        </CardItem>
                                        <CardItem style={part.cardHeader}>
                                            <Item style={part.noBorder}>
                                                <Text style={part.describeDarkGray}>
                                                    {this.props.post.description}
                                                </Text>
                                            </Item>
                                        </CardItem>
                                    </View>

                                    <WebView
                                        automaticallyAdjustContentInsets={true}
                                        scrollEnabled={false}
                                        source={{
                                            html: `<div style="width: 100%">
                                                        ${this.props.post.content}
                                                   </div>
                                                   <Style>img{width: 100%};p{font-size: 16px}</Style>
                                                   `
                                        }}
                                        style={{height: this.state.Height}}
                                    />
                                    <CardItem footer>
                                        <Left>
                                            <Button
                                                transparent style={part.padding}>
                                                {

                                                }
                                                <Icon name="fontawesome|heart-o" size={size.iconBig}
                                                      color={color.icon}/>
                                                <Text
                                                    style={[part.describeGray, part.paddingLeft]}>{this.props.post.likes_count}</Text>
                                            </Button>

                                            <Button transparent style={part.paddingRight}
                                            >
                                                <Icon name="fontawesome|comments-o" size={size.iconBig}
                                                      color={color.icon}/>
                                                <Text
                                                    style={[part.describeGray, part.paddingLeft]}>{this.props.comments.length}</Text>
                                            </Button>
                                            <Button transparent style={part.paddingRight}>
                                                <Icon name="fontawesome|eye" size={size.iconBig}
                                                      color={color.icon}/>
                                                <Text
                                                    style={[part.describeGray, part.paddingLeft]}>{this.props.post.views_count}</Text>
                                            </Button>
                                        </Left>
                                        <Right>
                                            <TouchableOpacity transparent>
                                                <Icon name="materialCommunity|dots-horizontal"
                                                      color={color.icon}
                                                      size={size.icon}
                                                      style={part.paddingRight}
                                                />
                                            </TouchableOpacity>
                                        </Right>
                                    </CardItem>
                                    {
                                        this.props.comments.map((item, i) =>
                                            <CardItem style={part.cardHeader}>
                                                {
                                                    (item.parent_id === 0)
                                                        ?
                                                        (
                                                            <View style={part.cardCmt}>
                                                                <TouchableOpacity style={part.paddingTRB}>
                                                                    <Image
                                                                        style={part.avatarUserNormal}
                                                                        source={{uri: item.commenter.avatar_url}}/>
                                                                </TouchableOpacity>
                                                                <Body>
                                                                <Text
                                                                    style={[part.titleSmallBlue, part.paddingTLB]}
                                                                >
                                                                    {item.commenter.name}
                                                                </Text>


                                                                <Text
                                                                    style={[part.describeGray, part.paddingTLB]}
                                                                >
                                                                    {item.content}
                                                                </Text>
                                                                <View style={{flexDirection: 'row'}}>
                                                                    <Text
                                                                        style={[part.describeLightGray, part.paddingTLB]}
                                                                    >
                                                                        {item.created_at}
                                                                    </Text>
                                                                    <Text
                                                                        style={[part.describeLightGray, part.paddingTLB, part.marginLeftFar]}
                                                                    >
                                                                        Trả lời
                                                                    </Text>
                                                                </View>

                                                                <View
                                                                    style={[{flexDirection: 'row'}, part.paddingLine]}>

                                                                </View>
                                                                </Body>
                                                                <TouchableOpacity transparent>
                                                                    <Icon name="fontawesome|heart-o"
                                                                          color={color.icon}
                                                                          size={size.icon}
                                                                          style={part.paddingRight}
                                                                    />
                                                                </TouchableOpacity>
                                                            </View>

                                                        )
                                                        :
                                                        (
                                                            <View style={part.cardRepCmt}>
                                                                <TouchableOpacity style={part.paddingTRB}>
                                                                    <Image
                                                                        style={part.avatarUserNormal}
                                                                        source={{uri: item.commenter.avatar_url}}/>
                                                                </TouchableOpacity>
                                                                <Body>
                                                                <Text
                                                                    style={[part.titleSmallBlue, part.paddingTLB]}
                                                                >
                                                                    {item.commenter.name}
                                                                </Text>


                                                                <Text
                                                                    style={[part.describeGray, part.paddingTLB]}
                                                                >
                                                                    {item.content}
                                                                </Text>
                                                                <View style={{flexDirection: 'row'}}>
                                                                    <Text
                                                                        style={[part.describeLightGray, part.paddingTLB]}
                                                                    >
                                                                        {item.created_at}
                                                                    </Text>
                                                                    <Text
                                                                        style={[part.describeLightGray, part.paddingTLB, part.marginLeftFar]}
                                                                    >
                                                                        Trả lời
                                                                    </Text>
                                                                </View>

                                                                <View
                                                                    style={[{flexDirection: 'row'}, part.paddingLine]}>

                                                                </View>
                                                                </Body>
                                                                <TouchableOpacity transparent>
                                                                    <Icon name="fontawesome|heart-o"
                                                                          color={color.icon}
                                                                          size={size.icon}
                                                                          style={part.paddingRight}
                                                                    />
                                                                </TouchableOpacity>
                                                            </View>

                                                        )
                                                }
                                            </CardItem>
                                        )
                                    }

                                </View>
                            )
                            :
                            (
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
                            )
                    }

                </Content>
                <KeyboardAvoidingView behavior={'position'}>
                    <CardItem style={part.cardBottom}>
                        <Left>
                            <Image
                                style={part.avatarUserNormal}
                                source={{uri: this.props.user.avatar_url}}/>
                            <Body>
                            <Item rounded>
                                <Input
                                    placeholder='Viết bình luận'
                                    autoCorrect={false}
                                    placeholderTextColor={color.icon}
                                    style={part.inputTheme01}
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
                            <TouchableOpacity>
                                <Icon active name='fontawesome|comment-o'
                                      size={size.iconBig}
                                      color={color.icon}
                                      style={[part.paddingTLB, {paddingLeft: 10}]}
                                />
                            </TouchableOpacity>
                        </Left>
                    </CardItem>
                </KeyboardAvoidingView>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user,
        post: state.getFullInfoAboutOnePost.post,
        comments: state.getFullInfoAboutOnePost.comments,
        isLoading: state.getFullInfoAboutOnePost.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFullInfoAboutOnePostAction: bindActionCreators(getFullInfoAboutOnePostAction, dispatch),

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(getFullInfoAboutOnePostComponent);