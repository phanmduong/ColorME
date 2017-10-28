import React, {Component} from 'react';
import {
    FlatList, Text, TouchableOpacity, View
} from 'react-native';

import {
    Body, CardItem, Header, Container,
    Left, Right, Spinner,
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color'
import * as size from '../../styles/size';
import FastImage from 'react-native-fast-image';
import * as courseAction from '../../actions/courseAction';
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
                <Header
                    style={part.navTop}
                    iosBarStyle='light-content'
                >
                    <Left>
                        <TouchableOpacity
                            onPress={() => goBack(null)}
                        >
                            <Icon name="entypo|chevron-thin-left"
                                  size={size.iconBig}
                                  color={color.navTitle}
                                  style={{zIndex: 100}}
                            />
                        </TouchableOpacity>

                    </Left>
                    <Body style={part.wrapperTextRight}>
                    <Text style={part.titleNormalLight}>Đăng ký khóa học</Text>
                    </Body>
                </Header>
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
                                            <FastImage
                                                style={part.avatarUserNormal}
                                                source={{uri: item.icon_url}}/>
                                            <Body style={part.noBorder}>
                                            <Text style={part.titleSmallBlue}>{item.name}</Text>
                                            </Body>
                                        </Left>
                                    </TouchableOpacity>
                                </CardItem>
                            }
                        />
                }

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