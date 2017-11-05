import React, {Component} from 'react';
import {
    Text, TouchableOpacity, View, FlatList, Modal, PanResponder
} from 'react-native';

import {
    Body, Button, CardItem, Container, Content, Header,
    Left, Right,
} from 'native-base';
import styles from '../../styles/loginRegisterStyle'
import BackButtonHeader from '../../commons/BackButtonHeader';
import part from '../../styles/partStyle';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseAction from '../../actions/courseAction';
import * as size from '../../styles/size';
import FastImage from 'react-native-fast-image';

class LearnRegisterContainer extends Component {
    constructor() {
        super();
        this.state = {
            id: '',
            modalRegister: false,
            name: '',
            study_time: '',
            description: '',
            address: '',
            avatar_url: '',
            isEnrolled: false,
            classes: [],

        }
    }

    componentWillMount() {
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
        this.setState({classes: this.props.navigation.state.params.classes});
    }

    _onPanResponderGrant(event, gestureState) {
        if (event.nativeEvent.locationX === event.nativeEvent.pageX) {
            this.setState({
                modalRegister: false,
            });
        }
    }


    setVisibleModalRegister(visible) {
        this.setState({modalRegister: visible});
    }

    openRegisterModal(item) {
        this.setVisibleModalRegister(true);
        this.setState({
            id: item.id,
            name: item.name,
            course: item.course,
            study_time: item.study_time,
            avatar_url: item.avatar_url,
            description: item.description,
            address: item.address,
        })
    }

    learnRegister(id, token) {
        this.props.courseAction.learnRegister(id, token);
    }

    buttonRegister(item, status, isEnrolled) {
        switch (status) {
            case 1:
                return (
                    isEnrolled
                        ?
                        <TouchableOpacity
                            style={part.buttonLeftRegisterGray}>
                            <Text style={part.titleNormalLight}>Đã đăng ký</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            onPress={() => this.openRegisterModal(item)}
                            style={part.buttonLeftRegisterMain}>
                            <Text style={part.titleNormalLight}>Đăng ký</Text>
                        </TouchableOpacity>

                )
            case 0:
                return (
                    isEnrolled
                        ?
                        <TouchableOpacity
                            style={part.buttonLeftRegisterGray}>
                            <Text style={part.titleNormalLight}>Đã đăng ký</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity
                            style={part.buttonLeftRegisterGray}>
                            <Text style={part.titleNormalLight}>Đã hết chỗ</Text>
                        </TouchableOpacity>
                )
        }
    }

    render() {
        const {params} = this.props.navigation.state;
        const {goBack} = this.props.navigation;
        return (
            <Container style={[part.wrapperContainer, {paddingBottom: 0}]}>
                <Header
                    style={part.navTop}
                    iosBarStyle='dark-content'
                >
                    <Left style={{flexDirection: 'row'}}>
                        <BackButtonHeader goBack={goBack}/>
                        <Body>
                        <Text style={part.titleSmallDark}>Đăng ký lớp học</Text>
                        </Body>
                    </Left>

                </Header>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={this.state.classes}
                    renderItem={({item}) =>
                        <CardItem
                            avatar
                            style={[part.backgroundNone, part.noMarginLeft, part.padding, part.haveBorderBottom]}>
                            <TouchableOpacity
                                activeOpacity={0.8}
                                style={{flex: 1}}
                            >
                                <View style={part.cardCmt}>
                                    <FastImage
                                        style={[part.avatarUserNormal, part.marginRightFar]}
                                        source={{uri: item.avatar_url}}/>
                                    <Body style={part.noBorder}>
                                    <Text style={part.titleSmallBlue}>Lớp {item.name}</Text>
                                    <Text style={part.titleSmallDarkGrayBold}>{item.study_time}</Text>
                                    <Text style={part.titleSmallDarkGrayBold}>{item.address}</Text>
                                    <Text style={part.titleSmallDarkGrayBold}>{item.description}</Text>
                                    {this.buttonRegister(item, item.status, item.isEnrolled)}
                                    </Body>
                                </View>
                            </TouchableOpacity>
                        </CardItem>
                    }
                />
                <Modal
                    presentationStyle="overFullScreen"
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalRegister}
                >
                    <View
                        style={[part.wrapperModalComment]}
                        {...this.panResponder.panHandlers}
                    >
                        <View style={[part.modalRegister, part.padding]}>
                            <CardItem
                                avatar
                                style={[part.backgroundNone, part.noMarginLeft, part.padding, part.noBorder, part.noPaddingBottom]}>
                                <Left>
                                    <FastImage
                                        style={part.avatarUserNormal}
                                        source={{uri: this.state.avatar_url}}/>
                                    <Body style={part.noBorder}>
                                    <Text style={part.titleSmallBlue}>Đăng ký học {this.state.course}</Text>
                                    <Text style={part.titleSmallDarkGray}>Xác nhận đăng ký</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem
                                style={[part.backgroundNone, part.noMarginLeft, part.noBorder, part.noPadding]}>
                                <Left>
                                    <Body>
                                    <Text style={[part.titleGrayThin, part.paddingLine]}>Bạn đang tiến hành đăng ký lớp
                                        <Text style={part.titleSmallDarkGray}> {this.state.course} {this.state.name}</Text></Text>
                                    <Text style={[part.titleGrayThin, part.paddingLine]}>Thời gian học <Text
                                        style={part.titleSmallDarkGray}>{this.state.study_time}</Text></Text>
                                    <Text style={[part.titleGrayThin, part.paddingLine]}><Text
                                        style={part.titleSmallDarkGray}>{this.state.description}</Text></Text>
                                    <Text style={[part.titleGrayThin, part.paddingLine]}>Tại: <Text
                                        style={part.titleSmallDarkGray}>{this.state.address}</Text></Text>
                                    <Text style={[part.titleGrayThin, part.paddingLine]}>Hãy xác nhận để colorME giúp
                                        bạn hoàn thành thủ tục nhé</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <View style={{
                                width: size.wid * 0.9 - 20,
                                alignItems: 'center',
                            }}>
                                <TouchableOpacity
                                    rounded
                                    style={styles.buttonRegister}
                                    onPress={() => this.learnRegister(this.state.id, this.props.token)}

                                >

                                    <Text style={styles.textButton}>Xác nhận</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token,
        isLoadingLearnRegister: state.getCourse.isLoadingLearnRegister,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        courseAction: bindActionCreators(courseAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnRegisterContainer);
