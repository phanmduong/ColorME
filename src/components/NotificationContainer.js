import React, {Component} from 'react';
import {
    View,
} from 'react-native';
import {
   Container, Thumbnail
} from 'native-base';
import * as getNotificationAction from '../actions/notificationAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class notificationComponent extends Component {
    render() {
        return (
            <View style={{marginTop: 22}}>
            </View>
        );
    }
}

function mapStateToProps(state) {
    return {
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getNotificationAction: bindActionCreators(getNotificationAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(notificationComponent);