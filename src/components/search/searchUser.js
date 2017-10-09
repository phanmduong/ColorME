import React, {Component} from 'react';
import {
    TouchableOpacity, FlatList, View
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Form, Label,
    Text, Button, Icon, Left, Body, Right, List, ListItem, Item, Input, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as searchAction from '../../actions/searchAction';
import * as color from '../../styles/color';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class searchUser extends Component {
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
                                data={this.props.users}
                                renderItem={({item}) =>
                                    <ListItem avatar style={[part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                        <Left>
                                            <Thumbnail
                                                source={{uri: item.avatar_url}}/>
                                        </Left>
                                        <Body style={part.noBorder}>
                                            <Text style={part.titleSmallBlue}>{item.name}</Text>
                                            <Text style={part.describeGray} note>{item.university}</Text>
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