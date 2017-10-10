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
                                    w
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

