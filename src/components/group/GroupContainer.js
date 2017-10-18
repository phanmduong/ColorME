import React, {Component} from 'react';
import {
    Image, TouchableOpacity, View, Dimensions, StyleSheet,
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, TabHeading, List, ListItem, Item, Spinner
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as groupAction from '../../actions/groupAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Group} from '../../navigators/appRouter';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class groupComponent extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.groupAction.getGroupTopics(this.props.navigation.state.params.group_link, this.props.token);
        this.props.groupAction.getGroupProducts(this.props.navigation.state.params.group_link, this.props.token);
        this.props.groupAction.getGroupMember(this.props.navigation.state.params.group_link, this.props.token);
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <Container style={part.wrapperContainer}>
                <ParallaxScrollView
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor="#333"
                    stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                    backgroundSpeed={10}
                    renderBackground={() =>
                        <View style={[part.wrapperImageInGetFull, part.shadow]}>
                            <View key="background">
                                <Image
                                    source={{
                                        uri: this.props.groupAvatar,
                                        width: window.width,
                                        height: PARALLAX_HEADER_HEIGHT
                                    }}/>
                                <View style={{
                                    position: 'absolute',
                                    top: 0,
                                    width: window.width,
                                    backgroundColor: 'rgba(0,0,0,.4)',
                                    height: PARALLAX_HEADER_HEIGHT
                                }}/>

                            </View>
                            <View style={[part.iconInDrawer, {zIndex: 500}]}>
                                <Left>
                                    <TouchableOpacity style={part.padding}
                                                      onPress={() => goBack(null)}
                                    >
                                        <Icon name="entypo|chevron-thin-left"
                                              size={size.iconBig}
                                              color={color.navTitle}
                                              style={{zIndex: 100}}
                                        />
                                    </TouchableOpacity>
                                </Left>
                                <Right style={{left: 10}}>
                                    <TouchableOpacity
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
                        <View key="parallax-header" style={styles.parallaxHeader}>
                            <Item style={{borderBottomWidth: 0,}}>
                                <Body>
                                <Thumbnail style={part.marginBottom}
                                           circle large
                                           source={{uri: this.props.groupAvatar}}
                                >
                                </Thumbnail>
                                <Text style={[part.titleNormalLight, part.paddingLine]}>{this.props.groupName}
                                </Text>
                                {
                                    (this.props.members)
                                        ?
                                        (
                                            <Text style={[part.describeGray, part.paddingLine]}>
                                                {this.props.members.length}
                                                &nbsp;thành viên
                                            </Text>
                                        )
                                        :
                                        (
                                            <Text style={[part.describeGray, part.paddingLine]}>
                                                Chưa có thành viên nào
                                            </Text>
                                        )
                                }
                                </Body>
                            </Item>
                        </View>
                    )}
                    renderStickyHeader={() => (
                        <View key="sticky-header" style={styles.stickySection}>
                            <View style={part.iconInDrawer}>
                                <Left style={{flexDirection: 'row'}}>
                                    <TouchableOpacity style={part.padding}
                                                      onPress={() => goBack(null)}
                                    >
                                        <Icon name="entypo|chevron-thin-left"
                                              size={size.iconBig}
                                              color={color.navTitle}
                                              style={{zIndex: 100}}
                                        />
                                    </TouchableOpacity>
                                    <Right style={{left: 10}}>
                                        <Text style={[part.titleNormalLight, part.paddingLine]}>{this.props.groupName}
                                        </Text>
                                    </Right>
                                </Left>
                            </View>
                        </View>
                    )}
                >
                    <Group/>
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

const window = Dimensions.get('window');

const PARALLAX_HEADER_HEIGHT = 250;
const STICKY_HEADER_HEIGHT = 80;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        justifyContent: 'center',
        backgroundColor: color.navTabBar
    },
    parallaxHeader: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'column',
    },
});

function mapStateToProps(state) {
    return {
        members: state.group.members,
        groupName: state.group.groupName,
        groupAvatar: state.group.groupAvatar,
        token: state.login.token,
        isLoadingGroupProducts: state.group.isLoadingGroupProducts,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        groupAction: bindActionCreators(groupAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(groupComponent);