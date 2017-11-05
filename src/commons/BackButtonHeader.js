import React, {Component} from 'react';
import {
    TouchableOpacity
} from 'react-native';
import Icon from './Icon';
import * as color from '../styles/color';
import part from '../styles/partStyle';
import * as size from '../styles/size';

class BackButtonHeader extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={() => this.props.goBack(null)}
                style={part.wrapperBackButton}
            >
                <Icon name="entypo|chevron-thin-left"
                      size={size.iconBig}
                      color={color.text}
                />
            </TouchableOpacity>
        );
    }
}

export default BackButtonHeader;