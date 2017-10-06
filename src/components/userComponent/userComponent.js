import React, {Component} from 'react';
import {
    Image, Dimensions
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, TabHeading, List, ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as getUserProfileAction from '../../actions/getUserProfileAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {User} from '../../navigators/appRouter';
class userComponent extends Component {
    constructor(){
        super();
    }
    componentWillMount(){
        this.props.getUserProfileAction.getUserProfile(this.props.navigation.state.params.username);
        this.props.getUserProfileAction.getProductsOfUser(this.props.navigation.state.params.username, 1, this.props.token);
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
                        <Title style={part.navTitle}>{this.props.navigation.state.params.username} </Title>
                    <Right>
                        <Button transparent>
                            <Icon name="user-plus" size={size.icon} color={color.navTitle}/>
                        </Button>
                    </Right>
                </Header>
                <User/>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        user: state.getUserProfile.user,
        productsUser: state.getUserProfile.productsUser,
        token: state.login.token,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(userComponent);