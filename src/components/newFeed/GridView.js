import React, {Component} from 'react';
import {
    View, TouchableOpacity, Image, Animated
} from 'react-native';
import {
    Container, Header, Content, Card, CardItem, Item, Picker,
    Thumbnail, Text, Button, Left, Body, Right, ListItem, Spinner, Badge
} from 'native-base';
import Video from 'react-native-video';
import part from '../../styles/partStyle';

class GridView extends Component {
    shouldComponentUpdate(nextProps) {
        if (nextProps.post !== this.props.post) {
            return true;
        }
        return false;
    }

    render() {
        let item = this.props.post;
        let {animated} = this.props;
        return (
            <View style={[part.wrapperGridImage]}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPressIn = {() => this.props.animateIn(item.key)}
                    onPressOut = {()=> this.props.animateOut(item.key)}
                    onPress={() =>
                        this.props.navigation.navigate('ThePostInNewFeed',
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
                   <Animated.View
                       style={[part.imageInGrid, {transform: [{
                           scale: animated[item.key]
                       }]}]}
                       activeOpacity={0.8}
                       >

                    {
                        (item.url.indexOf('.mp4') === -1 ) ?
                            <View style={[part.imageInGrid, part.shadow]}>
                                <Image
                                    resizeMode={'cover'}
                                    style={[part.imageInGrid]}
                                    source={{uri: item.thumb_url}}
                                />
                            </View>
                            :
                            <View style={[part.imageInGrid, part.shadow]}>
                                <Video
                                    repeat
                                    rate={0}    // 0 is paused, 1 is normal.
                                    volume={1.0}  // 0 is muted, 1 is normal.
                                    muted={true}  // Mutes the audio entirely.
                                    paused={false}
                                    resizeMode={'cover'}
                                    style={[part.imageInGrid]}
                                    source={{uri: item.url}}
                                />
                            </View>
                    }
                   </Animated.View>
                </TouchableOpacity>
            </View>
        );
    }
}

export default GridView;