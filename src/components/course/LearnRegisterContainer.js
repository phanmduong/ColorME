import React, {Component} from 'react';
import {Platform, 
    StatusBar, Modal, Image, PanResponder, Text, TouchableOpacity,ActivityIndicator,
     View, ScrollView, Alert} from 'react-native';

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
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BackButton from '../../commons/BackButton';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import parallaxStyle from '../../styles/parallaxStyle';
import * as courseAction from '../../actions/courseAction';
import * as size from '../../styles/size';
import * as color from '../../styles/color';
import ListCourse from "./ListCourse";
class LearnRegisterContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            modalRegister: false,
            name: '',
            study_time: '',
            description: '',
            address: '',
            avatar_url: this.props.navigation.state.params.avatar_url,
            isEnrolled: [],
            classes: [],
            status: [],
            key: '',
            isLoading : false
        }
        this.buttonRegister = this.buttonRegister.bind(this)
    }
    isLoading(){
        this.setState({isLoading : true})
        setTimeout(() => this.setState({isLoading : false}), 500)
    }

    componentWillMount() {
        this.isLoading()
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: (event, gestureState) => true,
            onPanResponderGrant: this._onPanResponderGrant.bind(this),
        })
        let classes = [];
        let isEnrolled = [];
        let status = [];
        ;
        let i = 0;
        let data = this.props.navigation.state.params.classes;
        while (i < data.length) {
            let key = {key: i};
            let arr2 = data[i].status;
            let arr1 = data[i].isEnrolled;
            let arr = Object.assign(data[i], key);
            classes.push(arr);
            isEnrolled.push(arr1);
            status.push(arr2);
            i++;
        }
        this.setState({classes: classes, isEnrolled: isEnrolled, status: status});
    }
    componentWillReceiveProps(nextProps){
      if(nextProps.isLoadingLearnRegister !== this.props.isLoadingLearnRegister && !nextProps.isLoadingLearnRegister){
          this.setState({modalRegister : false})
        if(nextProps.statusRegister == 200){
        let isEnrolled = this.state.isEnrolled;
        let status = this.state.status;
        isEnrolled[this.state.classes.findIndex(item => item.id == nextProps.class_id)]=!isEnrolled[this.state.classes.findIndex(item => item.id == nextProps.class_id)]
        status[this.state.classes.findIndex(item => item.id == nextProps.class_id)] = 1;
        this.setState({isEnrolled : isEnrolled, status : status})
        
        }
        //   if(nextProps.statusRegister == 200){
        //       Alert.alert("Thông báo", "Đăng kí thành công")
        //   }else {
        //       Alert.alert("Thông báo", "Đăng kí thất bại", nextProps.message)
        //   }
      }
    }
    // componentWillUpdate(nextState) {
    //     if (nextState.classes !== this.state.classes || nextState.isEnrolled !== this.state.status || nextState.status !== this.state.status) {
    //         let i = 0;
    //         while (i < nextState.classes.length) {
    //             this.buttonRegister(nextState.classes[i], nextState.status[i], nextState.isEnrolled[i]);
    //             i++;
    //         }
    //     }
    // }

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
            key: item.key,
            id: item.id,
            name: item.name,
            course: item.course,
            study_time: item.study_time,
            description: item.description,
            address: item.address,
        })
    }

    learnRegister(id, token, index) {
        let isEnrolled = this.state.isEnrolled;
        let status = this.state.status;
        this.props.courseAction.learnRegister(id, token);  
        // isEnrolled[index] = !isEnrolled[index];
        // status[index] = 1;
        // this.setState({isEnrolled: isEnrolled, status: status});
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
        const {isLoadingLearnRegister} = this.props;
        let {status, isEnrolled} = this.state;
        return (
            <Container style={[part.wrapperContainer, {paddingBottom: 0}]}>
                <StatusBar
                    backgroundColor={color.bgModal}
                    barStyle={Platform.OS === 'ios' ? "dark-content" : "light-content"}
                />
                <ParallaxScrollView
                    backgroundColor={color.backGround}
                    showsVerticalScrollIndicator={false}
                    headerBackgroundColor={color.backGround}
                    stickyHeaderHeight={size.STICKY_HEADER_HEIGHT}
                    parallaxHeaderHeight={80}
                    backgroundSpeed={10}
                    renderBackground={() => (
                        <View style={part.wrapperImageInGetFull}>
                            <View key="background">
                            </View>
                        </View>
                    )}
                    renderForeground={() => (
                        <View key="parallax-header" style={[parallaxStyle.parallaxHeaderTitle]}>
                            <View>
                                <CardItem style={[part.cardHeader, part.noPaddingTopBottom]}>
                                    <Item style={part.noBorder}>
                                        <Text style={part.titlePost} numberOfLines={1}>
                                            Đăng ký lớp học
                                        </Text>
                                    </Item>
                                </CardItem>
                            </View>
                        </View>

                    )}
                    renderStickyHeader={() => (
                        <View key="sticky-header" style={parallaxStyle.stickySection}>
                            <View style={part.iconInDrawerNav}>
                                <Left style={Platform.OS === 'ios' ? {
                                    flexDirection: 'row',
                                    marginTop: 20
                                } : {flexDirection: 'row'}}>
                                    <Body style={{padding: 30}}>
                                    <Text style={part.titleSmallDarkGrayBold} numberOfLines={1}>
                                        Đăng ký lớp học
                                    </Text>
                                    </Body>
                                </Left>
                            </View>
                        </View>
                    )}
                    renderFixedHeader={() => (
                        <View key="fixed-header" style={part.iconInDrawerNav}>
                            <Left style={Platform.OS === 'ios' ? {marginTop: 20} : {marginTop: 10}}>
                                <BackButton goBack={goBack}/>
                            </Left>
                        </View>
                    )}
                >
                    <ScrollView>
                        {
                            this.state.isLoading
                                ?
                                <View
                                    style={{
                                        marginTop: 20,
                                        flex: 1,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Spinner
                                        color={color.gray}/>
                                </View>
                                :
                                this.state.classes.map((item, i) => {
                                    return (
                                        // 
                                        <ListCourse item = {item} 
                                        avatar_url = {this.state.avatar_url}
                                         buttonRegister = {this.buttonRegister}
                                         status = {status[i]}
                                         isEnrolled = {isEnrolled[i]}
                                         />
                                    )
                                })
                        }
                    </ScrollView>
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
                                        <Image
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
                                        <Text style={[part.titleGrayThin, part.paddingLine]}>Bạn đang tiến hành đăng ký
                                            lớp
                                            <Text
                                                style={part.titleSmallDarkGray}> {this.state.course} {this.state.name}</Text></Text>
                                        <Text style={[part.titleGrayThin, part.paddingLine]}>Thời gian học <Text
                                            style={part.titleSmallDarkGray}>{this.state.study_time}</Text></Text>
                                        <Text style={[part.titleGrayThin, part.paddingLine]}><Text
                                            style={part.titleSmallDarkGray}>{this.state.description}</Text></Text>
                                        <Text style={[part.titleGrayThin, part.paddingLine]}>Tại: <Text
                                            style={part.titleSmallDarkGray}>{this.state.address}</Text></Text>
                                        <Text style={[part.titleGrayThin, part.paddingLine]}>Hãy xác nhận để colorME
                                            giúp
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
                                        onPress={() => this.learnRegister(this.state.id, this.props.token, this.state.key)}
                                    >
                                     {(this.props.isLoadingLearnRegister) ? (
                                        <Container style={{
                                            padding: 10,
                                            flex: 1,
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <ActivityIndicator
                                                animated={true}
                                                color={color.navTitle}
                                                style={{
                                                    flex: 1,
                                                    justifyContent: 'center',
                                                    alignItems: 'center',
                                                    height: 40,
                                                }}
                                                size='small'
                                            />
                                        </Container>
                                    ) : (
                                        <Text style={styles.textButton}>Xác nhận</Text>
                                    )
                                    }
                                        
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    </Modal>
                </ParallaxScrollView>
            </Container>
        );
    }
}

function mapStateToProps(state) {
    return {
        token: state.login.token,
        isLoadingLearnRegister: state.getCourse.isLoadingLearnRegister,
        statusRegister : state.getCourse.statusRegister,
        message : state.getCourse.message,
        class_id : state.getCourse.class_id
    }
}

function mapDispatchToProps(dispatch) {
    return {
        courseAction: bindActionCreators(courseAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LearnRegisterContainer);
