import React, {Component} from 'react';
import {
    FlatList, View
} from 'react-native';
import {
    Container, Card, CardItem, Text, Left, Body, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import FastImage from 'react-native-fast-image';
import Icon from '../../commons/Icon';

class UserProgress extends Component {
    constructor() {
        super();
        this.state = {
            class: [0, 1, 2, 3, 4, 5, 6, 7]
        }
    }

    render() {
        const {user, progress, isLoadingUserProgress} = this.props;
        return (
            <Container
                style={[part.wrapperContainer, part.padding]}>
                {

                    (isLoadingUserProgress)
                        ?
                        (<View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Spinner
                                color={color.gray}/>
                        </View>)
                        :
                        (
                            !progress
                                ?
                                <Body>
                                <Text style={[part.padding, part.titleSmallDarkGrayBold]}>
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
                                                    <FastImage style={part.avatarUserNormal}
                                                               source={{uri: item.icon_url}}/>
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
                                                                              size={17}
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