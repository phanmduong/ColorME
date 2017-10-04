import {StyleSheet, Dimensions} from 'react-native';
import * as color from './color';
import * as size from './size';


let wid = Dimensions.get('window').width;

const part = StyleSheet.create({
    // NAV BAR
    navTop:{
        backgroundColor: color.main,
    },

    //WRAPPER
    wrapperContainer:{
        backgroundColor: color.backGround,
    },

    //TITLE
    navTitle:{
        color: color.navTitle,
    },

    //ICON
    icon:{
        color: color.text,
        width: 18,
        height: 18,
        margin: 5,
    },
    iconLight:{
        color: color.navTitle,
        width: 18,
        height: 18,
        margin: 5,
    },

    // TEXT INPUT
    inputSearch:{
        width: wid - wid * 0.12,
        height: 30,
        color: color.navTitle,
        padding: 5,
        fontSize: 16,
    },
    inputTheme01:{
        fontSize: 14,
        height: 30,
    },



    //IMAGE
    avatarUserBig:{
        width: 100,
        height: 100,
        borderRadius: 50,
        margin: 5,
    },
    avatarUserSmall:{
        width: 40,
        height: 40,
        borderRadius: 20,
    },

    online:{
        borderWidth: 1,
        padding: 1,
        borderRadius: 50,
        borderColor: color.main
    },

    //CONTENT
    contentMid:{
        padding: 15,
        alignItems: 'center',
    },


    // TEXT
    titleBigDark:{
        fontSize : size.title,
        color: color.text,
        fontWeight: '800',
    },
    titleSmallDarkBold:{
        fontSize : size.titleSmall,
        color: color.text,
        fontWeight: '700',
    },
    titleSmallDark:{
        fontSize : size.titleSmall,
        color: color.text,
        fontWeight: 'normal',
    },
    describeDark:{
        fontSize : size.describe,
        color: color.text,
        fontWeight: '400',
    },

    describeGray:{
        fontSize : size.describe,
        color: color.gray,
        fontWeight: '400',
    },
    describeItalicDark:{
        fontStyle: 'italic',
        fontSize : size.describeSmall,
        color: color.gray,
        fontWeight: '400',
    },

    // PADDING
    padding:{
        padding: 10,
    },
    paddingRight:{
        paddingRight: 5,
    },


});


export default part;