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
        this.props.getUserProfileAction.getProgress(this.props.navigation.state.params.username);
        this.props.getUserProfileAction.getProductsOfUser(this.props.navigation.state.params.username, 1, this.props.token);
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                <User/>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        user: state.getUserProfile.user,
        token: state.login.token,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(userComponent);