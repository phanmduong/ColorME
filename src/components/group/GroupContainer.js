import React, {Component} from 'react';
import {
    Image, TouchableOpacity, View,
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, TabHeading, List, ListItem, Item, Spinner
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

class GroupComponent extends Component {
    constructor() {
        super();
        this.state = {
            tab: 1,
        }
    }

    componentDidMount() {
        const {params} = this.props.navigation.state;
        this.props.groupAction.getGroupTopics(params.group_link, this.props.token);
        this.props.groupAction.getGroupProducts(params.group_link, this.props.token);
        this.props.groupAction.getGroupMember(params.group_link, this.props.token);
    }

    tab(){
        switch (this.state.tab){
            case 0:
                return(
                    <GroupTopics
                        topics={this.props.topics}
                        isLoadingGroupTopics={this.props.isLoadingGroupTopics}

                    />
                );
            case 1 :
                return(
                    <GroupProject
                        products={this.props.products}
                        isLoadingGroupProducts={this.props.isLoadingGroupProducts}

                    />
                );
            case 2 :
                return(
                    <GroupMembers
                        members={this.props.members}
                        isLoadingGroupMembers={this.props.isLoadingGroupMembers}
                    />
                );
        }
    }


    render() {
        const {goBack} = this.props.navigation;
        return (
            <Container style={part.wrapperContainer}>
                <ParallaxScrollView
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
                                        uri: this.props.groupAvatar,
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
                            <Item style={{borderBottomWidth: 0,}}>
                                <Body>
                                <Thumbnail style={part.marginBottom}
                                           circle large
                                           source={{uri: this.props.groupAvatar}}
                                >
                                </Thumbnail>
                                <Text style={[part.titleNormalLight, part.paddingLine]}>
                                    {this.props.groupName}
                                </Text>
                                <Text style={[part.describeGray, part.paddingLine]}>
                                    {this.props.members.length}
                                    &nbsp;thành viên
                                </Text>
                                </Body>
                            </Item>
                        </View>
                    )}

                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View style={part.iconInDrawer}>
                                <Left style={{flexDirection: 'row'}}>
                                    <Right style={{left: 10}}>
                                        <Text style={[part.titleNormalLight, part.paddingLine]}>
                                            {this.props.groupName}
                                        </Text>
                                    </Right>
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
                            onPress={() => this.setState({tab: 0})}
                        >
                            <Text
                                style={this.state.tab == 0 ? part.describeDarkGray : part.describeGray}
                            >
                                Chủ đề
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={part.wrapperTextInTabBarUser}
                            onPress={() => this.setState({tab: 1})}
                        >
                            <Text
                                style={this.state.tab == 1 ? part.describeDarkGray : part.describeGray}
                            >
                                Dự án
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={part.wrapperTextInTabBarUser}
                            onPress={() => this.setState({tab: 2})}
                        >
                            <Text
                                style={this.state.tab == 2 ? part.describeDarkGray : part.describeGray}
                            >
                                Thành viên
                            </Text>
                        </TouchableOpacity>
                    </View>
                    {this.tab()}
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

export default connect(mapStateToProps, mapDispatchToProps)(GroupComponent);