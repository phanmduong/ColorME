import React, {Component} from 'react';
import {
    Image, Dimensions
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, Tabs, Tab, TabHeading, List, ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import * as size from '../styles/size';
import * as getFullInfoAboutOnePostAction from '../actions/getFullInfoAboutOnePostAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class getFullInfoAboutOnePostComponent extends Component{
    constructor(){
        super();
        this.state = {

        }

    }

    componentWillMount(){
        this.props.getFullInfoAboutOnePostAction.getFullInfoAboutOnePostOfUser(this.props.navigation.state.params.product_id, this.props.navigation.state.params.user_id)
        console.log("DATA POST");
        console.log(this.props.post);
    }

    render(){
        return(
            <Container style={part.wrapperContainer}>
                <Header
                    style={[part.navTop ,{borderColor: color.none}]}
                    iosBarStyle={'dark-content'}
                    backgroundColor={color.none}>
                    <Left>
                        <Button transparent >
                            <Icon name="ellipsis-v" size={size.icon} />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={part.navTitle}></Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="times" size={size.icon} />
                        </Button>
                    </Right>
                </Header>
                <Content style={part.padding}>

                    <Body>
                        <Thumbnail style={part.avatarUserBig}
                                   source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/5c/31/b8/5c31b8bfabdce76124e9ad9e699a6067--naruto-uzumaki.jpg'}}/>
                        <Text style={part.titleBigDark}></Text>
                        <Text style={part.describeDark}>Vô học</Text>
                    </Body>

                    <List>
                        <ListItem itemDivider>
                            <Text style={part.titleSmallDarkBold}>Thông tin chi tiết</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={part.describeDark}>Họ tên:</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={part.describeDark}>asdasda</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={part.describeDark}>Giới tính: Nam</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={part.describeDark}>Mô tả: Full-Stack Mobile Developer</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={part.describeDark}>Nơi làm việc: KEETOOL</Text>
                        </ListItem>
                        <ListItem>
                            <Text style={part.describeDark}>Trường học: Vô học</Text>
                        </ListItem>
                    </List>
                </Content>

            </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        post: state.getFullInfoAboutOnePost.post,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getFullInfoAboutOnePostAction: bindActionCreators(getFullInfoAboutOnePostAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(getFullInfoAboutOnePostComponent);