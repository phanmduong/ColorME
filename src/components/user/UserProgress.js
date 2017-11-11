import React, {Component} from 'react';
import {
    FlatList, View, Image, TouchableOpacity
} from 'react-native';
import {
    Container, Card, CardItem, Text, Left, Body, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import Icon from '../../commons/Icon';

class UserProgress extends Component {
    render() {
        const {user, progress, isLoadingUserProgress} = this.props;
        return (
            <Container
                style={[part.wrapperContainer, part.paddingLBR]}>
                {

                    (isLoadingUserProgress)
                        ?
                        <View style={part.wrapperIsLoading}>
                            <Spinner color={color.gray}/>
                        </View>
                        :
                        (
                            progress.length == 0
                                ?
                                <Body>
                                <Text style={[part.padding, part.titleGrayThin]}>
                                    {user.name} chưa tham gia khóa học nào.
                                </Text>
                                </Body>
                                :
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    onEndReachedThreshold={5}
                                    data={progress}
                                    renderItem={({item}) =>
                                        <View style={[part.noBorder]}>
                                            <CardItem style={[part.noBorder, part.cardProgress, part.haveBorderBottom]}>
                                                    <Left>
                                                        <TouchableOpacity
                                                            onPress={() => navigate('GroupInUser', )}
                                                        >
                                                            <Image style={part.avatarUserNormal}
                                                                   source={{uri: item.icon_url}}/>
                                                        </TouchableOpacity>

                                                        <Body>
                                                        <Text style={part.titleSmallDarkGrayBold}>{item.name}</Text>
                                                        <Text
                                                            style={part.titleSmallDarkGrayBold}>{item.study_time}
                                                        </Text>
                                                        <View style={[{flexDirection: 'row'}, part.paddingLine]}>
                                                            {
                                                                item.attendances.map((item, i) => {
                                                                    return (
                                                                        <Icon key={i}
                                                                              name="fontawesome|circle"
                                                                              style={part.paddingRight}
                                                                              size={12}
                                                                              color={item.status == 1 ? color.green : color.icon}
                                                                        />
                                                                    );
                                                                })
                                                            }
                                                        </View>
                                                        </Body>
                                                    </Left>
                                            </CardItem>
                                        </View>
                                    }/>
                        )
                }
            </Container>
        )
    }
}


export default UserProgress;