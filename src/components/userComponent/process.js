import React, {Component} from 'react';
import {
    FlatList
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, Tabs, Tab, TabHeading, List, ListItem,
} from 'native-base';
import part from '../../styles/partStyle';
import * as getUserProfileAction from '../../actions/getUserProfileAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Process extends Component {
    render() {
        return (
            <Content style={part.wrapperContainer}>
                <Card style={{flex: 0}}>

                    {
                        (this.props.user.courses === []) ?
                            (<Text>Bạn chưa tham gia khóa học nào</Text>) :
                            (
                                <FlatList
                                onEndReachedThreshold={5}
                                onEndReached={() => {
                                }}
                                data={this.props.user.courses}
                                renderItem={({item}) =>
                                    <CardItem>
                                        <Left>
                                            <Thumbnail
                                                source={{uri: item.icon_url}}/>
                                            <Body>
                                                <Text style={part.titleSmallDarkBold}>{item.id}</Text>
                                                <Text style={part.describeDark}>Học lần thứ: 1</Text>
                                                <Text style={part.describeDark}>Lịch học: (19h-21h) thứ 4 - thứ 6</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                }
                            />
                        )
                    }
                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/5c/31/b8/5c31b8bfabdce76124e9ad9e699a6067--naruto-uzumaki.jpg'}}/>
                            <Body>
                            <Text style={part.titleSmallDarkBold}>Bằng hiện tại:</Text>
                            <Text style={part.describeDark}>Bằng giỏi</Text>
                            </Body>
                        </Left>

                    </CardItem>
                </Card>
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return {
        progress: state.getUserProfile.progress,
        user: state.getUserProfile.user,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Process);