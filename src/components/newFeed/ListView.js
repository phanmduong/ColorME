import React, {Component} from 'react';
import {
    View, TouchableOpacity, Alert
} from 'react-native';
import {
    Container, Card, CardItem, Item, Thumbnail,
    Text, Button, Left, Body, Right, ListItem, Spinner, Badge
} from 'native-base';
import Video from 'react-native-video';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import FastImage from 'react-native-fast-image';
import CommentModal from './CommentModal';
import * as reportAction from '../../actions/reportAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ListView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisible: false,
        }
    }

    alertReport() {
        Alert.alert(
            'Báo cáo',
            'Bạn thực sự muốn báo cáo bài viết này?',
            [
                {text: 'Xác nhận', onPress: () => this.reportPost(this.props.item.id, this.props.token)},
                {text: 'Hủy'},
            ],
            {cancelable: false}
        )
    }

    reportPost(id, token) {
        this.props.reportAction.reportPost(id, token);
    }

    setCommentModalVisible(visible) {
        this.setState({modalVisible: visible});
    }


    render() {
        const {item, arrayLike, likeCount, colorIcon, likedIcon} = this.props;
        const {navigate} = this.props.navigation;
        return (
            <View key={item.key} style={part.card}>
                <CardItem header style={part.cardHeader}>
                    <Left>
                        <TouchableOpacity
                            onPress={() => navigate('UserInNewFeed', {username: item.author.username})}>
                            <Thumbnail circle small
                                       source={{uri: item.author.avatar_url}}/>
                        </TouchableOpacity>
                        <Body>
                        <Text
                            onPress={() => navigate('UserInNewFeed', {username: item.author.username})}
                            style={part.titleSmallBlue}>
                            {item.author.name}
                        </Text>
                        <Text
                            style={part.describeItalicDark}>{item.created_at}</Text>
                        </Body>
                        <TouchableOpacity transparent
                                          onPress={() => this.alertReport()}
                        >
                            <Icon name="material|report"
                                  color={color.icon}
                                  size={size.icon}
                                  style={part.paddingRight}
                            />
                        </TouchableOpacity>
                    </Left>
                </CardItem>
                {/*PHOTO*/}
                <TouchableOpacity style={part.card}
                                  onPress={() =>
                                      navigate('ThePostInNewFeed',
                                          item.group
                                              ?
                                              {
                                                  product_id: item.id,
                                                  group_name: item.group.name,
                                                  group_link: item.group.link,
                                              }
                                              :
                                              {
                                                  product_id: item.id,
                                              }
                                      )}>
                    <View>
                        {
                            item.url.indexOf('.mp4') === -1
                                ?
                                <FastImage
                                    resizeMode={'cover'}
                                    source={{
                                        uri: item.image_url,
                                        headers: {Authorization: 'Đang tải..'},
                                    }}
                                    style={[part.image]}
                                />
                                :
                                <Video
                                    repeat
                                    rate={1.0}    // 0 is paused, 1 is normal.
                                    volume={1.0}  // 0 is muted, 1 is normal.
                                    muted={true}  // Mutes the audio entirely.
                                    paused={false}
                                    resizeMode={'cover'}
                                    source={{uri: item.url}}
                                    style={[part.video]}
                                />
                        }
                    </View>
                </TouchableOpacity>
                {/*LIKE COMMENT VIEWS*/}
                <CardItem style={part.cardButton}>
                    <Left>
                        <Button
                            transparent style={part.paddingRight}
                            onPress={arrayLike[item.key] ? () => this.props.unlikePost(item.id, this.props.token, item.key) : () => this.props.likePost(item.id, this.props.token, item.key)}
                        >
                            <Icon name={likedIcon} size={size.iconBig}
                                  color={colorIcon}/>
                            <Text
                                style={[part.describeGray, part.paddingLeft]}>{likeCount[item.key]}</Text>
                        </Button>
                        <Button transparent style={part.paddingRight}>
                            <Icon name="fontawesome|comment-o" size={size.iconBig}
                                  color={color.icon}/>
                            <Text
                                style={[part.describeGray, part.paddingLeft]}>{item.comments_count}</Text>
                        </Button>
                        <Button transparent style={part.paddingRight}>
                            <Icon name="fontawesome|bookmark-o" size={size.iconBig}
                                  color={color.icon}/>
                            <Text
                                style={[part.describeGray, part.paddingLeft]}>{item.views_count}</Text>
                        </Button>
                    </Left>
                </CardItem>
                <CardItem footer style={[part.cardFooter]}>
                    <View stle={part.textInImage}>
                        <Text
                            style={part.titleInImage}
                        >
                            {item.title}
                        </Text>
                        {
                            item.description
                                ?
                                <Text
                                    style={part.describeInImage}
                                >
                                    {item.description}
                                </Text>
                                :
                                <View/>

                        }

                    </View>
                </CardItem>
                <CommentModal
                    panResponder={this.panResponder}
                    product_id={this.state.product_id}
                    user={this.props.user}
                    modalVisible={this.state.modalVisible}
                />
            </View>
        );
    }
}


function mapStateToProps(state) {
    return {
        token: state.login.token,
        isLoadingReportPost: state.report.isLoading,
        reportPostResult: state.report.reportPostResult
    }
}

function mapDispatchToProps(dispatch) {
    return {
        reportAction: bindActionCreators(reportAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListView);