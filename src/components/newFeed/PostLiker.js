import React, {Component} from 'react';
import {
    FlatList, Text, TouchableOpacity, View, Image, StatusBar, Platform
} from 'react-native';
import {
    List,
    ListItem,
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Input,
    Item,
    Left,
    Right,
    Spinner,
    Thumbnail
} from 'native-base';
import Icon from '../../commons/Icon';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import part from '../../styles/partStyle';
import BackButton from '../../commons/BackButton';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import parallaxStyle from '../../styles/parallaxStyle';
import * as infoAboutPostAction from '../../actions/infoAboutPostAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

class PostLiker extends Component {
    componentWillMount() {
        const {params} = this.props.navigation.state;
        this.props.infoAboutPostAction.getPostLiker(params.product_id);
    }

    render() {
        const {likers, isLoading} = this.props;
        const {goBack} = this.props.navigation;
        return (
            <Container style={[part.wrapperContainer, {paddingBottom: 0}]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={color.backGround}
                />
                <ParallaxScrollView
                    backgroundColor={color.backGround}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={color.backGround}
                    stickyHeaderHeight={size.STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={100}
                    backgroundSpeed={10}
                    renderBackground={() => (
                        <View style={part.wrapperImageInGetFull}>
                            <View key="background">
                            </View>
                        </View>
                    )}
                    renderForeground={() => (
                        <View key="parallax-header" style={[parallaxStyle.parallaxHeaderTitle]}>
                            <View>
                                <CardItem style={[part.cardHeader, part.noPaddingTopBottom]}>
                                    <Item style={part.noBorder}>
                                        <Text style={part.titlePost} numberOfLines={1}>
                                            Những người thích bài viết
                                        </Text>
                                    </Item>
                                </CardItem>
                            </View>
                        </View>

                    )}
                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View style={part.iconInDrawerNav}>
                                <Left style={Platform.OS === 'ios' ? {
                                    flexDirection: 'row',
                                    marginTop: 20
                                } : {flexDirection: 'row'}}>
                                    <Body style={{padding: 30}}>
                                    <Text style={part.titleSmallDarkGrayBold} numberOfLines={1}>
                                        Những người thích bài viết
                                    </Text>
                                    </Body>
                                </Left>
                            </View>
                        </View>
                    )}
                    renderFixedHeader={() => (
                        <View key="fixed-header" style={part.iconInDrawerNav}>
                            <Left style={Platform.OS === 'ios' ? {marginTop: 20} : {marginTop: 10}}>
                                <BackButton goBack={goBack}/>
                            </Left>
                        </View>
                    )}
                >
                    {
                        isLoading
                            ?
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
                            :
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={likers}
                                renderItem={({item}) =>
                                    <CardItem
                                        avatar
                                        style={[part.backgroundNone, part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            style={{flex: 1}}
                                            onPress={() => this.props.navigation.navigate('UserInPostLiker', {username: item.username})}
                                        >
                                            <Left>
                                                <Image
                                                    style={part.avatarUserNormal}
                                                    source={{uri: item.avatar_url}}/>
                                                <Body style={part.noBorder}>
                                                <Text style={part.titleSmallBlue}>{item.name}</Text>
                                                </Body>
                                                <TouchableOpacity style={part.iconFollow}>
                                                    <Icon
                                                        name="ion|ios-person-add"
                                                        size={25}
                                                        color={color.navTitle}/>
                                                </TouchableOpacity>
                                            </Left>
                                        </TouchableOpacity>
                                    </CardItem>
                                }
                            />
                    }
                </ParallaxScrollView>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        likers: state.infoAboutPost.likers,
        isLoading: state.infoAboutPost.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        infoAboutPostAction: bindActionCreators(infoAboutPostAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostLiker);