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
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Group} from '../../navigators/appRouter';

class groupComponent extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <Container style={part.wrapperContainer}>
                <View style={[part.wrapperImageInGetFull, part.shadow]}>
                    <Image
                        style={part.imageInUserProfile}
                        source={{uri: ''}}/>

                    <View style={part.tabInGetFull}>
                        <Item style={{borderBottomWidth: 0,}}>
                            <Body>
                            <Thumbnail style={part.marginBottom}
                                       circle large
                                       source={{uri: ''}}/>
                            <Text style={[part.titleNormalLight, part.paddingLine]}>groupname</Text>
                            <Text style={[part.describeGray, part.paddingLine]}>member</Text>
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
                <Group/>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(groupComponent);