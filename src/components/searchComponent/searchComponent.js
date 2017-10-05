import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {
    Title,Container, Header, Content, Card, CardItem, Thumbnail, Form, Label,
    Text, Button, Icon, Left, Body, Right, List, ListItem, Item, Input, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as searchAction from '../../actions/searchAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Search} from '../../navigators/appRouter';

class searchComponent extends Component{
    constructor(){
        super();
        this.state = {
            txtSearch: '',
            page: 1,
        }

    }

    search(){
        this.props.searchAction.searchUsers(this.state.txtSearch, 10, 1);
        this.props.searchAction.searchProducts(this.state.txtSearch, 10, 1);
    }

    // getMoreUser(){
    //     let page = this.state.page;
    //     page += 1;
    //     this.setState({page: page});
    //     this.props.searchAction.searchUsers(this.state.txtSearch, 30 , this.state.page);
    //
    // }


    render(){
        return(
            <Container style={part.wrapperContainer}>
                <Header
                    style={part.navTop}
                    iosBarStyle={'light-content'}
                    backgroundColor={color.main}>
                    <Left/>
                    <Body>
                        <Title style={part.navTitle}>Tìm kiếm</Title>
                    </Body>
                    <Right/>
                </Header>
                <Item style={part.borderNone}>
                    <Input placeholder="Nhập tên người dùng, bài đăng..."
                           style={part.inputTheme01}
                           onChangeText={(text) => this.setState({txtSearch: text})}
                    />
                    <TouchableOpacity onPress={() => this.search()}>
                        <Icon name="search" style={part.padding} size={size.icon} color={color.gray}/>
                    </TouchableOpacity>
                </Item>
                <Search />
            </Container>
        );
    }
}


function mapStateToProps(state) {
    return{
        users: state.search.users,
        products: state.search.products,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        searchAction: bindActionCreators(searchAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchComponent);