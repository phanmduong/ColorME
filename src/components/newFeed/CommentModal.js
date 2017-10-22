import React, {Component} from 'react';
import {
    View, TouchableOpacity, Modal, KeyboardAvoidingView, FlatList
} from 'react-native';
import {
    Container, Header, Content, Card, CardItem,  Input, Item,
    Thumbnail, Text, Button, Left, Body, Right, Spinner,
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';
import FastImage from 'react-native-fast-image';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as getFullInfoAboutOnePostAction from '../../actions/inforAboutPostAction';

class CommentModal extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {

    }




    render() {
        const {user} = this.props;
        return (
            <Modal
                presentationStyle="overFullScreen"
                animationType="fade"
                transparent={true}
                visible={this.props.modalVisible}
                onRequestClose={() => {
                    alert("Modal has been closed.")
                }}
            >
                <View style={part.wrapperModalComment}
                >
                    <View style={part.modalComment}>
                        <KeyboardAvoidingView behavior={'position'}>
                            <CardItem footer style={part.cardTopInModal}>
                                <Left>
                                    <Button
                                        transparent style={part.paddingRight}
                                    >
                                        <Icon name="fontawesome|heart" size={12}
                                              color={color.main}/>
                                        <Text
                                            style={[part.describeGray, part.paddingLeft]}>{this.props.product_id}</Text>
                                    </Button>
                                </Left>
                            </CardItem>

                            <View style={part.wrapperCommentInModal}>
                                {
                                    !this.props.isLoading
                                    ?
                                        <FlatList
                                            onEndReachedThreshold={5}
                                            data={this.props.comments}
                                            renderItem={({item}) =>
                                                <CardItem style={part.cardHeader}>
                                                    <View style={item.parent_id === 0 ? part.cardCmt : part.cardRepCmt}>
                                                        <TouchableOpacity style={part.paddingTRB}
                                                        >
                                                            <FastImage
                                                                style={part.avatarUserNormal}
                                                                source={{uri: item.commenter.avatar_url}}/>
                                                        </TouchableOpacity>
                                                        <Body>
                                                        <Text
                                                            style={[part.titleSmallBlue, part.paddingTLB]}
                                                        >
                                                            {item.commenter.name}
                                                        </Text>
                                                        <Text
                                                            style={[part.describeDarkGray, part.paddingTLB]}
                                                        >
                                                            {item.content}
                                                        </Text>
                                                        <View style={{flexDirection: 'row'}}>
                                                            <Text
                                                                style={[part.describeLightGray, part.paddingTLB]}
                                                            >
                                                                {item.created_at}
                                                            </Text>
                                                            <Text
                                                                style={[part.describeLightGray, part.paddingTLB, part.marginLeftFar]}
                                                            >
                                                                Trả lời
                                                            </Text>
                                                        </View>

                                                        <View
                                                            style={[{flexDirection: 'row'}, part.paddingLine]}>
                                                        </View>
                                                        </Body>
                                                        <TouchableOpacity transparent>
                                                            <Icon name="fontawesome|heart-o"
                                                                  color={color.icon}
                                                                  size={size.icon}
                                                                  style={part.paddingRight}
                                                            />
                                                        </TouchableOpacity>
                                                    </View>
                                                </CardItem>
                                            }/>
                                    :
                                        <Text>Loading</Text>
                                }
                            </View>


                            <CardItem style={part.cardBottomInModal}>
                                <Left>
                                    <Thumbnail
                                        style={part.avatarUserSmall}
                                        source={{uri: user.avatar_url}}/>
                                    <Body>
                                    <Item rounded>
                                        <Input
                                            placeholder='Viết bình luận'
                                            autoCorrect={false}
                                            placeholderTextColor={color.icon}
                                            style={part.inputTheme01}
                                            onChangeText={
                                                (text) => {
                                                    this.setState({comment_content: text})
                                                }
                                            }
                                        />
                                        <TouchableOpacity>
                                            <Icon active name='fontawesome|camera-retro'
                                                  size={size.iconNormal}
                                                  color={color.icon}
                                                  style={{paddingRight: 15}}
                                            />
                                        </TouchableOpacity>
                                    </Item>
                                    </Body>
                                    <TouchableOpacity
                                        onPress={() => this.commentPost(this.props.product_id, this.props.token, this.state)}
                                    >
                                        <Icon active name='fontawesome|comment-o'
                                              size={size.iconBig}
                                              color={color.icon}
                                              style={[part.paddingTLB, {paddingLeft: 10}]}
                                        />
                                    </TouchableOpacity>
                                </Left>
                            </CardItem>
                        </KeyboardAvoidingView>
                    </View>
                </View>
            </Modal>
        )
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token,
        post: state.getFullInfoAboutOnePost.post,
        comments: state.getFullInfoAboutOnePost.comments,
        isLoading: state.getFullInfoAboutOnePost.isLoading,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getFullInfoAboutOnePostAction: bindActionCreators(getFullInfoAboutOnePostAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentModal);