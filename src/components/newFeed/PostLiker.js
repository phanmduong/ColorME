import React, {Component} from 'react';
import {
    FlatList, Text, TouchableOpacity, View
} from 'react-native';

import {
    Body, CardItem, Header, Container,
    Left, Right, Spinner, Title
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color'
import * as size from '../../styles/size';
import BackButtonHeader from '../../commons/BackButtonHeader';
import * as infoAboutPostAction from '../../actions/infoAboutPostAction'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import FastImage from 'react-native-fast-image';

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
                <Header
                    style={part.navTop}
                    iosBarStyle='light-content'
                >
                    <Left style={{flexDirection: 'row'}}>
                        <BackButtonHeader goBack={goBack}/>
                        <Body>
                        <Text style={part.titleNormalLightNav}>Người thích bài viết</Text>
                        </Body>
                    </Left>

                </Header>
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
                                            <FastImage
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