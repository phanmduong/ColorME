import React, {Component} from 'react';
import {
    Image, Dimensions, FlatList
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
        this.props.getFullInfoAboutOnePostAction.getFullInfoAboutOnePostOfUser(this.props.navigation.state.params.product_id)
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
                        <Text style={part.titleBigDark}>{this.props.post.id}</Text>
                        <Text style={part.describeDark}>{this.props.post.colors}</Text>
                    </Body>
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