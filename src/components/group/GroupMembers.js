import React, {Component} from 'react';
import {
    View, FlatList, TouchableOpacity
} from 'react-native';
import {
    Container, Card, CardItem, Thumbnail, Text,
    Left, Body, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import Icon from '../../commons/Icon';
import * as color from '../../styles/color';

class GroupMembers extends Component {
    render() {
        const {members, isLoadingGroupMembers, groupName} = this.props;
        return (
            <Container style={part.wrapperContainer}>
                {
                    (isLoadingGroupMembers)
                        ?
                        <View style={part.wrapperIsLoading}>
                            <Spinner color={color.gray}/>
                        </View>
                        :
                        (
                            <View>
                                {
                                    members.length === 0
                                        ?
                                        <Body>
                                            <Text style={[part.padding, part.titleSmallDarkGrayBold]}>
                                                {groupName} chưa có thành viên nào.
                                            </Text>
                                        </Body>
                                        :
                                        <FlatList
                                            showsVerticalScrollIndicator={false}
                                            data={members}
                                            renderItem={({item}) =>
                                                <CardItem avatar style={[part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                                    <Left>
                                                        <TouchableOpacity
                                                            onPress={() => this.props.navigation.navigate('UserInNewFeed', {username: item.username})}
                                                        >
                                                            <Thumbnail
                                                                source={{uri: item.avatar_url}}/>
                                                        </TouchableOpacity>

                                                        <Body style={part.noBorder}>
                                                        <TouchableOpacity
                                                            onPress={() => this.props.navigation.navigate('UserInNewFeed', {username: item.username})}
                                                        >
                                                            <Text style={part.titleSmallBlue}>{item.name}</Text>
                                                            <Text style={part.describeGray} note>
                                                                {item.university}
                                                            </Text>
                                                        </TouchableOpacity>
                                                        </Body>
                                                        <TouchableOpacity style={part.iconFollow}>
                                                            <Icon name="ion|ios-person-add"
                                                                  size={30}
                                                                  color={color.navTitle}/>
                                                        </TouchableOpacity>
                                                    </Left>
                                                </CardItem>
                                            }
                                        />
                                }
                            </View>

                        )
                }
            </Container>
        )
    }
}


export default GroupMembers;