import React, {Component} from 'react';
import {
    Image, TouchableOpacity, View, StatusBar
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, TabHeading, List, ListItem, Item
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as getUserProfileAction from '../../actions/getUserProfileAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {User} from '../../navigators/appRouter';

class userComponent extends Component {
    constructor() {
        super();
    }

    componentWillMount() {
        this.props.getUserProfileAction.getUserProfile(this.props.navigation.state.params.username);
        this.props.getUserProfileAction.getProgress(this.props.navigation.state.params.username);
        this.props.getUserProfileAction.getProductsOfUser(this.props.navigation.state.params.username, 1, this.props.token);
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                <StatusBar
                    hidden={true}
                />
                <View style={[part.wrapperImageInGetFull, part.shadow]}>
                    <Image
                        style={part.imageInUserProfile}
                        source={{uri: this.props.user.avatar_url}}/>

                    <View style={part.tabInGetFull}>
                        <Item style={{borderBottomWidth: 0,}}>
                            <Body>
                            <Thumbnail style={part.paddingLine}
                                       circle large
                                       source={{uri: this.props.user.avatar_url}}/>
                            <Text style={[part.titleNormalLight, part.paddingLine]}>{this.props.user.name}</Text>
                            <Text style={[part.describeGray, part.paddingLine]}>{this.props.user.university}</Text>
                            </Body>
                        </Item>
                    </View>
                    <View style={part.iconInDrawer}>
                        <Left>
                            <TouchableOpacity style={part.padding}
                                              onPress={() => this.props.navigation.goBack()}
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

                    <User/>
                <TouchableOpacity style={[part.iconAddFriendInProfile, part.shadow]}>
                        <Icon name="ion|ios-person-add"
                              size={30}
                              color={color.navTitle}/>
                </TouchableOpacity>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.getUserProfile.user,
        token: state.login.token,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(userComponent);