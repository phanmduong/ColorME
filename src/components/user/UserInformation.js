import React, {Component} from 'react';
import {
    View
} from 'react-native';
import {
    Container, Content, Card, CardItem, Thumbnail, Text,
    List, ListItem, Spinner, Form, Item, Label, Input
} from 'native-base';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';

class UserInformation extends Component {
    constructor() {
        super();
        this.state = {
            profileProgressWidth: 0,
            profileProgressIndex: 0,
        }
    }

    componentDidMount() {
        this.profileProgress(this.props.user);
    }

    profileProgress(user) {
        let temp = 0;
        let profileProgressWidth = ( size.wid - 20 ) / 6;
        let profileProgressIndex = parseInt(100 / 6);
        if (user.name !== '')
            temp++;
        if (user.username !== '')
            temp++;
        if (user.gender !== '')
            temp++;
        if (user.description !== '')
            temp++;
        if (user.work !== '')
            temp++;
        if (user.university !== '')
            temp++;
        if (user.name !== '' && user.username !== '' && user.gender !== '' && user.description !== '' && user.work !== '' && user.university !== '') {
            profileProgressWidth = size.wid - 20;
            profileProgressIndex = 100;
            temp = 1;
        }
        this.setState({
            profileProgressWidth: profileProgressWidth * temp,
            profileProgressIndex: profileProgressIndex * temp
        });
    }

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
                                <View style={[part.wrapperTextCenter, part.padding]}>
                                    <Text style={[part.titleProfile, part.marginTop]}>Hoàn thành thông tin
                                        ({this.state.profileProgressIndex}%)</Text>
                                    <CardItem style={[{height: 20}, part.marginTop]}>
                                        <View style={part.wrapperProfile}>
                                            <View
                                                style={[part.profileProgress, {width: this.state.profileProgressWidth}]}>
                                            </View>
                                        </View>
                                    </CardItem>
                                </View>
                                <View style={part.padding}>
                                    <Form style={part.noPaddingTop}>
                                        <Item stackedLabel style={part.itemInformation}>
                                            <Label style={[part.describeGray, part.noPadding]}>Họ tên</Label>
                                            <Input
                                                editable={false}
                                                defaultValue={user.name}
                                                style={[part.inputTheme03]}
                                            />
                                        </Item>
                                        <Item stackedLabel style={part.itemInformation}>
                                            <Label style={[part.describeGray, part.noPadding]}>Username</Label>
                                            <Input
                                                editable={false}
                                                defaultValue={user.username}
                                                style={[part.inputTheme03]}
                                            />
                                        </Item>
                                        <Item stackedLabel style={part.itemInformation}>
                                            <Label style={[part.describeGray, part.noPadding]}>Giới tính</Label>
                                            <Input
                                                editable={false}
                                                defaultValue={user.gender === '1' ? 'Nam' : 'Nữ'}
                                                style={[part.inputTheme03]}
                                            />
                                        </Item>
                                        <Item stackedLabel style={part.itemInformation}>
                                            <Label style={[part.describeGray, part.noPadding]}>Mô tả</Label>
                                            <Input
                                                editable={false}
                                                defaultValue={user.description}
                                                style={[part.inputTheme03]}
                                            />
                                        </Item>
                                        <Item stackedLabel style={part.itemInformation}>
                                            <Label style={[part.describeGray, part.noPadding]}>Nơi làm việc</Label>
                                            <Input
                                                editable={false}
                                                defaultValue={user.work}
                                                style={[part.inputTheme03]}
                                            />
                                        </Item>
                                        <Item stackedLabel style={part.itemInformation}>
                                            <Label style={[part.describeGray, part.noPadding]}>Trường học</Label>
                                            <Input
                                                editable={false}
                                                defaultValue={user.university}
                                                style={[part.inputTheme03]}
                                            />
                                        </Item>
                                    </Form>
                                </View>
                            </Content>
                        )
                }
            </Container>
        )
    }
}


export default UserInformation;