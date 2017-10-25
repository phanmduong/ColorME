import React, {Component} from 'react';
import {
    Image, TouchableOpacity, View,
} from 'react-native';
import {
    Container, Thumbnail, Text, Left, Body, Right, Item, Spinner
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import parallaxStyle from '../../styles/parallaxStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as groupAction from '../../actions/groupAction';
import GroupTopics from './GroupTopics';
import GroupProject from './GroupProject';
import GroupMembers from './GroupMembers';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class GroupContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            isLoading: false,
        }
    }

    componentWillMount() {
        const {params} = this.props.navigation.state;
        this.props.groupAction.getGroupTopics(params.group_link, this.props.token);
        this.props.groupAction.getGroupProducts(params.group_link, this.props.token);
        this.props.groupAction.getGroupMember(params.group_link, this.props.token);
    }

    ViewTopics() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 100);
        this.setState({tab: 0, isLoading: true})
    }

    ViewProducts() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 100);
        this.setState({tab: 1, isLoading: true})
    }

    ViewMembers() {
        setTimeout(() => {
            this.setState({isLoading: false})
        }, 100);
        this.setState({tab: 2, isLoading: true})
    }

    tab() {
        switch (this.state.tab) {
            case 0:
                return (
                    <GroupTopics
                        navigation={this.props.navigation}
                        topics={this.props.topics}
                        isLoadingGroupTopics={this.props.isLoadingGroupTopics}
                        groupName={this.props.groupName}

                    />
                );
            case 1 :
                return (
                    <GroupProject
                        navigation={this.props.navigation}
                        products={this.props.products}
                        isLoadingGroupProducts={this.props.isLoadingGroupProducts}
                        groupName={this.props.groupName}

                    />
                );
            case 2 :
                return (
                    <GroupMembers
                        navigation={this.props.navigation}
                        members={this.props.members}
                        isLoadingGroupMembers={this.props.isLoadingGroupMembers}
                        groupName={this.props.groupName}
                    />
                );
        }
    }


    render() {
        const {goBack} = this.props.navigation;
        const {isLoadingGroupTopics} = this.props;
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
                                        isLoadingGroupTopics
                                            ?
                                            ''
                                            :
                                            {uri: this.props.groupAvatar,}
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
                                           source={
                                               isLoadingGroupTopics
                                                   ?
                                                   ''
                                                   :
                                                   {uri: this.props.groupAvatar}
                                           }
                                >
                                </Thumbnail>
                                <Text style={[part.titleNormalLight, part.paddingLine]}>
                                    {
                                        isLoadingGroupTopics
                                            ?
                                            'Đang tải...'
                                            :
                                            this.props.groupName
                                    }
                                </Text>
                                <Text style={[part.describeGray, part.paddingLine]}>{
                                    isLoadingGroupTopics
                                        ?
                                        'Đang tải...'
                                        :
                                        `${this.props.members.length} thành viên`
                                }
                                </Text>
                                </Body>
                            </Item>
                        </View>
                    )}

                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View style={part.iconInDrawer}>
                                <Left style={{flexDirection: 'row'}}>
                                    <Body style={{left: 10}}>
                                        <Text style={[part.titleNormalLight, part.paddingLine]}>
                                            {this.props.groupName}
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
                            onPress={() => this.ViewTopics()}
                        >
                            <Text
                                style={this.state.tab == 0 ? part.describeDarkGray : part.describeGray}
                            >
                                Chủ đề
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={part.wrapperTextInTabBarUser}
                            onPress={() => this.ViewProducts()}
                        >
                            <Text
                                style={this.state.tab == 1 ? part.describeDarkGray : part.describeGray}
                            >
                                Dự án
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={part.wrapperTextInTabBarUser}
                            onPress={() => this.ViewMembers()}
                        >
                            <Text
                                style={this.state.tab == 2 ? part.describeDarkGray : part.describeGray}
                            >
                                Thành viên
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
        groupName: state.group.groupName,
        groupAvatar: state.group.groupAvatar,
        token: state.login.token,
        products: state.group.products,
        isLoadingGroupProducts: state.group.isLoadingGroupProducts,
        topics: state.group.topics,
        isLoadingGroupTopics: state.group.isLoadingGroupTopics,
        members: state.group.members,
        isLoadingGroupMembers: state.group.isLoadingGroupMembers,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        groupAction: bindActionCreators(groupAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GroupContainer);