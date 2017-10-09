import React, {Component} from 'react';
import {
    TouchableOpacity, FlatList, View
} from 'react-native';
import {
    Title, Content, Thumbnail, Spinner, Container,
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
                                    <ListItem avatar style={[part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                        <Left>
                                            <Thumbnail
                                                source={{uri: item.author.avatar_url}}/>
                                        </Left>
                                        <Body style={part.noBorder}>
                                        <Text style={part.titleSmallBlue}>{item.author.name}</Text>
                                        <Text style={part.describeGray} note>{item.title}</Text>
                                        </Body>
                                    </ListItem>
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

