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
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class searchProduct extends Component {
    constructor() {
        super();

    }

    render() {
        return (
            <Content>
                {
                    (this.props.isLoading)
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
                            <FlatList
                                onEndReachedThreshold={5}
                                onEndReached={() => {
                                }}
                                data={this.props.products}
                                renderItem={({item}) =>
                                    <CardItem avatar style={[part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                        <Left>
                                            <TouchableOpacity>
                                                <Thumbnail
                                                    source={{uri: item.author.avatar_url}}/>
                                            </TouchableOpacity>
                                            <Body style={part.noBorder}>
                                            <TouchableOpacity>
                                                <Text style={part.titleSmallBlue}>{item.author.name}</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity>
                                                <Text style={part.describeGray} note>{item.title}</Text>
                                            </TouchableOpacity>
                                            </Body>
                                            <TouchableOpacity>
                                                <Thumbnail
                                                    source={{uri: item.thumb_url}}/>
                                            </TouchableOpacity>

                                        </Left>
                                    </CardItem>
                                }
                            />
                        )
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

