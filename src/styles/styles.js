import {StyleSheet,Dimensions,Platform} from 'react-native';
let wid = Dimensions.get('window').width

 const styles = StyleSheet.create({
    wrapperContainer: {
        flex : 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor : 'rgb(145, 10, 23)',
    },
     topContainerLogin : {
         backgroundColor : 'rgb(145, 10, 23)',
         marginTop : 50,
     },

     midContainer:{
         flex : 1,
         alignItems: 'center',
     },
     midContainerLogin : {
         flex : 1,
         alignItems: 'center',
         padding : 100,
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
         margin: 30,
         borderRadius :15,
         backgroundColor : '#dd2f43',

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
         fontSize: 35,
         fontWeight: (Platform.OS === 'ios') ? '700' : 'normal',
         marginLeft : 50

     },
     textRegisterChild:{
         marginRight: 10,
         color: 'rgba(256, 256 , 256 , 1)',

     },
     icon : {
        color : 'rgb(242,242,242)'
     }
})
export default styles