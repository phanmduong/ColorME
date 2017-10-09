import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, StatusBar, WebView
} from 'react-native';

import {
    Body, Button, Card, CardItem, CheckBox, Container, Content, Item,
    Header, Left, List, ListItem, Right, Tab, TabHeading, Tabs, Spinner,
    Thumbnail, Title,
} from 'native-base';
import {Dimensions, Image} from 'react-native'
import Icon from '../commons/Icon';
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
        }
    }

    componentWillMount() {
        this.props.getFullInfoAboutOnePostAction.getFullInfoAboutOnePostOfUser(this.props.navigation.state.params.product_id)
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

                <Content>
                    {
                        (!this.props.post.isLoading)
                            ?
                            (
                                <View>
                                    <View style={part.cardGetFull}>

                                        {/*PHOTO*/}
                                        <CardItem cardBody>
                                            <Body>
                                            <Image source={{uri: this.props.post.image_url}}
                                                   style={[part.imageInGetFull, part.shadow]}
                                            />

                                            </Body>
                                            <View style={part.iconInDrawer}>
                                                <Left>
                                                    <TouchableOpacity
                                                        onPress={() => this.props.navigation.goBack()}
                                                    >
                                                        <Icon name="entypo|chevron-thin-left" style={{zIndex: 100}}
                                                              size={size.iconBig}
                                                              color={color.navTitle}/>
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
                                        size={30}
                                        color={color.gray}/>
                                </View>
                            )
                    }

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