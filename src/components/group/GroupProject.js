import React, {Component} from 'react';
import {
    FlatList, TouchableOpacity, View, Text
} from 'react-native';
import {
    Container, Spinner, Body
} from 'native-base';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import FastImage from 'react-native-fast-image'

class GroupProject extends Component {
    render() {
        const {products, isLoadingGroupProducts, groupName} = this.props;
        return (
            <Container
                style={[part.wrapperContainer]}>
                {
                    (isLoadingGroupProducts)
                        ?
                        <View style={part.wrapperIsLoading}>
                            <Spinner color={color.gray}/>
                        </View>
                        :
                        (
                            <View style={[part.wrapperGrid]}>
                                {
                                    products.length === 0
                                        ?
                                        <View style={part.wrapperTextNotLength}>
                                            <Text style={[part.padding, part.titleGrayThin]}>
                                                {groupName} chưa có dự án nào.
                                            </Text>
                                        </View>
                                        :
                                        <FlatList
                                            showsVerticalScrollIndicator={false}
                                            onEndReachedThreshold={5}
                                            numColumns={3}
                                            data={products}
                                            renderItem={({item}) => {
                                                return (
                                                    <View style={[part.wrapperGridImage]}>
                                                        <TouchableOpacity
                                                            onPress={() => this.props.navigation.navigate(
                                                                'ThePostInNewFeed',
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
                                                            <View style={[part.imageInGrid, part.shadow]}>
                                                                <FastImage
                                                                    style={[part.imageInGrid, part.shadow]}
                                                                    source={{uri: item.thumb_url}}
                                                                />
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                )
                                            }}/>
                                }
                            </View>
                        )
                }
            </Container>

        )
    }
}


export default GroupProject;