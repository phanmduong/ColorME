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
            <Content
                showsVerticalScrollIndicator={false}
                style={[part.wrapperContainer, part.padding]}>
                {
                    this.props.topics.map((item, i) => {
                        let deadlineTime = moment(item.deadline_raw, "YYYY-MM-DD h:mm:ss").fromNow();
                        // size.wid-30
                        let widthDeadlineProgress = 200 ;
                        return (
                            <Card key={i} style={part.card}>
                                <CardItem header style={part.cardHeader}>
                                    <Left>
                                        <TouchableOpacity
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
                                        onPress={() =>
                                            this.props.navigation.navigate('ThePostInNewFeed', {
                                                product_id: item.id,
                                                group_name: item.group.name,
                                                group_link: item.group.link,
                                            })}
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

                                <CardItem  style={[{height: 20}, part.noPadding]}>
                                    <View style={part.wrapperDeadline}>
                                        <View style={[part.deadlineProgress, {width: widthDeadlineProgress}]}>

                                        </View>
                                    </View>
                                </CardItem>
                                <CardItem footer style={part.cardFooter}>
                                    <Left>
                                        <Right>
                                            <Text style={[part.describeGray, {right: 0}]}>
                                                {item.deadline} - {item.submitted_members} / {item.total_members} đã nộp
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