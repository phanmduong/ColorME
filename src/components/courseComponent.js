import React, {Component} from 'react';
import {
    Image, FlatList
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail,
    Text, Button, Left, Body, Right, ListItem, List
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as getCourseAction from '../actions/getCourseAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import * as size from '../styles/size';
class courseComponent extends Component{
    constructor(){
        super();
    }
    componentWillMount() {
        this.props.getCourseAction.getCourse(this.props.token);
    }
    render(){
        return(
            <Container style={part.wrapperContainer}>
                <Content>
                    <FlatList
                        onEndReachedThreshold={5}
                        data={this.props.courses}
                        renderItem={({item}) =>
                            <Text>{item.id}</Text>
                        }/>
                </Content>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return{
        courses: state.getCourse.courses,
        token: state.login.token
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getCourseAction: bindActionCreators(getCourseAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(courseComponent);