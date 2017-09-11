import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
    wrapperContainer:{
        flex : 1,
        width : null,
        height : null,
        justifyContent : 'center',
        alignItems : 'center',
        resizeMode : 'stretch',
    },
    changeButton:{
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'red',
    },
    containerColorME:{
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    contentColorME:{
        alignItems: 'flex-end',
    },
    textColor:{
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        fontSize: 35,
        fontWeight: (Platform.OS === 'ios') ? '700' : 'normal',
    },
    textME:{
        backgroundColor: 'transparent',
        color: '#FFFFFF',
        fontSize: 100,
        fontWeight: (Platform.OS === 'ios') ? '900' : 'normal',
        lineHeight: (Platform.OS === 'ios') ? 100 : 70,
    },
    contentForm:{
        flex: 1
    },
    contentInput:{
        width: 300,
    },
    buttonLogin:{
        backgroundColor: 'rgba(203, 0, 0, 0.7)',
        justifyContent:'center',
        alignItems:'center',
        padding: 15,
        borderRadius: 5
    },
    textButtonLogin:{
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textForgotPassword:{
        backgroundColor: 'transparent',
        marginBottom: 20,
        fontWeight: 'bold',
        alignSelf: 'flex-end',
        color: 'rgba(203, 0, 0, 0.9)',

    },
    textRegister:{
        backgroundColor: 'transparent',
        marginTop: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        color: 'rgba(239, 239, 239, 0.8)',
    },
    textRegisterChild:{
        marginRight: 10,
        color: 'rgba(256, 256 , 256 , 1)',

    },


    // FORGOT PASSWORD CSS
    logoLock:{
        width: 70,
        resizeMode: 'contain'
    },
    containerForgetPassword:{
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
        width: 300,
    },
    forgetPasswordTitle:{
        color: '#FFFFFF',
        fontSize: 25,
        backgroundColor: 'transparent',
        marginBottom: 10,
    },
    forgetPasswordContent:{
        color: '#FFFFFF',
        fontSize: 15,
        backgroundColor: 'transparent',
        textAlign: 'center',
    },

    //REGISTER CSS
    containerRegister:{
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center',
    },
    registerTitle:{
        color: '#FFFFFF',
        fontSize: 25,
        backgroundColor: 'transparent',
        marginBottom: 10,
    },
    contentFormRegister:{
        flex: 5,
    },


})
export default styles;