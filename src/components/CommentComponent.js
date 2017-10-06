import React, {Component} from 'react';
import {
    FlatList,View
} from 'react-native';
import {
    Title, Container, Header, Content, Card, CardItem,
    Thumbnail, Text, Button, Left, Body, Right,ListItem, Input,Item
} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome'
import part from '../styles/partStyle';
import * as size from '../styles/size'
import * as color from '../styles/color';
import * as getCommentAction from '../actions/Comment/getCommentAction';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
class commentComponent extends Component{
    constructor(){
        super()
    }
    componentWillMount(){
        this.props.getCommentAction.getComment(this.props.navigation.state.params.product_id)
    }
    render(){
        return (
            <Container style={part.wrapperContainer}>
                <Header style={part.navTop}
                        iosBarStyle={'light-content'}
                        backgroundColor={color.main}>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.goBack()}>
                            <Icon name="arrow-left" size={size.icon} color={color.navTitle}/>
                        </Button>
                    </Left>
                    <Body>
                    <Title style={part.navTitle}>Comments</Title>
                    </Body>
                    <Right></Right>
                </Header>
                <Content>
                    <FlatList
                        onEndReachedThreshold={5}
                        onEndReached={() => {}}
                        data={this.props.comments}
                        renderItem={({item}) =>
                            <ListItem avatar style={part.padding}>
                                <Left>
                                    <Thumbnail
                                        source={{uri: item.commenter.avatar_url}}/>
                                </Left>
                                <Body>
                                <Text style={part.titleSmallDark}>{item.commenter.name}</Text>
                                <Text style={part.describeGray} note>{item.content}</Text>
                                </Body>
                            </ListItem>
                        }
                    />
                    <Item style = {{marginBottom: 5}}>
                        <View>
                            <Icon name='address-book' size={size.icon} color={color.gray}/>
                        </View>
                        <Input placeholder=''
                               style={part.inputTheme03}
                               onChangeText={(userName) => {
                                   this.setState({userName})
                               }}
                        />
                    </Item>
                </Content>
            </Container>

        )
    }
}
function mapStateToProps(state) {
    return {
        comments : state.getComment.comments,
        isLoading : state.getComment.isLoading
    }
}
function mapDispatchToProps(dispatch){
    return {
        getCommentAction: bindActionCreators(getCommentAction, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(commentComponent)
