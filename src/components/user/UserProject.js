import React, {Component} from 'react';
import {
    TouchableOpacity, View, FlatList, Text, Image
} from 'react-native';
import {
    Container, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
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
                        <View style={part.wrapperIsLoading}>
                            <Spinner color={color.gray}/>
                        </View>
                        :
                        (
                            <View style={[part.wrapperGrid]}>
                                {
                                    products.length == 0
                                        ?
                                        <View style={part.wrapperTextNotLength}>
                                            <Text style={[part.padding, part.titleGrayThin]}>
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
                                                            <View style={[part.imageInGrid, part.shadow]}>
                                                                <Image
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

export default UserProject;