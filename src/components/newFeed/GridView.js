import React, {Component} from 'react';
import {
    View, TouchableOpacity, Image
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
        return (
            <View style={[part.wrapperGridImage]}>
                <TouchableOpacity
                    activeOpacity={0.8}
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
                                    rate={1.0}    // 0 is paused, 1 is normal.
                                    volume={1.0}  // 0 is muted, 1 is normal.
                                    muted={true}  // Mutes the audio entirely.
                                    paused={false}
                                    resizeMode={'cover'}
                                    style={[part.imageInGrid]}
                                    source={{uri: item.url}}
                                />
                            </View>
                    }
                </TouchableOpacity>
            </View>
        );
    }
}

export default GridView;