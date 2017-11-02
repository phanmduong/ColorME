import React, {Component} from 'react';
import {
    Item, Input
} from 'native-base';
import {
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import * as size from '../styles/size';

export default class InputSearchCommon extends Component{
    render(){
        return(
            <Item style={part.borderNone}>
                <Input placeholder="Search"
                       returnKeyType={'search'}
                       style={part.inputTheme01}

                />
                <TouchableOpacity>
                    <Icon name="search" style={part.padding} size={size.iconGiant} color={color.gray}/>
                </TouchableOpacity>
            </Item>
        );
    }
}