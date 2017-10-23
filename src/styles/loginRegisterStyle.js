import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as size from './size';
import * as color from './color';


const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.backGround,
        position: 'relative'
    },
    topContainerLogin: {
        backgroundColor: color.main,
    },

    midContainerLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginBottom: 100
    },
    itemButtonLogin: {
        borderBottomWidth: 0,
    },
    itemInput: {
        width: size.wid - size.wid * 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textTitleInput: {
        fontSize: 12,
        backgroundColor: color.none,
        paddingLeft: 25,
        marginTop: 25,
        color: color.main,
        fontWeight: (Platform.OS === 'ios') ? '600' : 'normal',
    },

    contentForm: {
        backgroundColor: color.navTitle,
        flex: 1,
        height: size.hei / 2 - 30,
        width: size.wid - size.wid * 0.2,
        borderRadius: 15,
        elevation: 10,
        shadowColor: color.gray,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        shadowOpacity: 0.4,
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'absolute',
        marginLeft: size.wid * 0.2,
    },

    textAccept: {
        fontSize: 12,
        color: color.gray,
        fontWeight: 'bold',
    },
    textBottom: {
        fontSize: 12,
        color: color.darkGray,
        fontWeight: '600',
    },
    text: {
        backgroundColor: color.none,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        color: '#797979',
        fontFamily: 'Verdana',
        fontSize: size.describeSmall,
    },
    textButton: {
        fontWeight: '500',
        justifyContent: 'center',
        alignItems: 'center',
        color: color.navTitle,
        fontSize: 13,
        fontFamily: 'Verdana-Bold'
    },
    buttonRegister: {
        width: size.wid - size.wid * 0.4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginTop: 15,
        borderRadius: 20,
        backgroundColor: 'rgba(197, 0, 0, 1)',
    },
    textME: {
        backgroundColor: 'transparent',
        color: color.navTitle,
        fontSize: 100,
        fontWeight: (Platform.OS === 'ios') ? '900' : 'normal',
        lineHeight: (Platform.OS === 'ios') ? 100 : 70,
    },
    textColor: {
        backgroundColor: 'transparent',
        color: color.navTitle,
        fontSize: 30,
        fontWeight: (Platform.OS === 'ios') ? '700' : 'normal',
        marginLeft: 70

    },
    wrapperColorME: {
        flex: 2,
        width: size.wid,
        backgroundColor: color.main,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperForm: {
        flex: 3,
        backgroundColor: color.backGround,
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    wrapperRegister: {
        flex: 1,
        width: size.wid - size.wid * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperForgot: {
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    wrapperIcon: {
        width: 35,
    },
    icon: {
        color: color.navTitle,
        paddingRight: 10,
    }
})
export default styles