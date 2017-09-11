/**
 * Created by phanmduong on 9/10/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {Text} from 'react-native';
import {bindActionCreators} from 'redux';
import RegisterComponent from "../components/RegisterComponent";

class RegisterComponent extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <RegisterComponent/>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
