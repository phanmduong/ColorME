import React, {Component} from 'react';
import {
    Image, TouchableOpacity, View,
} from 'react-native';
import {
    Body, Container, Spinner,
    Item, Left, Right, Text, Thumbnail,
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import parallaxStyle from '../../styles/parallaxStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as userInformationAction from '../../actions/userInformationAction';
import UserProgress from './UserProgress';
import UserProject from './UserProject';
import UserInformation from './UserInformation';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class UserContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 1,
            isLoading: false,
        }
    }

    componentWillMount() {
        const {params} = this.props.navigation.state;
        this.props.userInformationAction.getUserProfile(params.username);
        this.props.userInformationAction.getUserProgress(params.username);
        this.props.userInformationAction.getUserProducts(params.username, 1, this.props.token);
    }

    ViewProgress() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 100);
        this.setState({tab: 0, isLoading: true})
    }

    ViewProject() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 100);
        this.setState({tab: 1, isLoading: true})
    }

    ViewInformation() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 100);
        this.setState({tab: 2, isLoading: true})
    }

    tab() {
        switch (this.state.tab) {
            case 0:
                return (
                    <UserProgress
                        user={this.props.user}
                        progress={this.props.progress}
                        isLoadingUserProgress={this.props.isLoadingUserProgress}
                    />
                );
            case 1 :
                return (
                    <UserProject
                        user={this.props.user}
                        navigation={this.props.navigation}
                        products={this.props.products}
                        isLoadingUserProducts={this.props.isLoadingUserProducts}
                    />
                );
            case 2 :
                return (
                    <UserInformation
                        user={this.props.user}
                        isLoadingUserProfile={this.props.isLoadingUserProfile}
                    />
                );
        }
    }

    render() {
        const {goBack} = this.props.navigation;
        const {user, isLoadingUserProducts} = this.props;
        return (
            <Container style={part.wrapperContainer}>
                <ParallaxScrollView
                    backgroundColor={color.main}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={color.main}
                    stickyHeaderHeight={size.STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={size.PARALLAX_HEADER_HEIGHT}
                    backgroundSpeed={10}
                    renderBackground={() =>
                        <View style={part.wrapperImageInGetFull}>
                            <View key="background">
                                <Image
                                    style={{width: size.wid, height: size.PARALLAX_HEADER_HEIGHT}}
                                    source={
                                        isLoadingUserProducts
                                            ?
                                            {}
                                            :
                                            {uri: user.avatar_url}
                                    }/>
                                <View style={{
                                    position: 'absolute',
                                    top: 0,
                                    width: size.wid,
                                    backgroundColor: 'rgba(0,0,0,.8)',
                                    height: size.PARALLAX_HEADER_HEIGHT
                                }}/>
                            </View>
                            <View style={part.iconInDrawer}>
                                <Right style={{left: 10}}>
                                    <TouchableOpacity style={part.padding}
                                    >
                                        <Icon name="materialCommunity|seal"
                                              size={size.iconBig}
                                              color={color.navTitle}/>
                                    </TouchableOpacity>
                                </Right>
                            </View>
                        </View>
                    }

                    renderForeground={() => (
                        <View key="parallax-header" style={parallaxStyle.parallaxHeader}>
                            <Item style={[part.noBorder, part.marginStatusBar]}>
                            <Body>
                                <Thumbnail style={part.marginBottom}
                                           circle large
                                           source={
                                               isLoadingUserProducts
                                                   ?
                                                   {}
                                                   :
                                                   {uri: user.avatar_url}
                                           }
                                >
                                </Thumbnail>
                                <Text style={[part.titleNormalLight, part.paddingLine]}>{
                                    isLoadingUserProducts
                                        ?
                                        'Đang tải...'
                                        :
                                        user.name
                                }
                                </Text>
                                <Text style={[part.describeGray, part.paddingLine]}>{
                                    isLoadingUserProducts
                                        ?
                                        'Đang tải...'
                                        :
                                        user.university
                                }
                                </Text>
                                </Body>
                            </Item>
                        </View>
                    )}

                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View style={part.iconInDrawerNav}>
                                <Left style={{flexDirection: 'row', marginTop: 20,}}>
                                    <Body style={{left: 10}}>
                                        <Text style={[part.titleNormalLight, part.paddingLine]}>
                                            {this.props.user.name}
                                        </Text>
                                    </Body>
                                </Left>
                            </View>
                        </View>
                    )}

                    renderFixedHeader={() => (
                        <View key="fixed-header" style={part.iconInDrawerNav}>
                            <Left style={{flexDirection: 'row', marginTop: 20,}}>
                                <TouchableOpacity
                                    style={part.padding}
                                    onPress={() => goBack(null)}
                                >
                                    <Icon name="entypo|chevron-thin-left"
                                          size={size.iconBig}
                                          color={color.navTitle}
                                          style={{zIndex: 100}}
                                    />
                                </TouchableOpacity>
                            </Left>
                        </View>

                    )}
                >
                    <View style={part.wrapperTabBarUser}>
                        <TouchableOpacity
                            style={part.wrapperTextInTabBarUser}
                            onPress={() => this.ViewProgress()}
                        >
                            <Text
                                style={this.state.tab == 0 ? part.describeDarkGray : part.describeGray}
                            >
                                Tiến độ
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={part.wrapperTextInTabBarUser}
                            onPress={() => this.ViewProject()}
                        >
                            <Text
                                style={this.state.tab == 1 ? part.describeDarkGray : part.describeGray}
                            >
                                Dự án
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={part.wrapperTextInTabBarUser}
                            onPress={() => this.ViewInformation()}
                        >
                            <Text
                                style={this.state.tab == 2 ? part.describeDarkGray : part.describeGray}
                            >
                                Thông tin
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {
                        this.state.isLoading
                            ?
                            <View style={[part.wrapperContainer]}>
                                <Spinner color={color.gray}/>
                            </View>
                            :
                            this.tab()
                    }
                    <TouchableOpacity style={[part.iconAddFriendInProfile, part.shadow]}>
                        <Icon name="ion|ios-person-add"
                              size={30}
                              color={color.navTitle}/>
                    </TouchableOpacity>
                </ParallaxScrollView>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userInformation.user,
        progress: state.userInformation.progress,
        isLoadingUserProgress: state.userInformation.isLoadingUserProgress,
        products: state.userInformation.products,
        isLoadingUserProducts: state.userInformation.isLoadingUserProducts,
        isLoadingUserProfile: state.userInformation.isLoadingUserProfile,
        token: state.login.token,
        isLoading: state.changeAvatar.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInformationAction: bindActionCreators(userInformationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);