    import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Form, Label,
    Text, Button, Icon, Left, Body, Right, List, ListItem, Item, Input, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
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
        this.getMoreProduct = this.getMoreProduct.bind(this)
        this.getMoreUser = this.getMoreUser.bind(this)

    }

    search() {
        this.props.searchAction.searchUsers(this.state.txtSearch, 30, 1);
        this.props.searchAction.searchProducts(this.state.txtSearch, 30, 1);

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
            <Container style={part.wrapperContainer}>
                <Item style={part.borderNone}>
                    <Input placeholder="Nhập tên người dùng, bài đăng..."
                           style={part.inputTheme01}
                           onChangeText={(text) => this.setState({txtSearch: text})}
                    />
                    <TouchableOpacity onPress={() => this.search()}>
                        <Icon name="search" style={part.padding} size={size.icon} color={color.gray}/>
                    </TouchableOpacity>
                </Item>
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
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchComponent);