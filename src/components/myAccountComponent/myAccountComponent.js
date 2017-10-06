import React, {Component} from 'react';
import {
    Image, Dimensions
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, Tabs, Tab, TabHeading, List, ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as getUserProfileAction from '../../actions/getUserProfileAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {User} from '../../navigators/appRouter';

class myAccountComponent extends Component {
    componentWillMount() {
        this.props.getUserProfileAction.getUserProfile(this.props.user.username);

    }

    render() {
        return (
            <Container>
                <Header
                    style={part.navTop}
                    iosBarStyle={'light-content'}
                    backgroundColor={color.main}>
                    <Left/>
                    <Title style={part.navTitle}>{this.props.user.username}</Title>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('Setting')}>
                            <Icon name="cog" size={size.icon} color={color.navTitle}/>
                        </Button>
                    </Right>
                </Header>
                <User/>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.login.user,
        productsUser: state.getUserProfile.productsUser,

    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(myAccountComponent);