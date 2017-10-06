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
    render() {
        return (
            <Content style={part.wrapperContainer}>
                {
                    (this.props.products.length === 0)
                        ?
                        (
                            <Body>
                                <Text style={[part.padding, part.describeDark]}>{this.props.user.name} chưa có dự án nào.</Text>
                            </Body>
                        )
                        :
                        (
                            <FlatList
                                onEndReachedThreshold={5}
                                onEndReached={() => {}}
                                data={this.props.products}
                                renderItem={({item}) =>
                                    <Card style={{flex: 0}}>
                                        <CardItem cardBody>
                                            <Body>
                                            <Image
                                                source={{uri: item.thumb_url}}
                                                style={part.image}
                                            />
                                            </Body>
                                        </CardItem>
                                        <CardItem>
                                            <Left>
                                                <Thumbnail style={part.avatarUserSmall}
                                                           source={{uri: item.author.avatar_url}}/>
                                                <Body>
                                                <Text style={part.titleSmallDarkBold}>{item.author.name}</Text>
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
                                            <Text style={part.describeDark}>{item.title}</Text>
                                            </Body>
                                        </CardItem>

                                        <CardItem style={{height: 20}}>
                                            <Left>
                                                <Button transparent style={part.paddingRight}>
                                                    <Icon name="heart-o" size={size.icon}/>
                                                    <Text style={[part.describeDark, part.paddingLeft]}>{item.likes_count}</Text>
                                                </Button>
                                                <Button transparent style={part.paddingRight}>
                                                    <Icon name="comment-o" size={size.icon}/>
                                                    <Text style={[part.describeDark, part.paddingLeft]}>{item.comments_count}</Text>
                                                </Button>
                                                <Button transparent style={part.paddingRight}>
                                                    <Icon name="eye" size={size.icon}/>
                                                    <Text style={[part.describeDark, part.paddingLeft]}>{item.views_count}</Text>
                                                </Button>
                                            </Left>
                                            <Right>
                                                <Text style={part.describeItalicDark}>{item.created_at}</Text>
                                            </Right>
                                        </CardItem>
                                        <CardItem style={{padding: 0}}>
                                            <Left>
                                                {
                                                    item.colors.map((color, i) => {
                                                        return (
                                                            <Button transparent key={i} style={part.paddingRight}>
                                                                <Icon name="circle" size={size.icon} color={'#' + color}/>
                                                            </Button>

                                                        );
                                                    })
                                                }
                                            </Left>
                                            <Right>
                                            </Right>
                                        </CardItem>
                                    </Card>
                                }/>
                        )
                }
            </Content>

        )
    }
}

function mapStateToProps(state) {
    return{
        products: state.getUserProfile.products,
        user: state.getUserProfile.user,
    }
}

function mapDispatchToProps(dispatch) {
    return{
        getUserProfileAction: bindActionCreators(getUserProfileAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);