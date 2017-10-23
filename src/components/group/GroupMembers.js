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
        const {members, isLoadingGroupMembers} = this.props;
        return (
            <Container style={[part.wrapperContainer, part.padding]}>
                {
                    (isLoadingGroupMembers)
                        ?
                        (
                            <View
                                style={{
                                    flex: 1,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Spinner
                                    color={color.gray}/>
                            </View>
                        )
                        :
                        (
                            <FlatList
                                showsVerticalScrollIndicator={false}
                                data={members}
                                renderItem={({item}) =>
                                    <CardItem avatar style={[part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                        <Left>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('UserStack', {username: item.username})}
                                            >
                                                <Thumbnail
                                                    source={{uri: item.avatar_url}}/>
                                            </TouchableOpacity>

                                            <Body style={part.noBorder}>
                                            <TouchableOpacity>
                                                <Text style={part.titleSmallBlue}>{item.name}</Text>
                                            </TouchableOpacity>
                                            <Text style={part.describeGray} note>
                                                {item.university}
                                            </Text>
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
                        )
                }
            </Container>
        )
    }
}


export default GroupMembers;