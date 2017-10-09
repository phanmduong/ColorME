import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, StatusBar, Image
} from 'react-native';

import {
    Body, Button, Card, CardItem, Container, Content, Left, Right, Spinner,
    Thumbnail, Item
} from 'native-base';
import Icon from '../commons/Icon';
import Video from 'react-native-video';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import * as size from '../styles/size';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as getFullInfoAboutOnePostAction from '../actions/getFullInfoAboutOnePostAction'

let video;
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
        video = this.props.post.url.indexOf('.mp4');
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