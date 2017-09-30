import {StyleSheet,Dimensions,Platform} from 'react-native';
let wid = Dimensions.get('window').width

 const styles = StyleSheet.create({
    wrapperContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        resizeMode : 'stretch',
        width : null,
        height: null
    },
        topContainerRegister:{
           flex: 3,
           justifyContent: 'center',
            alignItems: 'center',
     },
     topContainerLogin : {
         flex: 4,
         justifyContent: 'center',
         alignItems: 'center',
     },
        textRegister : {
            backgroundColor: 'transparent',
            color: '#FFFFFF',
            fontSize: 35,
            fontWeight: (Platform.OS === 'ios') ? '700' : 'normal',
            fontFamily : 'Zapf Dingbats'
        },
     midContainer:{
         flex: 10,
         alignItems: 'center',
     },
         textInputGroup:{
             width: wid - wid * 0.2,
         },
     textInput: {
         height: 54,
         margin: 5,
         fontSize: 11,
         padding: 10,
     },
     bottomContent:{
         width: wid,
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         borderTopWidth: 0.5,
     },
     textSignUp:{
         fontSize: 11,
         margin: 5,
         fontWeight: (Platform.OS === 'ios') ? '700' : 'normal',
     },
     textSignUpTitle:{
         fontWeight: 'bold'
     },
     buttonRegister: {
         alignItems: 'center',
         borderWidth: 0.5,
         justifyContent: 'center',
         padding: 10,
         margin: 7,
         backgroundColor: '#FF4000'
     },
})
export default styles