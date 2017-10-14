import React, {Component} from 'react';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Tabs, Tab, Fab, Footer,
    Text, Button, Left, Body, Right, List, ListItem, Item, Input, TabHeading, Form,Picker
} from 'native-base';
import{Alert, ActivityIndicator} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import part from '../../styles/partStyle';
import * as updateProfileAction from '../../actions/updateProfileAction';
import {bindActionCreators} from 'redux';
import ImagePicker from 'react-native-image-picker';
import * as changeAvatarAction from '../../actions/changeAvatarAction'
import {connect} from 'react-redux';
let options = {
    title: 'Thay đổi ',
    customButtons: [
        {name: 'fb', title: 'Chọn ảnh từ facebook'},
    ],
    storageOptions: {
        skipBackup: true,
        path: 'images'
    }
}
 class updateInformation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name : this.props.user.name,
            phone : this.props.user.phone,
            email : this.props.user.email,
            university : this.props.user.university,
            work : this.props.user.work,
            address : this.props.user.address,
            how_know : this.props.user.how_know,
            username : this.props.user.username,
            description : this.props.user.description,
            facebook : this.props.user.facebook,
            gender: this.props.user.gender,
            dob : this.props.user.dob,
            fileImage : null,
        };
        this.updateProfile = this.updateProfile.bind(this)
    }
    onValueChange(value: string) {
        this.setState({
            gender: value
        });
    }
    updateProfile(info, token){
        this.props.updateProfileAction.updateProfile(info, token)
        this.props.changeAvatarAction.changeAvatar(info, token)
    }

     show() {
         ImagePicker.showImagePicker(options, (response) => {
             console.log('Response = ', response);

             if (response.didCancel) {
                 console.log('User cancelled image picker');
             }
             else if (response.error) {
                 console.log('ImagePicker Error: ', response.error);
             }
             else if (response.customButton) {
                 console.log('User tapped custom button: ', response.customButton);
             }
             else {
                 let source = response;
                 this.setState({
                     fileImage: source
                 });

             }
         });
     }
    componentWillReceiveProps(nextProps){
        // if(nextProps.status == 200){
        //     Alert.alert('Cập nhật thông tin thành công ')
        // }
        // if(nextProps.error == true){
        //     Alert.alert('Cập nhật thất bại check again please')
        // }
    }
    render() {
        return (
            <Container style={part.wrapperContainer}>
                <Header
                    style={part.navTop}
                    iosBarStyle={'light-content'}
                    backgroundColor={color.main}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-left" size={size.icon} color={color.navTitle}/>
                        </Button>
                    </Left>
                    <Title style={part.navTitle}>Cập nhập thông tin tài khoản</Title>
                    <Right/>
                </Header>
                <Content style={part.paddingTRB}>
                    <Form>
                        <Body>
                        <Thumbnail style={part.marginBottom}
                                   circle large
                                   source={{uri: this.props.user.avatar_url}}
                                   onPress={() => this.show()}
                        >
                        </Thumbnail>
                        </Body>
                        <Item>
                            <Input placeholder={"Họ và tên"}
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                                   onChangeText = {(name) => {this.setState({name})}}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Email"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                                   onChangeText = {(email) => {this.setState({email})}}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Username"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                                   onChangeText = {(username) => {this.setState({username})}}
                            />
                        </Item>
                        <Item>
                            <Text style={[part.describeDarkGray, part.paddingLeft]}>Giới tính:</Text>
                            <Picker
                                itemTextStyle={part.describeDark}
                                textStyle={part.describeDarkGray}
                                renderHeader={backAction =>
                                <Header style={{ backgroundColor: color.main }} iosBarStyle={'light-content'}>
                                    <Left>
                                        <Button transparent onPress={backAction}>
                                            <Icon name="arrow-left" size={size.icon} color={color.navTitle}/>
                                        </Button>
                                    </Left>
                                    <Body>
                                        <Title style={part.navTitle}>Giới tính</Title>
                                    </Body>
                                    <Right />
                                </Header>}
                                mode="dropdown"
                                selectedValue={this.state.gender}
                                onValueChange={this.onValueChange.bind(this)}
                            >
                                <Item label="Nữ" value="key0" />
                                <Item label="Nam" value="key1" />
                                <Item label="Khác" value="key2" />
                            </Picker>
                        </Item>
                        <Item>
                            <Input placeholder="Ngày sinh: YYYY/MM/DD"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                                   onChangeText = {(dob) => {this.setState({dob})}}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Mô tả"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                                   onChangeText = {(description) => {this.setState({description})}}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Trường học"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                                   onChangeText = {(university) => {this.setState({university})}}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Nơi làm việc"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                                   onChangeText = {(work) => {this.setState({work})}}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Địa chỉ"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                                   onChangeText = {(address) => {this.setState({address})}}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Link facebook"
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                                   onChangeText = {(facebook) => {this.setState({facebook})}}
                            />
                        </Item>
                        <Item>
                            <Input placeholder="Vì  bạn biết đến ColorMe "
                                   style={part.inputTheme03}
                                   autoCorrect={false}
                                   onChangeText = {(how_know) => {this.setState({how_know})}}
                            />
                        </Item>
                    </Form>
                    <Body>
                    <Button style={part.buttonTheme01} onPress = {() => this.updateProfile(this.state, this.props.token)}>
                        {(this.props.isLoading) ? (
                            <Container style={{
                                padding: 10,
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <ActivityIndicator
                                    animated={true}
                                    color={color.navTitle}
                                    style={{
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 40,
                                    }}
                                    size='small'
                                />
                            </Container>
                        ) : (
                            <Text style={part.describeLight}>Lưu thông tin cập nhập</Text>
                        )
                        }
                    </Button>
                    </Body>

                </Content>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        isLoading : state.updateProfile.isLoading,
        status : state.updateProfile.status,
        error : state.updateProfile.error,
        token : state.login.token,
        user : state.login.user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        updateProfileAction : bindActionCreators(updateProfileAction, dispatch),
        changeAvatarAction : bindActionCreators(changeAvatarAction, dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(updateInformation)