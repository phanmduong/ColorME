import React, {Component} from 'react';
import {
    View, TouchableOpacity, Modal, PanResponder, KeyboardAvoidingView
} from 'react-native';
import {
    Container, Header, Content, Card, CardItem, Item, Picker, Input,
    Thumbnail, Text, Button, Left, Body, Right, ListItem, Spinner, Badge
} from 'native-base';
import Icon from '../../commons/Icon';
import part from '../../styles/partStyle';
import * as color from '../../styles/color';
import * as size from '../../styles/size';

export default class CommentModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
        }
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
    }

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({modalVisible: false});
        }
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
                      {...this.panResponder.panHandlers}
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
                                        onPress={() => this.commentPost(params.product_id, this.props.token, this.state)}
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