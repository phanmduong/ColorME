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

class searchUser extends Component {
    render() {
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
                            <FlatList
                                onEndReachedThreshold={5}
                                onEndReached={() => {
                                }}
                                data={this.props.users}
                                renderItem={({item}) =>
                                    <CardItem avatar style={[part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                        <Left>
                                            <TouchableOpacity
                                                onPress={() => this.props.navigation.navigate('User')}
                                            >
                                                <Thumbnail
                                                    source={{uri: item.avatar_url}}/>
                                            </TouchableOpacity>

                                            <Body style={part.noBorder}>
                                            <TouchableOpacity>
                                                <Text style={part.titleSmallBlue}>{item.name}</Text>
                                            </TouchableOpacity>
                                            <Text style={part.describeGray} note>{item.university}</Text>
                                            </Body>
                                            <TouchableOpacity style={part.iconFollow}>
                                                <Icon name="ion|ios-person-add"
                                                      size={30}
                                                      color={color.navTitle}/>
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