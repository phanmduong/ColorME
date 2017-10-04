import React, {Component} from 'react';
import {
    Image, Dimensions
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, Tabs, Tab, TabHeading, List, ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import * as getUserProfileAction from '../../actions/getUserProfileAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Project extends Component {
    render() {
        return (
            <Content style={part.wrapperContainer}>
                <Card style={{flex: 0}}>
                    <CardItem cardBody>
                        <Body>
                        <Image resizeMode="stretch"
                               source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwfMzZWidbLDPeiep0Gtn2B1pi_1GGtgBQrKcxpJSnuCDSQ3KidQ'}}
                               style={{height: 200, width: Dimensions.get('window').width - 4, flex: 1}}
                        />
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Left>
                            <Thumbnail style={part.avatarUserSmall}
                                       source={{uri: 'https://s-media-cache-ak0.pinimg.com/736x/5c/31/b8/5c31b8bfabdce76124e9ad9e699a6067--naruto-uzumaki.jpg'}}/>
                            <Body>
                            <Text style={part.titleSmallDarkBold}>Coz</Text>
                            </Body>
                        </Left>
                        <Right>
                            <Button transparent>
                                <Icon name="ellipsis-v" size={size.icon}/>
                            </Button>
                        </Right>
                    </CardItem>


                    <CardItem>
                        <Body>
                        <Text style={part.titleSmallDarkBold}>6 likes</Text>
                        <Text style={part.describeDark}>Hôm nay là chủ nhật ...</Text>
                        </Body>
                    </CardItem>

                    <CardItem>
                        <Left>
                            <Button transparent>
                                <Icon name="thumbs-o-up" size={size.icon}/>
                            </Button>
                            <Button transparent>
                                <Icon name="comment-o" size={size.icon}/>
                            </Button>
                        </Left>
                        <Right>
                            <Text style={part.describeItalicDark}>11h ago</Text>
                        </Right>
                    </CardItem>
                </Card>
            </Content>

        )
    }
}

function mapStateToProps(state) {
    return{
        user: state.getUserProfile.user,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);