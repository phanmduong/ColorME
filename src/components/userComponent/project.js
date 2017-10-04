import React, {Component} from 'react';
import {
    Image, Dimensions, FlatList
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem, Thumbnail, Text, CheckBox,
    Button, Left, Body, Right, TabHeading, List, ListItem,
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import part from '../../styles/partStyle';
import * as size from '../../styles/size';
import * as getUserProfileAction from '../../actions/getUserProfileAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

class Project extends Component {
    componentWillMount(){
        console.log(this.props.products);
    }
    render() {
        return (
            <Content style={part.wrapperContainer}>
                <FlatList
                    onEndReachedThreshold={5}
                    onEndReached={() => {}}
                    data={this.props.productsUser}
                    renderItem={({item}) =>
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
                                               source={{uri: ''}}/>
                                    <Body>
                                    <Text style={part.titleSmallDarkBold}>{item.id}</Text>
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
                    }/>
            </Content>

        )
    }
}

function mapStateToProps(state) {
    return{
        productsUser: state.getUserProfile.productsUser,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);