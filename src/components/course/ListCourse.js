import React, {Component} from 'react';
import {Platform, StatusBar, Modal, Image, PanResponder, Text, TouchableOpacity, View, ScrollView} from 'react-native';

import {
    List,
    ListItem,
    Body,
    Button,
    Card,
    CardItem,
    Container,
    Content,
    Input,
    Item,
    Left,
    Right,
    Spinner,
    Thumbnail
} from 'native-base';

import styles from '../../styles/loginRegisterStyle'
import part from '../../styles/partStyle';
import _ from "lodash"
import * as size from '../../styles/size';
import * as color from '../../styles/color';


export default class ListCourse extends Component{
    constructor(){
        super()
    }
    
        shouldComponentUpdate(nextProps , nextState){
            return !_.isEqual((nextProps.item, this.props.item) || (nextProps.status, this.props.status) || (nextProps.isEnrolled, this.props.isEnrolled) )
        }
   

    render(){
        const{item, avatar_url, status, isEnrolled} = this.props;
        return (
            <CardItem
            avatar
            style={[part.backgroundNone, part.noMarginLeft, part.padding, part.haveBorderBottom]}>
            <TouchableOpacity
                activeOpacity={0.8}
                style={{flex: 1}}
            >
                <View style={part.cardCmt}>
                    <Image
                        style={[part.avatarUserNormal, part.marginRightFar]}
                        source={{uri: this.props.avatar_url}}/>
                    <Body style={part.noBorder}>
                    <Text style={part.titleSmallBlue}>Lớp {item.name}</Text>
                    <Text style={part.titleSmallDarkGrayThin}>{item.study_time}</Text>
                    <Text style={part.titleSmallDarkGrayThin}>{item.address}</Text>
                    <Text style={part.titleSmallDarkGrayThin}>{item.description}</Text>
                    {this.props.buttonRegister(item, status, isEnrolled)}
                    </Body>
                </View>
            </TouchableOpacity>
           </CardItem>
        )
    }
}

 