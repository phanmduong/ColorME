import {StyleSheet,Dimensions,Platform} from 'react-native';
import * as size from './size';
import * as color from './color';
let wid = Dimensions.get('window').width;

 const styles = StyleSheet.create({
    wrapperContainer: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'rgb(17, 25, 33)',
    },
     topContainerLogin : {
         backgroundColor : color.none,
         marginTop : 50,
     },

     midContainerLogin : {
         flex : 1,
         alignItems: 'center',
         justifyContent: 'center',
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
     inputGroup:{
         borderColor : color.none,
         marginTop: 10,
         paddingLeft: 10,
         paddingRight: 10,
         backgroundColor:'rgba(158, 158, 158, 0.15)'
     },

     buttonRegister: {
         marginLeft: 2,
         marginRight: 0,
         alignItems: 'center',
         justifyContent: 'center',
         padding: 15,
         marginTop: 10,
         backgroundColor : 'rgba(197, 0, 0, 1)',

     },
     textSignUp:{
         fontSize: 11,
         margin: 5,
         fontWeight: (Platform.OS === 'ios') ? '700' : 'normal',
     },
     textSignUpTitle:{
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
         marginLeft : 0

     },
     wrapperColorME:{
        justifyContent:'center',
         alignItems:'flex-end',
     },
     textRegisterChild:{
         marginRight: 10,
         color: 'rgba(256, 256 , 256 , 1)',

     },
     icon : {
        color : color.navTitle,
     }
})
export default styles