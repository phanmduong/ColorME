import React, {Component} from 'react';
import {
    FlatList, Text, TouchableOpacity, View, Platform, Image, StatusBar
} from 'react-native';

import {
    Body, CardItem, Header, Container, Content,
    Left, Right, Spinner, Item
} from 'native-base';
import part from '../styles/partStyle';
import * as color from '../styles/color'
import * as courseAction from '../actions/courseAction';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class CourseContainer extends Component {
    componentWillMount() {
        this.props.courseAction.getCourse(this.props.token);
    }

    render() {
        const {goBack, navigate} = this.props.navigation;
        const {isLoading, courses} = this.props;
        return (
            <Container style={[part.wrapperContainer, {paddingBottom: 0}]}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor={color.none}

                />
                {
                    Platform.OS === 'ios'
                        ?
                        <View style={part.wrapperStatusBarNoPadding}>
                        </View>
                        :
                        <View/>
                }
                <Content
                    showsVerticalScrollIndicator={false}
                >
                    <Item style={[part.noBorder, {paddingLeft: 15}]}>
                        <TouchableOpacity>
                            <Text style={[part.titleLargeDarkBold, part.paddingLineFar]}>
                                Đăng ký học
                            </Text>
                        </TouchableOpacity>
                    </Item>
                    {
                        isLoading
                            ?
                            <View
                                style={{
                                    marginTop: -100,
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Spinner
                                    color={color.gray}/>
                            </View>
                            :
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={courses}
                                renderItem={({item}) =>
                                    <CardItem
                                        avatar
                                        style={[part.backgroundNone, part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            style={{flex: 1}}
                                            onPress={() => navigate('CourseInFormation', {linkId: item.linkId})}
                                        >
                                            <Left>
                                                <Image
                                                    style={part.avatarUserNormal}
                                                    source={{uri: item.icon_url}}/>
                                                <Body style={part.noBorder}>
                                                <Text style={part.titleSmallBlue}>{item.name}</Text>
                                                <Text
                                                    style={[part.describeItalicDark, part.paddingLine]}>
                                                    {item.duration} buổi học
                                                </Text>
                                                </Body>
                                            </Left>
                                        </TouchableOpacity>
                                    </CardItem>
                                }
                            />
                    }
                </Content>
            </Container>
        );
    }
}



function mapStateToProps(state) {
    return {
        token: state.login.token,
        courses: state.getCourse.courses,
        isLoading: state.getCourse.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        courseAction: bindActionCreators(courseAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CourseContainer);