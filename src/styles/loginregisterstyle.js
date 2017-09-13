import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({

    // FOR ALL
    wrapperContainer:{
        flex : 1,
        width : null,
        height : null,
        justifyContent : 'center',
        alignItems : 'center',
        resizeMode : 'stretch',
    },
    contentForm:{
        flex: 1
    },
    contentInput:{
        width: 300,
    },

    // LOGIN CSS

    containerTopLogin:{
        flex: 1
    },
    contentRouterRight:{
        marginTop: 30,
        flex: 1,
        justifyContent : 'center',
        borderRightWidth: 1,
        alignItems: 'flex-end',
        borderColor: 'rgb(239, 239, 239)',
        width: 300,
    },
    buttonRouter:{
        width: 300,
    },
    textRouterRight:{
        color: 'rgb(239, 239, 239)',
        fontSize: 15,
        fontWeight: '100',
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: 'transparent',
    },
    containerColorME:{
        flex: 9,
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
    containerTopForgotPassword:{
        flex: 1,
    },
    containerForgetPassword:{
        flex: 9,
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
    containerTopRegister:{
        flex: 3,
    },
    containerRegister:{
        flex: 3,
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
        flex: 10,
    },

    //REGISTER + FORGOT PASSWORD
    textRouterLeft:{
        color: 'rgb(239, 239, 239)',
        fontSize: 15,
        fontWeight: '100',
        alignSelf: 'flex-start',
        padding: 10,
        backgroundColor: 'transparent',
    },
    contentRouterLeft:{
        marginTop: 30,
        flex: 1,
        justifyContent : 'center',
        borderLeftWidth: 1,
        alignSelf: 'flex-start',
        borderColor: 'rgb(239, 239, 239)',
        width: 300,
    },
    backButton:{
        marginTop: 10,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'transparent'
    },
    textButtonBack:{
        color: 'rgba(239, 239, 239, 0.8)',
        fontSize: 16
    },
})
export default styles;
