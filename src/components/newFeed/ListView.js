import React, {Component} from 'react';
import {
    View, TouchableOpacity
} from 'react-native';
import {
    Container, Header, Content, Card, CardItem, Item, Picker,
    Thumbnail, Text, Button, Left, Body, Right, ListItem, Spinner, Badge
} from 'native-base';
import Video from 'react-native-video';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import FastImage from 'react-native-fast-image';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class ListView extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let {item, arrayLike, likeCount, colorIcon} = this.props;
        console.log(item);
        return(
            <Card key={item.key} style={part.card}>
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
                        <TouchableOpacity transparent>
                            <Icon name="materialCommunity|dots-horizontal"
                                  color={color.icon}
                                  size={size.icon}
                                  style={part.paddingRight}
                            />
                        </TouchableOpacity>
                    </Left>
                </CardItem>
                {/*PHOTO*/}
                <CardItem cardBody style={part.card}>
                    <TouchableOpacity
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
                            )}
                    >
                        <Body>
                        {
                            (item.url.indexOf('.mp4') === -1)
                                ?
                                (
                                    <FastImage
                                        resizeMode={'cover'}
                                        source={{
                                            uri: item.image_url,
                                            headers: {Authorization: 'Đang tải..'},
                                        }}
                                        style={[part.shadow, part.image]}
                                    />
                                )
                                :
                                (
                                    <Video
                                        repeat
                                        rate={1.0}                   // 0 is paused, 1 is normal.
                                        volume={1.0}                 // 0 is muted, 1 is normal.
                                        muted={true}                 // Mutes the audio entirely.
                                        paused={false}
                                        resizeMode={'cover'}
                                        source={{uri: item.url}}
                                        style={[part.video, part.shadow]}
                                    />
                                )
                        }
                        <View style={part.textInImage}>
                            <Text
                                numberOfLines={2}
                                style={[part.padding, {paddingLeft: 15}, part.titleInImage]}
                            >
                                {item.title}
                            </Text>
                            <Text
                                numberOfLines={2}
                                style={[{paddingLeft: 15}, part.describeInImage]}
                            >
                                {item.description}
                            </Text>
                        </View>
                        </Body>
                    </TouchableOpacity>
                </CardItem>
                {/*LIKE COMMENT VIEWS*/}
                <CardItem footer style={part.cardFooter}>
                    <Left>
                        <Button
                            transparent style={part.paddingRight}
                            onPress={arrayLike[item.key] ? () => this.unlikePost(item.id, this.props.token, item.key) : () => this.likePost(item.id, this.props.token, item.key)}
                        >
                            <Icon name="fontawesome|heart" size={size.iconBig}
                                  color={colorIcon}/>
                            <Text
                                style={[part.describeGray, part.paddingLeft]}>{likeCount[item.key]}</Text>
                        </Button>
                        <Button transparent style={part.paddingRight}
                                onPress={() => {
                                    this.setCommentModalVisible(true);
                                    this.setState({
                                        like_in_modal: likeCount[item.key],
                                        product_id: item.id
                                    });

                                }
                                }
                        >
                            <Icon name="fontawesome|comments-o" size={size.iconBig}
                                  color={color.icon}/>
                            <Text
                                style={[part.describeGray, part.paddingLeft]}>{item.comments_count}</Text>
                        </Button>
                        <Button transparent style={part.paddingRight}>
                            <Icon name="fontawesome|eye" size={size.iconBig}
                                  color={color.icon}/>
                            <Text
                                style={[part.describeGray, part.paddingLeft]}>{item.views_count}</Text>
                        </Button>
                    </Left>
                </CardItem>
                {/*HEART BIG BUTTON*/}
                <TouchableOpacity style={[part.iconLikeInImage, part.shadow]}
                                  onPress={arrayLike[item.key] ? () => this.unlikePost(item.id, this.props.token, item.key) : () => this.likePost(item.id, this.props.token, item.key)}
                >
                    <Icon name="fontawesome|heart-o"
                          size={20}
                          color={color.navTitle}/>
                </TouchableOpacity>
            </Card>
        );
    }
}




export default ListView;