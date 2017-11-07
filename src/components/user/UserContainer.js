import React, {Component} from 'react';
import {
    TouchableOpacity, View, Platform
} from 'react-native';
import {
    Body, Container, Spinner,
    Item, Left, Right, Text, Thumbnail,
} from 'native-base';
import BackButton from '../../commons/BackButton';
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
            id: 0,
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
        const {user, isLoadingUserProfile,  dataSideNav, isLoadingUserSideNav} = this.props;
        return (
            <Container style={part.wrapperContainer}>
                <ParallaxScrollView
                    backgroundColor={color.backGround}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={color.backGround}
                    stickyHeaderHeight={size.STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={size.PARALLAX_HEADER_HEIGHT_USER}
                    backgroundSpeed={10}
                    renderBackground={() =>
                        <View style={part.wrapperImageInGetFull}>
                            <View key="background">
                            </View>
                        </View>
                    }
                    renderForeground={() => (
                        <View key="parallax-header" style={[parallaxStyle.parallaxHeader, {flexDirection: 'row'}]}>
                            <View style={part.wrapperAvatarUser}>
                                <Thumbnail
                                    circle large
                                    source={{uri: user.avatar_url}}
                                >
                                </Thumbnail>

                            </View>
                            <View style={part.wrapperInformationUser}>
                                <Text style={[part.titleNormalDarkGray, part.paddingLine]}> {this.props.user.name}
                                </Text>
                                <Text style={[part.describeGray, part.paddingLine]}> {user.university}
                                </Text>
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
                                <Body>
                                    <Text style={part.titleSmallDarkGrayBold}>
                                        {this.props.user.name}
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
                            <View style={part.wrapperIsLoading}>
                                <Spinner color={color.gray}/>
                            </View>
                            :
                            this.tab()
                    }
                    {/*<TouchableOpacity style={[part.iconAddFriendInProfile, part.shadow]}>*/}
                        {/*<Icon name="ion|ios-person-add"*/}
                              {/*size={30}*/}
                              {/*color={color.navTitle}/>*/}
                    {/*</TouchableOpacity>*/}
                </ParallaxScrollView>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.userInformation.user,
        products: state.userInformation.products,
        progress: state.userInformation.progress,
        isLoadingUserProgress: state.userInformation.isLoadingUserProgress,
        isLoadingUserProducts: state.userInformation.isLoadingUserProducts,
        isLoadingUserProfile: state.userInformation.isLoadingUserProfile,
        token: state.login.token,
        isLoading: state.changeAvatar.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInformationAction: bindActionCreators(userInformationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer);