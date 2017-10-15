import {StyleSheet, Dimensions, Platform} from 'react-native';
import * as size from './size';
import * as color from './color';

let wid = Dimensions.get('window').width;
let hei = Dimensions.get('window').height;

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
        width: wid - wid * 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInputGroup: {
        width: wid - wid * 0.2,
    },
    textInput: {
        margin: 5,
        fontSize: 11,
        padding: 10,
    },
    textTitleInput: {
        backgroundColor: color.none,
        paddingLeft: 25,
        marginTop: 25,
        color: color.main,
        fontWeight: (Platform.OS === 'ios') ? '900' : 'normal',
    },
    inputGroup: {
        borderColor: color.none,
        marginTop: 10,
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: color.navTitle
    },
    contentForm: {
        backgroundColor: color.navTitle,
        flex: 1,
        height: hei / 2 - 30,
        width: wid - wid * 0.2,
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
        marginLeft: wid * 0.2,
    },
    contentFormRegister: {
        backgroundColor: '#fff',
        flex: 1,
        height: hei / 2,
        width: wid - wid * 0.2,
        borderRadius: 15,
        elevation: 10,
        shadowColor: color.gray,
        shadowOffset: {
            width: 0,
            height: 3
        },
        shadowRadius: 10,
        shadowOpacity: 0.4,
        marginLeft: wid * 0.2,
        justifyContent: 'center',
        alignItems: 'flex-start',
        position: 'absolute',
    },
    textAccept: {
        color: color.gray,
        fontWeight: 'bold',
    },
    textBottom: {
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
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        fontSize: 13,
        fontFamily: 'Verdana-Bold'
    },
    buttonRegister: {
        width: wid - wid * 0.4,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginTop: 15,
        borderRadius: 20,
        backgroundColor: 'rgba(197, 0, 0, 1)',
    },
    textSignUp: {
        fontSize: 11,
        margin: 5,
        fontWeight: (Platform.OS === 'ios') ? '700' : 'normal',
    },
    textSignUpTitle: {
        fontWeight: 'bold'
    },

    textME: {
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        fontSize: 100,
        fontWeight: (Platform.OS === 'ios') ? '900' : 'normal',
        lineHeight: (Platform.OS === 'ios') ? 100 : 70,
    },
    textColor: {
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        fontSize: 30,
        fontWeight: (Platform.OS === 'ios') ? '700' : 'normal',
        marginLeft: 70

    },
    wrapperColorME: {
        flex: 2,
        width: wid,
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
        width: wid - wid * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    wrapperForgot: {
        bottom: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textRegisterChild: {
        marginRight: 10,
        color: 'rgba(256, 256 , 256 , 1)',

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