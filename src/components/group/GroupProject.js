import React, {Component} from 'react';
import {
    FlatList, TouchableOpacity, View
} from 'react-native';
import {
    Container, Spinner
} from 'native-base';
import * as color from '../../styles/color';
import part from '../../styles/partStyle';
import FastImage from 'react-native-fast-image'

class GroupProject extends Component {
    render() {
        const {products,isLoadingGroupProducts} = this.props;
        return (
            <Container
                showsVerticalScrollIndicator={false}
                style={[part.wrapperContainer]}>
                {
                    (isLoadingGroupProducts)
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
                            <View style={[part.wrapperGrid]}>
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
                                                    <FastImage
                                                        style={[part.imageInGrid, part.shadow]}
                                                        source={{uri: item.thumb_url}}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        )
                                    }}/>
                            </View>
                        )
                }
            </Container>

        )
    }
}



export default GroupProject;