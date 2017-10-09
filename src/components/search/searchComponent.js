import React, {Component} from 'react';
import {
    TouchableOpacity, View, StatusBar
} from 'react-native';
import {
    Container, Text, Left, List, ListItem, Item, Input, Spinner
} from 'native-base';
import Icon from '../../commons/Icon';
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
            page_user: 1,
            page_product: 1,
        }
        this.getMoreProduct = this.getMoreProduct.bind(this);
        this.getMoreUser = this.getMoreUser.bind(this);
    }



    search() {
        this.props.searchAction.searchUsers(this.state.txtSearch, 5, 1);
        this.props.searchAction.searchProducts(this.state.txtSearch, 5, 1);

    }
    getMoreUser() {
        let page_user = this.state.page_user;
        page_user += 1;
        this.setState({page_user: page_user});
        this.props.searchAction.searchUsers(this.state.txtSearch, 10, this.state.page_user);
    }
    getMoreProduct() {
        let page_product = this.state.page_product;
        page_product += 1;
        this.setState({page_product: page_product});
        this.props.searchAction.searchProducts(this.state.txtSearch, 10, this.state.page_product);

    }

    render() {
        return (
            <Container style={[part.wrapperContainer, part.padding]}>
                <StatusBar
                    barStyle="light-content"
                />

                <Item style={[part.noBorder, part.marginStatusBar]}>
                    <Left>
                        <TouchableOpacity
                            style={{marginLeft: -5}}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <Icon name="entypo|chevron-thin-left"
                                  size={30}
                                  color={color.darkGray}/>
                        </TouchableOpacity>
                    </Left>
                </Item>
                <Item style={part.noBorder}>
                    <TouchableOpacity onPress={() => this.search()}>
                        <Text style={[part.titleLargeDarkBold, part.paddingLine]}>
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
                            this.setState({txtSearch: txtSearch});
                                this.search();
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