import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    List, ListItem, Spinner
} from 'native-base';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';

class UserInformation extends Component {
    render() {
        const {user, isLoadingUserProfile} = this.props;
        return (
            <Container style={[part.wrapperContainer, part.padding]}>
                {
                    (isLoadingUserProfile)
                        ?
                        <View style={part.wrapperIsLoading}>
                            <Spinner color={color.gray}/>
                        </View>
                        :
                        (
                            <Content
                                showsVerticalScrollIndicator={false}
                                style={[part.wrapperContainer]}>
                                <List style={{padding: 20}}>
                                    <ListItem style={part.listItem}>
                                        <Text style={part.describeDark}>Họ tên: {user.name}</Text>
                                    </ListItem>
                                    <ListItem style={part.listItem}>
                                        {
                                            user.gender === 1
                                                ?
                                                <Text style={part.describeDark}>Giới tính: Nam</Text>
                                                :
                                                <Text style={part.describeDark}>Giới tính: Nữ</Text>
                                        }
                                    </ListItem>
                                    <ListItem style={part.listItem}>
                                        <Text style={part.describeDark}>Mô tả: {user.description}</Text>
                                    </ListItem>
                                    <ListItem style={part.listItem}>
                                        <Text style={part.describeDark}>Nơi làm việc: {user.work}</Text>
                                    </ListItem>
                                    <ListItem style={part.listItem}>
                                        <Text style={part.describeDark}>Trường học: {user.university}</Text>
                                    </ListItem>
                                </List>
                            </Content>
                        )
                }
            </Container>
        )
    }
}



export default UserInformation;