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
import * as color from '../../styles/color';

class searchUser extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {users, getMoreUser, isLoading, txtSearch} = this.props;
        return (
            <Container>
                {
                    users.length == 0 && txtSearch.length >= 2 && !isLoading
                        ?
                        <View style={part.wrapperNotResult}>
                            <Text style={part.describeDarkGray}>Không có kết quả phù hợp.</Text>
                        </View>
                        :
                        <FlatList
                            showsVerticalScrollIndicator={false}
                            onEndThreshold={5}
                            onEndReached={
                                () => {this.props.getMoreUser()}
                            }
                            data={users}
                            renderItem={({item}) =>
                                <CardItem
                                    avatar
                                    style={[part.backgroundNone, part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                                    <TouchableOpacity
                                        style={{flex: 1}}
                                        onPress={() => this.props.navigation.navigate('UserInSearch', {username: item.username})}
                                    >
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
                            ListFooterComponent = {this.props.loadingLoadMore()}
                        />
                }
            </Container>
        );
    }
}

export default searchUser;