import React, {Component} from 'react';
import {
    FlatList, Text, TouchableOpacity, View, StatusBar,
    Image, Platform
} from 'react-native';

import {
    Body, CardItem, Header, Container, Item, Content,
    Left, Right, Spinner,
} from 'native-base';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import part from '../../styles/partStyle';
import BackButton from '../../commons/BackButton';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import parallaxStyle from '../../styles/parallaxStyle';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as sideNavAction from '../../actions/sideNavAction';

class AttendGroupContainer extends Component {
    componentWillMount() {
        this.props.sideNavAction.getSideNav(this.props.user.id);
    }

    render() {
        const {goBack, navigate} = this.props.navigation;
        const {attendGroup, isLoading} = this.props;
        return (
            <Container style={[part.wrapperContainer, {paddingBottom: 0}]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={color.none}
                />
                <ParallaxScrollView
                    backgroundColor={color.backGround}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={color.backGround}
                    stickyHeaderHeight={size.STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={80}
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
                                           Nhóm tham gia
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
                                        Nhóm tham gia
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
                <View>
                    {
                        isLoading
                            ?
                            <View
                                style={{
                                    marginTop: -100,
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Spinner
                                    color={color.gray}/>
                            </View>
                            :
                            attendGroup.length == 0
                                ?
                                <Body>
                                <Text style={[part.padding, part.titleSmallDarkGrayBold]}>Bạn chưa tham gia nhóm
                                    nào.</Text>
                                </Body>
                                :
                                <View style={{marginTop: 20}}>
                                    <FlatList
                                        showsVerticalScrollIndicator={false}
                                        data={attendGroup}
                                        renderItem={({item}) =>
                                            <CardItem avatar style={[part.noBorder, part.cardProgress, part.haveBorderBottom, part.noMargin, {paddingTop: 12, paddingBottom: 12}]}>
                                                <TouchableOpacity
                                                    activeOpacity={0.8}
                                                    style={{flex: 1}}
                                                    onPress={() => navigate('GroupInDrawer', {group_link: `/group/${item.link}`})}
                                                >
                                                    <Left>
                                                        <Image
                                                            style={part.avatarUserNormal}
                                                            source={{uri: item.avatar_url}}/>
                                                        <Body style={part.noBorder}>
                                                        <Text style={part.titleSmallBlue}>{item.name}</Text>
                                                        <Text style={part.titleSmallDarkGrayBold}>{item.mems_count} thành
                                                            viên</Text>
                                                        </Body>
                                                    </Left>
                                                </TouchableOpacity>
                                            </CardItem>
                                        }
                                    />
                                </View>

                    }

                </View>
                </ParallaxScrollView>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user,
        attendGroup: state.sideNav.attendGroup,
        isLoading: state.sideNav.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        sideNavAction: bindActionCreators(sideNavAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AttendGroupContainer);