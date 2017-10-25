import React, {Component} from 'react';
import {
    Image, TouchableOpacity, View, StatusBar
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
import MyAccountInformation from './MyAccountInformation';
import MyAccountProject from './MyAccountProject';
import MyAccountProgress from './MyAccountProgress';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class MyAccountContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 1,
            isLoading: false,
        }
    }

    componentWillMount() {
        this.props.userInformationAction.getUserProfile(this.props.user.username);
        this.props.userInformationAction.getUserProgress(this.props.user.username);
        this.props.userInformationAction.getUserProducts(this.props.user.username, 1, this.props.token);
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
                    <MyAccountProgress
                        user={this.props.user}
                        progress={this.props.progress}
                        isLoadingUserProgress={this.props.isLoadingUserProgress}
                    />
                );
            case 1 :
                return (
                    <MyAccountProject
                        navigation={this.props.navigation}
                        products={this.props.products}
                        isLoadingUserProducts={this.props.isLoadingUserProducts}
                    />
                );
            case 2 :
                return (
                    <MyAccountInformation
                        user={this.props.user}
                        isLoadingUserProfile={this.props.isLoadingUserProfile}
                    />
                );
        }
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <Container style={part.wrapperContainer}>
                <StatusBar
                    barStyle="light-content"
                />
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
                                    source={{
                                        uri: this.props.user.avatar_url,
                                        width: size.wid,
                                        height: size.PARALLAX_HEADER_HEIGHT
                                    }}/>
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

                                </Right>
                            </View>
                        </View>
                    }

                    renderForeground={() => (
                        <View key="parallax-header" style={parallaxStyle.parallaxHeader}>
                            <Item style={{borderBottomWidth: 0,}}>
                                <Body>
                                <Thumbnail style={part.marginBottom}
                                           circle large
                                           source={{uri: this.props.user.avatar_url}}
                                >
                                </Thumbnail>
                                <Text style={[part.titleNormalLight, part.paddingLine]}>{this.props.user.name}
                                </Text>
                                <Text style={[part.describeGray, part.paddingLine]}> {this.props.user.university}
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
        user: state.login.user,
        isLoadingUserProfile: state.myAccountInformation.isLoadingUserProfile,
        progress: state.myAccountInformation.progress,
        isLoadingUserProgress: state.myAccountInformation.isLoadingUserProgress,
        products: state.myAccountInformation.products,
        isLoadingUserProducts: state.myAccountInformation.isLoadingUserProducts,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInformationAction: bindActionCreators(userInformationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyAccountContainer);