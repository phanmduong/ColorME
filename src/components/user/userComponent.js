import React, {Component} from 'react';
import {
    Image, TouchableOpacity, View, Dimensions, StyleSheet,
} from 'react-native';
import {
    Body, Button, Card, CardItem, CheckBox, Container, Content, Header,
    Item, Left, List, ListItem, Right, TabHeading, Text, Thumbnail, Title
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as userInformationAction from '../../actions/userInformationAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {User} from '../../navigators/appRouter';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

class userComponent extends Component {

    componentDidMount() {
        const {params} = this.props.navigation.state;
        this.props.userInformationAction.getUserProfile(params.username);
        this.props.userInformationAction.getUserProgress(params.username);
        this.props.userInformationAction.getUserProducts(params.username, 1, this.props.token);
    }

    render() {
        const {goBack} = this.props.navigation;
        return (
            <Container style={part.wrapperContainer}>
                <ParallaxScrollView
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={color.main}
                    stickyHeaderHeight={STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
                    backgroundSpeed={10}
                    renderBackground={() =>
                        <View style={part.wrapperImageInGetFull}>
                            <View key="background">
                                <Image
                                    source={{
                                        uri: this.props.user.avatar_url,
                                        width: window.width,
                                        height: PARALLAX_HEADER_HEIGHT
                                    }}/>
                                <View style={{
                                    position: 'absolute',
                                    top: 0,
                                    width: window.width,
                                    backgroundColor: 'rgba(0,0,0,.7)',
                                    height: PARALLAX_HEADER_HEIGHT
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
                        <View key="parallax-header" style={styles.parallaxHeader}>
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
                        <View key="sticky-header" style={[styles.stickySection, {visibility: 'hidden'}]}>
                            <View style={part.iconInDrawerNav}>
                                <Left style={{flexDirection: 'row', marginTop: 20,}}>
                                    <Right style={{left: 10}}>
                                        <Text style={[part.titleNormalLight, part.paddingLine]}>{this.props.user.name}
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
                    <User/>
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
const STICKY_HEADER_HEIGHT = 60;

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
        backgroundColor: color.main
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
        user: state.userInformation.user,
        token: state.login.token,
        isLoading: state.changeAvatar.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInformationAction: bindActionCreators(userInformationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(userComponent);