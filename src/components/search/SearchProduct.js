import React, {Component} from 'react';
import {
    TouchableOpacity, FlatList, View
} from 'react-native';
import {
    Thumbnail, Spinner, Container, CardItem,
    Text, Left, Body, Right, Item,
} from 'native-base';
import part from '../../styles/partStyle';

class searchProduct extends Component {
    constructor() {
        super();
    }

    render() {
        const {products, getMoreProduct, isLoading, txtSearch} = this.props;
        return (
            <Container>
                {
                    products.length == 0 && txtSearch.length >= 2 && !isLoading
                        ?
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            onEndThreshold={5}
                            onEndReached={
                                () => {}
                            }
                            data={products}
                            renderItem={({item}) =>
                                <CardItem avatar
                                          style={[part.backgroundNone, part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                <Left>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('UserInNewFeed', {username: item.username})}
                                        >
                                            <Thumbnail
                                                source={{uri: item.author.avatar_url}}/>
                                        </TouchableOpacity>
                                        <Body style={part.noBorder}>
                                        <Text
                                            onPress={() => this.props.navigation.navigate('UserInNewFeed', {username: item.username})}
                                            style={part.titleSmallBlue}>{item.author.name}</Text>
                                        <Text style={part.describeGray} note>{item.title}</Text>
                                        </Body>
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
                                            <Thumbnail
                                                source={{uri: item.thumb_url}}/>
                                        </TouchableOpacity>

                                    </Left>
                                </CardItem>
                            }
                        />
                        :
                        <View style={part.wrapperNotResult}>
                            <Text style={part.describeDarkGray}>Không có kết quả phù hợp</Text>
                        </View>
                }
            </Container>
        );
    }
}

export default searchProduct;

