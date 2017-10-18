import React, {Component} from 'react';
import {
    TouchableOpacity, FlatList, View
} from 'react-native';
import {
    Title, Content, Thumbnail, Spinner, Container, CardItem,
    Text, Button, Icon, Left, Body, Right, List, ListItem, Item,
} from 'native-base';
import part from '../../styles/partStyle';
import * as searchAction from '../../actions/searchAction';
import * as color from '../../styles/color';
import {NavigationActions} from 'react-navigation'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class searchProduct extends Component {
    constructor() {
        super();
    }

    render() {
        const {navigate} = this.props.navigation;
        return (
            <Content
                showsVerticalScrollIndicator={false}
            >
                {
                    (this.props.isLoading)
                        ?
                        (
                            <View/>
                        )
                        :
                        (
                            this.props.products
                                ?
                                (
                                    <FlatList
                                        onEndReachedThreshold={5}
                                        onEndReached={() => {
                                            this.props.getMoreProduct
                                        }}
                                        data={this.props.products}
                                        renderItem={({item}) =>
                                            <CardItem avatar
                                                      style={[part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                                <Left>
                                                    <TouchableOpacity>
                                                        <Thumbnail
                                                            source={{uri: item.author.avatar_url}}/>
                                                    </TouchableOpacity>
                                                    <Body style={part.noBorder}>
                                                    <Text style={part.titleSmallBlue}>{item.author.name}</Text>
                                                    <Text style={part.describeGray} note>{item.title}</Text>
                                                    </Body>
                                                    <TouchableOpacity
                                                        onPress={() => {
                                                        }
                                                        }
                                                    >
                                                        <Thumbnail
                                                            source={{uri: item.thumb_url}}/>
                                                    </TouchableOpacity>

                                                </Left>
                                            </CardItem>
                                        }
                                    />
                                )
                                :
                                <View style={part.wrapperNotResult}>
                                    <Text style={part.describeDarkGray}>Không có kết quả phù hợp</Text>
                                </View>
                        )
                }
                {
                    this.props.isLoading
                        ?
                        <View style={part.wrapperContainer}>
                            <Spinner color={color.gray}/>
                        </View>
                        :
                        <View/>
                }
            </Content>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: state.search.products,
        isLoading: state.search.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchProduct);

