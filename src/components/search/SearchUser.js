import React, {Component} from 'react';
import {
    TouchableOpacity, FlatList, View
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Form, Label,
    Text, Button, Left, Body, Right, List, ListItem, Item, Input, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import Icon from '../../commons/Icon';
import * as searchAction from '../../actions/searchAction';
import * as color from '../../styles/color';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {NavigationActions} from 'react-navigation'

class searchUser extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                            !this.props.user
                                ?
                                <FlatList
                                    onEndReachedThreshold={5}
                                    onEndReached={() => {
                                        this.props.getMoreUser
                                    }}
                                    data={this.props.users}
                                    renderItem={({item}) =>
                                        <CardItem
                                            avatar
                                            style={[part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                            <TouchableOpacity
                                                style={{flex: 1}}
                                                onPress={() => {
                                                    this.props.navigation.dispatch({
                                                        type: 'Navigation/NAVIGATE',
                                                        routeName: 'Group',
                                                        action: {
                                                            type: 'Navigation/NAVIGATE',
                                                            routeName: 'Group',
                                                        }
                                                    })
                                                }
                                                }>
                                                <Left>
                                                    <Thumbnail
                                                        source={{uri: item.avatar_url}}/>
                                                    <Body style={part.noBorder}>
                                                    <Text style={part.titleSmallBlue}>{item.name}</Text>
                                                    <Text style={part.describeGray} note>{item.university}</Text>
                                                    </Body>
                                                    <TouchableOpacity style={part.iconFollow}>
                                                        <Icon
                                                            name="ion|ios-person-add"
                                                            size={30}
                                                            color={color.navTitle}/>
                                                    </TouchableOpacity>
                                                </Left>
                                            </TouchableOpacity>
                                        </CardItem>
                                    }
                                />
                                :
                                <View style={part.wrapperNotResult}>
                                    <Text style={part.describeDarkGray}>Không có kết quả phù hợp.</Text>
                                </View>
                        )
                }

            </Content>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.search.users,
        isLoading: state.search.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        searchAction: bindActionCreators(searchAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(searchUser);