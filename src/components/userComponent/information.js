import React, {Component} from 'react';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, Tabs, Tab, TabHeading, List, ListItem,
} from 'native-base';
import part from '../../styles/partStyle';
import * as getUserProfileAction from '../../actions/getUserProfileAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Information extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                <Content style={part.padding}>
                    <Body>
                    <Thumbnail style={part.avatarUserBig}
                               source={{uri: this.props.user.avatar_url}}/>
                    <Text style={part.titleBigDark}>{this.props.user.name}</Text>
                    <Text style={[part.describeDark, part.padding]}>{this.props.user.university}</Text>
                    </Body>

                    <List>
                        <ListItem itemDivider>
                            <Text style={part.titleSmallDarkBold}>Thông tin chi tiết</Text>
                        </ListItem>
                        <ListItem style={part.listItem}>
                            <Text style={part.describeDark}>Họ tên: {this.props.user.name}</Text>
                        </ListItem>
                        <ListItem style={part.listItem}>
                            {(this.props.user.gender == 1) ?
                            (<Text style={part.describeDark}>Giới tính: Nam</Text>) :
                            (<Text style={part.describeDark}>Giới tính: Nữ</Text>)}
                        </ListItem>
                        <ListItem style={part.listItem}>
                            <Text style={part.describeDark}>Mô tả: {this.props.user.description}</Text>
                        </ListItem>
                        <ListItem style={part.listItem}>
                            <Text style={part.describeDark}>Nơi làm việc: {this.props.user.work}</Text>
                        </ListItem>
                        <ListItem style={part.listItem}>
                            <Text style={part.describeDark}>Trường học: {this.props.user.university}</Text>
                        </ListItem>
                    </List>
                </Content>

            </Container>
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

export default connect(mapStateToProps, mapDispatchToProps)(Information);