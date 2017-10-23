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

class UserProgress extends Component {
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
                                        <Card style={[part.noBorder]}>
                                            <CardItem style={[part.noBorder, part.cardProgress]}>
                                                <Left>
                                                    <FastImage style={part.avatarUserNormal}
                                                               source={{uri: item.icon_url}}/>
                                                    <Body>
                                                    <Text style={part.titleSmallDarkGrayBold}>{item.name}</Text>
                                                    <Text
                                                        style={part.titleSmallDarkGrayBold}>{item.study_time}</Text>
                                                    </Body>
                                                </Left>
                                            </CardItem>
                                        </Card>
                                    }/>

                        )
                }
            </Container>
        )
    }
}


export default UserProgress;