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

class Progress extends Component {
    render() {
        return (
            <Content style={part.wrapperContainer}>
                <FlatList
                    onEndReachedThreshold={5}
                    data={this.props.progress}
                    renderItem={({item}) =>
                        <Card style={{flex: 0}}>
                            <CardItem>
                                <Left>
                                    <Thumbnail
                                        source={{uri: item.icon_url}}/>
                                    <Body>
                                        <Text style={part.titleSmallDarkBold}>{item.name}</Text>
                                        <Text style={part.describeDark}>Học lần thứ: {item.time}</Text>
                                        <Text style={part.describeDark}>{item.description}</Text>
                                        <Text style={part.describeDark}>Lịch học {item.study_time}</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                        </Card>
                    }/>
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return{
        progress: state.getUserProfile.progress,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Progress);