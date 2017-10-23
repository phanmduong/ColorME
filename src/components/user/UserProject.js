import React, {Component} from 'react';
import {
    TouchableOpacity, View, FlatList, Text
} from 'react-native';
import {
    Container, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import FastImage from 'react-native-fast-image'

class UserProject extends Component {
    render() {
        const {products, user, isLoadingUserProducts} = this.props;
        return (
            <Container
                showsVerticalScrollIndicator={false}
                style={[part.wrapperContainer]}>
                {
                    (isLoadingUserProducts)
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
                                {
                                    products.length === 0
                                        ?
                                        <View style={part.wrapperTextNotLength}>
                                            <Text style={[part.padding, part.titleSmallDarkGrayBold]}>
                                                {user.name} chưa có dự án nào.
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
                                                            <FastImage
                                                                style={[part.imageInGrid, part.shadow]}
                                                                source={{uri: item.thumb_url}}
                                                            />
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

export default UserProject;