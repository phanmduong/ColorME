import React, {Component} from 'react';
import {
    TouchableOpacity, FlatList, View,
} from 'react-native';
import {
    Spinner, Container, CardItem,
    Text, Left, Body, Right, Item,
} from 'native-base';
import part from '../../styles/partStyle';
import FastImage from 'react-native-fast-image';

class searchProduct extends Component {
    constructor() {
        super();
    }

    render() {
        const {products, isLoading, txtSearch, getMoreProduct} = this.props;
        return (
            <Container>
                {
                    products.length == 0 && txtSearch.length >= 2 && !isLoading
                        ?
                        <View style={part.wrapperNotResult}>
                            <Text style={part.describeDarkGray}>Không có kết quả phù hợp</Text>
                        </View>
                        :
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            onEndThreshold={5}
                            onEndReached={
                                () => {
                                    this.props.getMoreProduct()
                                }
                            }
                            data={products}
                            renderItem={({item}) =>
                                <CardItem avatar
                                          style={[part.backgroundNone, part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                    <Left>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => this.props.navigation.navigate('UserInSearch', {username: item.author.username})}
                                        >
                                            <FastImage
                                                style={part.avatarUserNormal}
                                                source={{uri: item.author.avatar_url}}/>
                                        </TouchableOpacity>
                                        <Body style={part.noBorder}>
                                        <Text
                                            onPress={() => this.props.navigation.navigate(
                                                'ThePostInSearch',
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
                                            style={part.titleSmallBlue}>
                                            {item.title}
                                        </Text>
                                        <Text
                                            onPress={() => this.props.navigation.navigate('UserInSearch', {username: item.author.username})}
                                            style={part.describeGray} note>
                                            Đăng bởi {item.author.name}
                                        </Text>
                                        </Body>
                                        <TouchableOpacity
                                            activeOpacity={0.8}
                                            onPress={() => this.props.navigation.navigate(
                                                'ThePostInSearch',
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
                                                style={part.avatarUserNormal}
                                                source={{uri: item.thumb_url}}/>
                                        </TouchableOpacity>

                                    </Left>
                                </CardItem>
                            }
                            ListFooterComponent = {this.props.loadingLoadMore}
                        />
                }

            </Container>
        );
    }
}

export default searchProduct;

