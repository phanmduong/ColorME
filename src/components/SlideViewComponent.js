import React, {Component} from 'react';
import {
    View, Text, Image, TouchableOpacity
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Item,
    Thumbnail, Button, Left, Body, Right, ListItem
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../styles/partStyle';
import * as color from '../styles/color';
import * as size from '../styles/size';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';


export default class SlideViewComponent extends Component {
    constructor() {
        super();
        this.state = {
            text: '',
        }
    }

    render() {
        return (
            <Container style={part.wrapperContainer}>
                <View style={part.wrapperImageInDrawer}>
                    <Image
                        style={part.imageInDrawer}
                        source={{uri: 'http://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk='}}/>
                    <View style={part.iconInDrawer}>
                        <TouchableOpacity onPress={this.props.navigation.navigate('DrawerClose')}>
                            <Icon name="chevron-left" size={size.iconBig}
                                  color={color.navTitle} style={{backgroundColor: color.none}}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={part.tabInDrawer}>
                        <Item style={{borderBottomWidth: 0,}}>
                            <Left>
                                <Thumbnail circle large
                                           source={{uri: 'http://media.istockphoto.com/photos/plant-growing-picture-id510222832?k=6&m=510222832&s=612x612&w=0&h=Pzjkj2hf9IZiLAiXcgVE1FbCNFVmKzhdcT98dcHSdSk='}}/>
                            </Left>
                            <Body>
                                <Text>AAAA</Text>
                            </Body>
                        </Item>
                    </View>
                </View>
            </Container>
        );
    }
}