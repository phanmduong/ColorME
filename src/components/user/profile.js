import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    List, ListItem, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as userInformationAction from '../../actions/userInformationAction';
import * as color from '../../styles/color';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Information extends Component {
    render() {
        return (
            <Container style={[part.wrapperContainer, part.padding]}>
                {
                    (this.props.isLoadingUserProfile)
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
                            <Content
                                showsVerticalScrollIndicator={false}
                                style={[part.wrapperContainer]}>
                                <List>
                                    <ListItem itemDivider>
                                        <Text style={part.titleSmallDarkBold}>Thông tin chi tiết</Text>
                                    </ListItem>
                                    <ListItem style={part.listItem}>
                                        <Text style={part.describeDark}>Họ tên: {this.props.user.name}</Text>
                                    </ListItem>
                                    <ListItem style={part.listItem}>
                                        {(this.props.user.gender === 1) ?
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
                        )
                }
            </Container>
        )
    }
}

function mapStateToProps(state) {
    return{
        user: state.userInformation.user,
        isLoadingUserProfile: state.userInformation.isLoadingUserProfile
    }
}

export default connect(mapStateToProps)(Information);