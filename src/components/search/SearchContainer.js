import React, {Component} from 'react';
import {
    TouchableOpacity, View, StatusBar
} from 'react-native';
import {
    Container, Text, Left, Item, Input, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import SearchUser from './SearchUser';
import SearchProduct from './SearchProduct';
import * as searchAction from '../../actions/searchAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class SearchContainer extends Component {
    constructor() {
        super();
        this.state = {
            tab: 0,
            isLoadingSearch: false,
            txtSearch: '',
            page_user: 2,
            page_product: 2,
        };
         this.getMoreUser = this.getMoreUser.bind(this);
         this.getMoreProduct = this.getMoreProduct.bind(this);
         this.loadingLoadMore = this.loadingLoadMore.bind(this);
    }

    ViewUser() {
        setTimeout(() => {
            this.setState({isLoadingSearch: false});
        }, 100);
        this.setState({tab: 0, isLoadingSearch: true});
    }

    ViewProducts() {
        setTimeout(() => {
            this.setState({isLoadingSearch: false})
        }, 100);
        this.setState({tab: 1, isLoadingSearch: true})
    }

    tab() {
        switch (this.state.tab) {
            case 0:
                return (
                    <SearchUser
                        navigation={this.props.navigation}
                        users={this.props.users}
                        getMoreUser={this.getMoreUser}
                        isLoading={this.props.isLoading}
                        txtSearch={this.state.txtSearch}
                        loadingLoadMore={this.loadingLoadMore}
                    />
                );
            case 1 :
                return (
                    <SearchProduct
                        navigation={this.props.navigation}
                        products={this.props.products}
                        getMoreProduct={this.getMoreProduct}
                        isLoading={this.props.isLoading}
                        txtSearch={this.state.txtSearch}
                        loadingLoadMore={this.loadingLoadMore}
                    />
                );
        }
    }

    search() {
        this.props.searchAction.searchUsers(this.state.txtSearch, 5, 1);
        this.props.searchAction.searchProducts(this.state.txtSearch, 5, 1);
    }
    changeSearch(){
        this.props.searchAction.changeValueSearch();
    }

    getMoreUser() {
        let page_user = this.state.page_user;
        page_user += 1;
        this.setState({page_user: page_user});
        this.props.searchAction.searchUsers(this.state.txtSearch, 5, this.state.page_user);
    }

    getMoreProduct() {
        let page_product = this.state.page_product;
        page_product += 1;
        this.setState({page_product: page_product});
        this.props.searchAction.searchProducts(this.state.txtSearch, 5, this.state.page_product);
    }
    loadingLoadMore(){
        if(this.props.isLoading && (this.props.users.length > 0 || this.props.products.length > 0)){
            return (
                <View style={[part.wrapperContainer]}>
                    <Spinner color={color.gray}/>
                </View>
            )
        }else{
            return <View/>
        }
    }

    searchHaveTimeout(value) {
        this.setState({
            page_user: 1,
            page_product: 1,
            txtSearch: value,
        });

        if (this.timeOut !== null) {
            clearTimeout(this.timeOut);
        }

        this.timeOut = setTimeout(function () {
            this.changeSearch();
            this.search();
        }.bind(this), 500)
    }

    render() {
        return (
            <Container style={[part.wrapperContainer, part.padding, {paddingBottom: 0}]}>
                <View style={part.wrapperStatusBar}>
                </View>
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
                        returnKeyType={'search'}
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
                                <Text numberOfLines={1}
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
                <View style={part.wrapperTabBarUser}>
                    <TouchableOpacity
                        style={part.wrapperTextInTabBarUser}
                        onPress={() => this.ViewUser()}
                    >
                        <Text
                            style={this.state.tab == 0 ? part.describeDarkGray : part.describeGray}
                        >
                            Người dùng
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={part.wrapperTextInTabBarUser}
                        onPress={() => this.ViewProducts()}
                    >
                        <Text
                            style={this.state.tab == 1 ? part.describeDarkGray : part.describeGray}
                        >
                            Dự án
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                    this.state.isLoadingSearch
                        ?
                        <View style={[part.wrapperContainer]}>
                            <Spinner color={color.gray}/>
                        </View>
                        :
                        this.tab()
                }
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);