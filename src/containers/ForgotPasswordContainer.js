/**
 * Created by phanmduong on 9/10/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import {bindActionCreators} from 'redux';
import ForgotPasswordComponent from '../components/ForgotPasswordComponent';

class ForgotPasswordContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <ForgotPasswordComponent/>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPasswordContainer);
