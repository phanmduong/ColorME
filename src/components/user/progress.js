import React, {Component} from 'react';
import {
    FlatList, Image, View
} from 'react-native';
import {
    Content, Card, CardItem, Text,
    Left, Body, Right, List, ListItem, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as userInformationAction from '../../actions/userInformationAction';
import * as color from '../../styles/color';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Progress extends Component {
    render() {
        return (
            <Content
                showsVerticalScrollIndicator={false}
                style={[part.wrapperContainer, part.padding]}>
                {

                    (this.props.isLoadingUserProgress)
                        ?
                        (<View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                        >
                            <Spinner
                                color={color.gray}/>
                        </View>)
                        :
                        (
                            (this.props.progress.length === 0)
                                ?
                                (
                                    <Body>
                                    <Text style={[part.padding, part.describeDark]}>{this.props.user.name} chưa tham gia
                                        khóa học nào.</Text>
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
                                                        <Text
                                                            style={part.titleSmallDarkGrayBold}>{item.study_time}</Text>
                                                        </Body>
                                                    </Left>
                                                </CardItem>
                                            </Card>
                                        }/>
                                )
                        )
                }
            </Content>
        )
    }
}

function mapStateToProps(state) {
    return {
        progress: state.userInformation.progress,
        user: state.userInformation.user,
        isLoadingUserProgress: state.userInformation.isLoadingUserProgress,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        userInformationAction: bindActionCreators(userInformationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Progress);