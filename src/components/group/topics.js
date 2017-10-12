import React, {Component} from 'react';
import {
    FlatList, Image, View, TouchableOpacity
} from 'react-native';
import {
    Content, Card, CardItem, Text, Thumbnail,
    Left, Body, Right, List, ListItem, Spinner
} from 'native-base';
import Icon from '../../commons/Icon';
import moment from 'moment';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import {connect} from 'react-redux';

class topics extends Component {
    render() {

        return (
            (this.props.isLoadingGroupTopics)
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
                    <Content
                        showsVerticalScrollIndicator={false}
                        style={[part.wrapperContainer, part.padding]}>
                        {
                            this.props.topics.map((item, i) => {
                                let created = item.created_time;
                                let deadline = item.deadline_raw;
                                let timeLimit  = moment.duration(moment(deadline).diff(moment(created))).asHours();
                                let now = moment().format('YYYY-MM-DD HH:mm:ss');
                                let timeRemaining = moment.duration(moment(deadline).diff(moment(now))).asHours();
                                let widthDeadlineProgress = 0;
                                if(timeRemaining > 0){
                                    widthDeadlineProgress = ((size.wid - 30) * (timeLimit - timeRemaining ))/ timeLimit ;
                                } else {
                                    widthDeadlineProgress = size.wid - 30;
                                }
                                return (
                                    <Card key={i} style={part.card}>
                                        <CardItem header style={part.cardHeader}>
                                            <Left>
                                                <TouchableOpacity
                                                    onPress={() => this.props.navigation.navigate('UserInNewFeed', {username: item.creator.username})}

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
                                                          size={size.icon}
                                                          style={part.paddingRight}
                                                    />
                                                </TouchableOpacity>
                                            </Left>
                                        </CardItem>
                                        <CardItem cardBody style={part.card}>
                                            <TouchableOpacity

                                            >
                                                <Body>
                                                <Image
                                                    resizeMode={'cover'}
                                                    source={{uri: item.avatar_url}}
                                                    style={[part.image, part.shadow]}
                                                />
                                                <View style={part.textInImage}>
                                                    <Text
                                                        numberOfLines={2}
                                                        style={[part.padding, {paddingLeft: 15}, part.titleInImage]}
                                                    >
                                                        {item.title}
                                                    </Text>
                                                </View>
                                                </Body>
                                            </TouchableOpacity>
                                        </CardItem>

                                        <CardItem style={[{height: 20}, part.noPadding]}>
                                            <View style={part.wrapperDeadline}>
                                                <View style={[part.deadlineProgress, {width: widthDeadlineProgress}]}>

                                                </View>
                                            </View>
                                        </CardItem>
                                        <CardItem footer style={part.cardFooter}>
                                            <Left>
                                                <Right>
                                                    <Text style={[part.describeGray, {right: 0}]}>
                                                        {item.deadline} - {item.submitted_members}/{item.total_members} đã nộp
                                                    </Text>
                                                </Right>
                                            </Left>

                                        </CardItem>
                                    </Card>
                                )
                            })
                        }
                    </Content>
                )

        )
    }
}

function mapStateToProps(state) {
    return {
        topics: state.group.topics,
        isLoadingGroupTopics: state.group.isLoadingGroupTopics,
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(topics);