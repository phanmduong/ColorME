import React, {Component} from 'react';
import {
    TouchableOpacity, View, StatusBar
} from 'react-native';
import {
    Container, Text, Left, List, ListItem, Item, Input, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as searchAction from '../../actions/searchAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {SearchTab} from '../../navigators/appRouter';

class searchComponent extends Component {
    constructor() {
        super();
        this.state = {
            txtSearch: '',
            page_user: 2,
            page_product: 2,
        }
        this.getMoreProduct = this.getMoreProduct.bind(this);
        this.getMoreUser = this.getMoreUser.bind(this);
    }

    search() {
        this.props.searchAction.searchUsers(this.state.txtSearch, 30, 1);
        this.props.searchAction.searchProducts(this.state.txtSearch, 30, 1);
    }

    getMoreUser() {
        let page_user = this.state.page_user;
        page_user += 1;
        this.setState({page_user: page_user});
        this.props.searchAction.searchUsers(this.state.txtSearch, 30, this.state.page_user);
    }
    getMoreProduct() {
        let page_product = this.state.page_product;
        page_product += 1;
        this.setState({page_product: page_product});
        this.props.searchAction.searchProducts(this.state.txtSearch, 30, this.state.page_product);
    }

    searchHaveTimeout(value){
        this.setState({
           page_user: 1,
           page_product: 1,
           txtSearch: value,
        });

        if ( this.timeOut !== null){
            clearTimeout(this.timeOut);
        }

        this.timeOut = setTimeout(function () {
            this.search();
        }.bind(this), 500)
    }

    render() {
        return (
            <Container style={[part.wrapperContainer, part.padding]}>
                <StatusBar
                    barStyle="light-content"
                />


                <Item style={part.noBorder}>
                    <TouchableOpacity onPress={() => this.search()}>
                        <Text style={[part.titleLargeDarkBold, part.paddingLineFar]}>
                            Tìm kiếm
                        </Text>
                    </TouchableOpacity>
                </Item>

                <Item regular style={part.margin}>
                    <Input
                        placeholder="Nhập từ khóa"
                        placeholderTextColor={color.gray}
                        style={part.inputTheme02}
                        onChangeText={(txtSearch) => {
                            this.searchHaveTimeout(txtSearch);
                        }}

                    />
                </Item>
                <View style={{height: 30}}>
                    {
                        (this.state.txtSearch !== '')
                            ?
                            (
                                <Text  numberOfLines={1}
                                       style={[part.describeGray, {paddingLeft: 2, paddingTop: 5}]}
                                >
                                    Kết quả tìm kiếm cho từ khóa &nbsp;
                                    <Text style={part.titleSmallDarkGrayBold}>
                                        "{this.state.txtSearch}"
                                    </Text>
                                </Text>
                            )
                            :
                            (<Text/>)
                    }
                </View>

                <SearchTab
                    getMoreUser={this.getMoreUser}
                    getMoreProduct={this.getMoreProduct}
                    navigationProps={this.props.navigation}
                />
            </Container>
        );
    }
}


function mapStateToProps(state) {
    return {
        users: state.search.users,
        products: state.search.products,
        isLoading: state.search.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchComponent);