import React, {Component} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity, Image, Platform} from 'react-native';
import {SIZES, COLORS, STRINGS, FONTS} from '../../constants';
import {NetworkInfo} from 'react-native-network-info';
import {observer} from "mobx-react";
import blogStore from './blogStore';
import IconDefault from '../../commons/IconDefault';

import getProfileStore from "../profile/profileStore";
import {ButtonCommon} from '../../commons';
import {formatImageLink} from "../../helper/index"
import QRCode from 'react-native-qrcode';

@observer
export default class ModalCheckInStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mac_id: ''
        }
    }

    componentWillMount() {
        getProfileStore.getProfile();
    }

    componentDidMount() {

        NetworkInfo.getBSSID(bssid => {
            if (bssid && bssid != 'error' && bssid.indexOf("bssid") == -1) {
                this.state.mac_id = bssid

            } else {

            }
        });
    }

    attendance = () => {
        console.log("aaa");
        const {mac_id} = this.state;

        deviceStore.checkDevice(
            blogStore.attendanceData.id,
            blogStore.attendanceData.lesson[0].class_lesson_id,
            // (Array.isArray(blogStore.attendanceData) && blogStore.attendanceData.length > 0) ? blogStore.attendanceData.length - 1 : null,
            mac_id,
        )
    }


    render() {
        const urlCode = 'http://api.qrserver.com/v1/create-qr-code/?color=000000&bgcolor=FFFFFF&data=' + blogStore.attendanceData.register_code + '&qzone=1&margin=0&size=400x400&ecc=L&format=png&download=1'
        return (
            blogStore.attendanceData.id ?
                <View style={[{
                    height: SIZES.DEVICE_HEIGHT_SIZE * 0.8,
                    width: SIZES.DEVICE_WIDTH_SIZE * 0.9,
                    backgroundColor: COLORS.LIGHT_COLOR,
                    borderRadius: 20,
                    justifyContent: 'center',
                }, styles.paddingLeftRight]}>
                    <View style={{marginBottom: 10}}>
                        <View style={[styles.wrapperCenter, {flexDirection: 'row', marginTop: 30}]}>

                            <Image
                                style={[styles.avatarUserNormals, {marginRight: -15}]}
                                source={{uri: blogStore.attendanceData.avatar_url}}/>
                            <Image
                                style={[styles.avatarUserNormals]}
                                source={getProfileStore.updateUser.avatar_url ? {uri: formatImageLink(getProfileStore.updateUser.avatar_url)} : require('../../../assets/image/colorMe.jpg')}/>

                        </View>
                        <Text style={[styles.textDescriptionDark, {fontWeight: 'bold', marginTop: 20, fontSize: 20}]}>Điểm
                            danh</Text>
                        <Text
                            style={[styles.textDescriptionDark, {marginTop: 10}]}>Chào {getProfileStore.updateUser.name} ,
                            hiện tại bạn đang học buổi {blogStore.attendanceData.lesson[0].order} của
                            lớp {blogStore.attendanceData.name}, bạn muốn thực hiện việc điểm danh không?</Text>
                    </View>
                    <View style={{flex: 1, borderTopColor: 'gray', borderTopWidth: 1}}>
                        <View style={{flexDirection: 'row', marginTop: 20}}>
                            <Text style={[styles.textDescriptionDark, {fontFamily: FONTS.MAIN_FONT_BOLD}]}>Họ và tên
                                : </Text>
                            <Text style={[styles.textDescriptionDark]}>{getProfileStore.updateUser.name}</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 3}}>
                            <Text style={[styles.textDescriptionDark, {fontWeight: 'bold'}]}>Lớp : </Text>
                            <Text style={[styles.textDescriptionDark]}>{blogStore.attendanceData.name}</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 3}}>
                            <Text style={[styles.textDescriptionDark, {fontWeight: 'bold'}]}>Buổi : </Text>
                            <Text style={[styles.textDescriptionDark]}>{blogStore.attendanceData.lesson[0].order}</Text>
                        </View>
                        <View style={styles.containerQRcode}>

                            {
                                blogStore.attendanceData.register_code &&
                                <View>
                                    <QRCode
                                        value={blogStore.attendanceData.register_code}
                                        size={128}
                                        bgColor='#000000'
                                        fgColor='#FFFFFF'/>
                                    <Text style={{textAlign: 'center'}}>
                                        {blogStore.attendanceData.register_code}
                                    </Text>
                                </View>
                            }
                        </View>
                        {/*<View style={styles.wrapperButton}>*/}
                        {/*<ButtonCommon*/}
                        {/*isLoading={blogStore.isLoadingAttendent}*/}
                        {/*onPress={this.attendance}*/}
                        {/*label={'ĐIỂM DANH'}*/}
                        {/*text={{*/}
                        {/*fontFamily: 'Roboto-Bold',*/}
                        {/*fontSize: SIZES.SUBTITLE_SIZE*/}
                        {/*}}*/}
                        {/*/>*/}
                        {/*</View>*/}
                    </View>

                </View>
                : null
        );
    }
}
const wrapperCenter = {
    justifyContent: 'center',
    alignItems: 'center',
}
const styles = StyleSheet.create({
    wrapperCenter: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatarUserNormals: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: Platform.OS == "ios" ? '#fff' : null,
    },
    containerQRcode: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageQRcode: {
        width: 150,
        height: 150,
    },
    wrapperModalComment: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paddingLeftRight: {
        paddingHorizontal: 25,
    },
    textDescriptionDark: {
        color: '#000',
        fontFamily: FONTS.MAIN_FONT,
        fontSize: 12,
    },
    wrapperButton: {
        ...wrapperCenter,
        // width: SIZES.DEVICE_WIDTH_SIZE * 0.9,
        paddingHorizontal: 30,
        marginBottom: 20,
    },
})

