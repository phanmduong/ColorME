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

class CourseContainer extends Component {
    render() {
        const {goBack, navigate} = this.props.navigation;
        const {params} = this.props.navigation.state;
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
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={params.courses}
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
            </Container>
        );
    }
}


export default CourseContainer;