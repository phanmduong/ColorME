import React, {Component} from 'react';
import {
    FlatList, Image
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, Tabs, Tab, TabHeading, List, ListItem,
} from 'native-base';
import part from '../../styles/partStyle';
import * as getUserProfileAction from '../../actions/getUserProfileAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Progress extends Component {
    render() {
        return (
            <Content style={part.wrapperContainer}>
                {
                    (this.props.progress.length === 0)
                        ?
                        (
                            <Body>
                                <Text style={[part.padding, part.describeDark]}>{this.props.user.name} chưa tham gia khóa học nào.</Text>
                            </Body>
                        )
                        :
                        (
                            <FlatList
                            onEndReachedThreshold={5}
                            data={this.props.progress}
                            renderItem={({item}) =>
                                <Card style={[part.noBorder]}>
                                    <CardItem style={[part.noBorder, part.cardProgress]}>
                                        <Left>
                                            <Image style={part.avatarUserNormal}
                                                source={{uri: item.icon_url}}/>
                                            <Body>
                                            <Text style={part.titleSmallDarkGrayBold}>{item.name}</Text>
                                            <Text style={part.titleSmallDarkGrayBold}>{item.study_time}</Text>
                                            </Body>
                                        </Left>
                                    </CardItem>
                                </Card>
                            }/>
                        )
                }
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return{
        progress: state.getUserProfile.progress,
        user: state.getUserProfile.user,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Progress);