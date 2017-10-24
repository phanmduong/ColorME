import React, {Component} from 'react';
import {
    View, TouchableOpacity, Modal, KeyboardAvoidingView, FlatList, PanResponder
} from 'react-native';
import {
    Card, CardItem,  Input, Item,
    Thumbnail, Text, Button, Left, Body, Right,
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as getFullInfoAboutOnePostAction from '../../actions/inforAboutPostAction';

class CommentModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modalVisibleInModal: false
        }
    }

    componentWillMount(){
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
    }

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({modalVisibleInModal: false});
        }
    }

    render() {
        const {user} = this.props;
        return (
            <View></View>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token,
        post: state.getFullInfoAboutOnePost.post,
        comments: state.getFullInfoAboutOnePost.comments,
        isLoading: state.getFullInfoAboutOnePost.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFullInfoAboutOnePostAction: bindActionCreators(getFullInfoAboutOnePostAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentModal);