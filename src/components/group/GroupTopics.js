import React, {Component} from 'react';
import {
    FlatList, View, TouchableOpacity, Image
} from 'react-native';
import {
    Content, Card, CardItem, Text, Thumbnail, Container,
    Left, Body, Right, Spinner
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';

class GroupTopics extends Component {
    render() {
        const {topics, isLoadingGroupTopics, groupName} = this.props;
        return (
            (isLoadingGroupTopics)
                ?
                <View style={part.wrapperIsLoading}>
                    <Spinner color={color.gray}/>
                </View>
                :
                (
                    <Container style={[part.wrapperContainer, part.noPaddingTop]}>
                        {
                            topics.length === 0
                                ?
                                <Body>
                                <Text style={[part.padding, part.titleGrayThin]}>
                                    {groupName} chưa tạo chủ đề nào.
                                </Text>
                                </Body>
                                :
                                <FlatList
                                    showsVerticalScrollIndicator={false}
                                    data={topics}
                                    renderItem={({item}) => {
                                        let widthDeadlineProgress = (size.wid - 20) * item.submitted_members / item.total_members;
                                        return (
                                            <View style={part.card}>
                                                <CardItem header style={part.cardHeader}>
                                                    <Left>
                                                        <TouchableOpacity
                                                            onPress={() => this.props.navigation.navigate('UserInGroup', {username: item.creator.username})}

                                                        >
                                                            <Thumbnail circle small
                                                                       source={{uri: item.creator.avatar_url}}/>
                                                        </TouchableOpacity>
                                                        <Body>
                                                        <Text
                                                            style={part.titleSmallBlue}>
                                                            {item.creator.name}
                                                        </Text>
                                                        <Text
                                                            style={part.describeItalicDark}>{item.created_at}</Text>
                                                        </Body>
                                                        <TouchableOpacity transparent>
                                                            <Icon name="materialCommunity|dots-horizontal"
                                                                  color={color.icon}
                                                                  size={size.iconGiant}
                                                                  style={part.paddingRight}
                                                            />
                                                        </TouchableOpacity>
                                                    </Left>
                                                </CardItem>
                                                {/*PHOTO*/}
                                                <TouchableOpacity
                                                    activeOpacity={1}
                                                    style={part.card}
                                                    onPress={() => this.props.navigation.navigate('Topic', {id: item.id})}
                                                >
                                                    <View
                                                        style={[part.wrapperImage]}
                                                    >
                                                        <Image
                                                            resizeMode={'cover'}
                                                            source={{uri: item.thumb_url}}
                                                            style={[part.image]}
                                                        />

                                                    </View>
                                                    <View style={part.textInImage}>
                                                        <Text
                                                            numberOfLines={2}
                                                            style={part.titleInImage}
                                                        >
                                                            {item.title}
                                                        </Text>
                                                    </View>
                                                </TouchableOpacity>
                                                {/*DEADLINE*/}
                                                <CardItem style={[{height: 20, justifyContent:'center'}]}>
                                                    <View style={part.wrapperDeadline}>
                                                        <View
                                                            style={[part.deadlineProgress, {width: widthDeadlineProgress}]}>

                                                        </View>
                                                    </View>
                                                </CardItem>
                                                <CardItem footer style={[part.cardFooter, {paddingRight: 25}]}>
                                                    <Left>
                                                        <Right>
                                                            <Text style={[part.describeGray, {right: 0}]}>
                                                                {item.deadline}
                                                                - {item.submitted_members}/{item.total_members} đã nộp
                                                            </Text>
                                                        </Right>
                                                    </Left>
                                                </CardItem>
                                            </View>
                                        )
                                    }}/>

                        }
                    </Container>
                )

        )
    }
}


export default GroupTopics;