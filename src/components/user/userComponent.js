import React, {Component} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {
    Body,
    Button,
    Card,
    CardItem,
    CheckBox,
    Container,
    Content,
    Header,
    Item,
    Left,
    List,
    ListItem,
    Right,
    TabHeading,
    Text,
    Thumbnail,
    Title
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as userInformationAction from '../../actions/userInformationAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {User} from '../../navigators/appRouter';
class userComponent extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.userInformationAction.getUserProfile(this.props.navigation.state.params.username);
        this.props.userInformationAction.getUserProgress(this.props.navigation.state.params.username);
        this.props.userInformationAction.getUserProducts(this.props.navigation.state.params.username, 1, this.props.token);
    }
    render() {
        return (
            <Container style={part.wrapperContainer}>
                <View style={[part.wrapperImageInGetFull, part.shadow]}>
                    <View style={part.tabInGetFull}>
                        <Item style={{borderBottomWidth: 0,}}>
                            <Body>
                            <Thumbnail style={part.marginBottom}
                                       circle large
                                       source={{uri: this.props.user.avatar_url}}
                            >
                            </Thumbnail>
                            <Text style={[part.titleNormalLight, part.paddingLine]}>{this.props.user.name}
                                  </Text>
                            <Text style={[part.describeGray, part.paddingLine]}> {this.props.user.university} </Text>
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