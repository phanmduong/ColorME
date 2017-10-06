import React, {Component} from 'react';
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
                    <CardItem>
                        <Left>
                            <Thumbnail
                                source={{uri: 'data:image/png;base64,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'}}/>
                            <Body>
                            <Text style={part.titleSmallDarkBold}>Lớp AI 28.11 (Sài Gòn)</Text>
                            <Text style={part.describeDark}>Học lần thứ: 1</Text>
                            <Text style={part.describeDark}>Lịch học: (19h-21h) thứ 4 - thứ 6</Text>
                            </Body>
                            <Thumbnail square size={80}
                                       source={{uri: 'http://d1j8r0kxyu9tj8.cloudfront.net/images/1475072336A5Ks9NSnqnHsXOn.jpg'}}/>
                        </Left>
                    </CardItem>
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
    return{
        user: state.getUserProfile.user,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Process);